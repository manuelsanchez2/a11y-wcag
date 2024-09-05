import { wcagCriteria } from './wcagData.js';

const sheetCards = new CSSStyleSheet();
sheetCards.replaceSync(`
  :host {
    --card-width: 300px;
    --card-height: 400px;
    --font-size-small: 0.875rem;
    --font-size-medium: 1rem;
    --font-size-large: 2.5rem;
    --padding: 16px;
  }

  .wcag-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 12px;
    color: #fff;
    padding: var(--padding);
    font-family: 'Helvetica', 'Arial', sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: var(--card-width);
    min-height: var(--card-height);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .principle {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .principle .icon {
    font-size: calc(var(--font-size-medium) * 1.2);
  }

  .principle-text {
    font-size: var(--font-size-medium);
    font-weight: bold;
  }

  .level {
    background-color: white;
    color: black;
    border-radius: 10%;
    padding: 4px 8px;
    font-weight: bold;
    font-size: var(--font-size-medium);
  }

  .content h2 {
    font-size: var(--font-size-large);
    font-weight: bold;
    margin: 0;
  }

  .content h3 {
    font-size: var(--font-size-medium);
    font-weight: bold;
    margin-top: 0.5rem;
  }

  .content p {
    font-size: var(--font-size-small);
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .criteria-link {
    font-size: var(--font-size-small);
  }

  .criteria-link a {
    color: #fff;
    text-decoration: underline;
  }

  .criteria-link a:hover {
    color: #ccc;
  }
`);

class WcagCard extends HTMLElement {
  private criterion: string;
  private size: 'small' | 'medium' | 'large';

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.criterion = this.getAttribute('criterion') || '';
    this.size =
      (this.getAttribute('size') as 'small' | 'medium' | 'large') || 'medium';

    const data = wcagCriteria[this.criterion];
    if (!data) {
      shadow.innerHTML = `<p>Criterion not found.</p>`;
      return;
    }

    shadow.adoptedStyleSheets = [sheetCards];
    this.applySizeStyles(); // Apply size styles based on the size attribute

    const container = document.createElement('article');
    container.ariaLabel = `WCAG Criterion ${this.criterion}`;
    container.classList.add('wcag-card');
    container.style.backgroundColor = data.background;

    container.innerHTML = `
      <header>
        <div class="principle">
          <span class="principle-text">${data.principle}</span>
        </div>
        <span class="level">${data.level}</span>
      </header>
      <div class="content">
        <h2>${this.criterion}</h2>
        <h3>${data.title}</h3>
        <p>${data.description}</p>
      </div>
      <footer>
        <div class="criteria-link">
          <strong>Success Criterion:</strong>
          <a style="text-wrap: wrap; hyphens: auto; word-break: break-word;" href="${data.link}" rel="nofollow noopener" target="_blank">${data.link}</a>
        </div>
      </footer>
    `;

    shadow.appendChild(container);
  }

  // Optional: Allow dynamic updates
  static get observedAttributes() {
    return ['criterion'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'criterion' && oldValue !== newValue) {
      this.criterion = newValue;
      this.render();
    }

    if (name === 'size' && oldValue !== newValue) {
      this.size = newValue as 'small' | 'medium' | 'large';
      this.applySizeStyles();
    }
  }

  applySizeStyles() {
    const scaleFactor =
      this.size === 'small' ? 0.8 : this.size === 'large' ? 1.2 : 1;

    this.style.setProperty('--card-width', `${300 * scaleFactor}px`);
    this.style.setProperty('--card-height', `${400 * scaleFactor}px`);
    this.style.setProperty('--font-size-small', `${0.875 * scaleFactor}rem`);
    this.style.setProperty('--font-size-medium', `${1 * scaleFactor}rem`);
    this.style.setProperty('--font-size-large', `${2.5 * scaleFactor}rem`);
    this.style.setProperty('--padding', `${16 * scaleFactor}px`);
  }

  render() {
    const data = wcagCriteria[this.criterion];
    if (!data) {
      this.shadowRoot!.innerHTML = `<p>Criterion not found.</p>`;
      return;
    }

    const container = this.shadowRoot!.querySelector('article');
    if (container) {
      container.style.backgroundColor = data.background;

      const h2 = container.querySelector('h2');
      const h3 = container.querySelector('h3');
      const p = container.querySelector('p');
      const principleText = container.querySelector('.principle-text');
      const level = container.querySelector('.level');
      const link = container.querySelector('a');

      // Check if elements exist before setting their textContent or attributes
      if (h2) h2.textContent = this.criterion;
      if (h3) h3.textContent = data.title;
      if (p) p.textContent = data.description;
      if (principleText) principleText.textContent = data.principle;
      if (level) level.textContent = data.level;
      if (link) {
        link.textContent = data.link;
        link.href = data.link;
      }
    }
  }
}

customElements.define('wcag-card', WcagCard);

export { WcagCard };
