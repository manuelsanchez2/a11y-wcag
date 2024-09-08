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
    padding: 0 var(--padding) var(--padding) 0; 
    font-family: 'Helvetica', 'Arial', sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: var(--card-width);
    min-height: var(--card-height);
    border: 1px solid black;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  .principle {
    display: flex;
    align-items: center;
    padding-inline: calc(var(--padding));
    gap: 0.5rem; 
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    text-shadow: 2px 3px 10px rgba(0, 0, 0, .47843137254901963);
  }

  .principle-icon {
    display: flex;
  }

  .principle svg {
    width: calc(var(--font-size-medium) * 1.4);
    height: calc(var(--font-size-medium) * 1.4);
  }

  .principle-text {
    font-size: var(--font-size-medium);
  }

  .level {
    background-color: white;
    color: black;
    border-radius: 10%;
    margin-top: calc(var(--padding) / 2);
    padding: 4px 8px;
    font-weight: bold;
    font-size: var(--font-size-medium);
    border: 1px solid black;
  }

  .content {
    padding-left: var(--padding);
  }

  .content .content-criterion {
    font-size: var(--font-size-large);
    font-weight: bold;
    margin: 0;
    text-shadow: 2px 3px 10px rgba(0, 0, 0, .47843137254901963);
  }

  .content .content-title {
    font-size: var(--font-size-medium);
    font-weight: bold;
    margin-top: 0.5rem;
    text-shadow: 2px 3px 10px rgba(0, 0, 0, .47843137254901963);
  }

  .content p {
    font-size: var(--font-size-small);
    margin-top: 0.5rem;
    text-shadow: 2px 3px 10px rgba(0, 0, 0, .47843137254901963);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-left: var(--padding);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, .47843137254901963);

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

    const principle = data.principle.toLowerCase().replace(' ', '-');
    console.log(principle);
    let svg;

    switch (principle) {
      case 'perceivable':
        svg = `<svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#perceivable-icon)"><path d="M12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5ZM12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5ZM12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 16C9.37 16 7 14.43 6 12C7.38 8.69 11.19 7.12 14.5 8.5C16.08 9.16 17.34 10.42 18 12C17 14.43 14.63 16 12 16ZM12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5ZM12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13Z" fill="white"/></g><defs><clipPath id="perceivable-icon"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`;
        break;
      case 'operable':
        svg = `<svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#operable-icon)"><path d="M12.0001 15.5C11.0718 15.5 10.1816 15.1313 9.52521 14.4749C8.86883 13.8185 8.50008 12.9283 8.50008 12C8.50008 11.0717 8.86883 10.1815 9.52521 9.52513C10.1816 8.86875 11.0718 8.5 12.0001 8.5C12.9283 8.5 13.8186 8.86875 14.475 9.52513C15.1313 10.1815 15.5001 11.0717 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.475 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5ZM19.4301 12.97C19.4701 12.65 19.5001 12.33 19.5001 12C19.5001 11.67 19.4701 11.34 19.4301 11L21.5401 9.37C21.7301 9.22 21.7801 8.95 21.6601 8.73L19.6601 5.27C19.5401 5.05 19.2701 4.96 19.0501 5.05L16.5601 6.05C16.0401 5.66 15.5001 5.32 14.8701 5.07L14.5001 2.42C14.4601 2.18 14.2501 2 14.0001 2H10.0001C9.75008 2 9.54008 2.18 9.50008 2.42L9.13008 5.07C8.50008 5.32 7.96008 5.66 7.44008 6.05L4.95008 5.05C4.73008 4.96 4.46008 5.05 4.34008 5.27L2.34008 8.73C2.21008 8.95 2.27008 9.22 2.46008 9.37L4.57008 11C4.53008 11.34 4.50008 11.67 4.50008 12C4.50008 12.33 4.53008 12.65 4.57008 12.97L2.46008 14.63C2.27008 14.78 2.21008 15.05 2.34008 15.27L4.34008 18.73C4.46008 18.95 4.73008 19.03 4.95008 18.95L7.44008 17.94C7.96008 18.34 8.50008 18.68 9.13008 18.93L9.50008 21.58C9.54008 21.82 9.75008 22 10.0001 22H14.0001C14.2501 22 14.4601 21.82 14.5001 21.58L14.8701 18.93C15.5001 18.67 16.0401 18.34 16.5601 17.94L19.0501 18.95C19.2701 19.03 19.5401 18.95 19.6601 18.73L21.6601 15.27C21.7801 15.05 21.7301 14.78 21.5401 14.63L19.4301 12.97Z" fill="white"/></g><defs><clipPath id="operable-icon"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`;
        break;
      case 'understandable':
        svg = `<svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#understandable-icon)"><path d="M21.3301 12.9101C21.4201 14.4601 20.7101 15.9501 19.4401 16.8601L20.2101 18.3501C20.4401 18.8001 20.4701 19.3301 20.2701 19.8001C20.0801 20.2701 19.6901 20.6401 19.2101 20.8001L18.4201 21.0501C18.2501 21.1101 18.0601 21.1401 17.8801 21.1401C17.3701 21.1401 16.8901 20.9101 16.5601 20.5001L14.4401 18.0001C13.5501 17.8501 12.7101 17.4701 12.0001 16.9001C11.5001 17.0501 11.0001 17.1301 10.5001 17.1301C9.62006 17.1301 8.74006 16.8601 8.00006 16.3401C7.47006 16.5001 6.93006 16.5701 6.38006 16.5601C5.59006 16.5701 4.81006 16.4101 4.08006 16.1101C2.65006 15.4701 1.70006 14.0701 1.65006 12.5001C1.57006 11.7801 1.69006 11.0501 2.00006 10.3901C1.71006 9.64007 1.68006 8.82007 1.93006 8.06007C2.30006 7.11007 3.00006 6.32007 3.87006 5.82007C4.45006 4.13007 6.08006 3.00007 7.87006 3.12007C9.47006 1.62007 11.9201 1.46007 13.7001 2.75007C14.1201 2.64007 14.5601 2.58007 15.0001 2.58007C16.3601 2.55007 17.6501 3.15007 18.5001 4.22007C20.5401 4.75007 22.0001 6.57007 22.0801 8.69007C22.1301 9.80007 21.8301 10.8901 21.2201 11.8201C21.2901 12.1801 21.3301 12.5401 21.3301 12.9101ZM16.3301 11.5001C16.9001 11.5701 17.3501 12.0001 17.3501 12.5701C17.3501 12.8353 17.2447 13.0896 17.0572 13.2772C16.8696 13.4647 16.6153 13.5701 16.3501 13.5701H15.7201C15.4001 14.4701 14.8401 15.2601 14.1001 15.8601C14.3501 15.9501 14.6101 16.0001 14.8701 16.0701C20.0001 16.0001 19.4001 12.8701 19.4001 12.8201C19.3401 11.3901 18.1401 10.2701 16.7101 10.3301C16.4448 10.3301 16.1905 10.2247 16.003 10.0372C15.8154 9.84964 15.7101 9.59529 15.7101 9.33007C15.7101 9.06486 15.8154 8.8105 16.003 8.62296C16.1905 8.43543 16.4448 8.33007 16.7101 8.33007C17.9401 8.36007 19.1201 8.82007 20.0401 9.63007C20.0901 9.34007 20.1201 9.04007 20.1201 8.74007C20.0601 7.50007 19.5001 6.42007 17.2501 6.21007C16.0001 3.25007 12.8501 4.89007 12.8501 5.81007C12.8201 6.04007 13.0601 6.53007 13.1001 6.56007C13.3653 6.56007 13.6196 6.66543 13.8072 6.85296C13.9947 7.0405 14.1001 7.29486 14.1001 7.56007C14.1001 8.11007 13.6501 8.56007 13.1001 8.56007C12.5701 8.54007 12.0701 8.34007 11.6701 8.00007C11.1901 8.31007 10.6401 8.50007 10.0701 8.56007C9.50006 8.61007 9.03006 8.21007 9.00006 7.66007C8.92006 7.10007 9.33006 6.61007 9.88006 6.56007C10.0401 6.54007 10.8201 6.42007 10.8201 5.79007C10.8201 5.13007 11.0701 4.50007 11.5001 4.00007C10.5801 3.75007 9.59006 4.08007 8.59006 5.29007C6.75006 5.00007 6.00006 5.25007 5.45006 7.20007C4.50006 7.67007 4.00006 8.00007 3.78006 9.00007C4.86006 8.78007 5.97006 8.87007 7.00006 9.25007C7.50006 9.44007 7.78006 10.0001 7.59006 10.5401C7.40006 11.0601 6.82006 11.3201 6.30006 11.1301C5.57006 10.8101 4.75006 10.7901 4.00006 11.0701C3.68006 11.3401 3.68006 11.9001 3.68006 12.3401C3.68006 13.0801 4.05006 13.7701 4.68006 14.1701C5.21006 14.4401 5.80006 14.5801 6.39006 14.5701C6.24006 14.3101 6.11006 14.0401 6.00006 13.7601C5.81006 13.2201 6.10006 12.6301 6.64006 12.4401C7.18006 12.2501 7.77006 12.5401 7.96006 13.0801C8.36006 14.2201 9.38006 15.0001 10.5801 15.1301C11.9501 15.0601 13.1701 14.2501 13.7701 13.0001C14.0001 11.6201 15.1101 11.5001 16.3301 11.5001ZM18.3301 18.9701L17.7101 17.6701L17.0001 17.8301L18.0001 19.0801L18.3301 18.9701ZM13.6801 10.3601C13.7001 9.83007 13.3001 9.38007 12.7701 9.33007C12.0601 9.29007 11.3701 9.53007 10.8401 10.0001C10.2701 10.5801 9.97006 11.3801 10.0001 12.1901C10.0001 12.4553 10.1054 12.7096 10.293 12.8972C10.4805 13.0847 10.7348 13.1901 11.0001 13.1901C11.5701 13.1901 12.0001 12.7401 12.0001 12.1901C12.0001 11.9201 12.0701 11.6501 12.2301 11.4301C12.3501 11.3301 12.5001 11.2801 12.6601 11.2801C13.2101 11.3101 13.6801 10.9001 13.6801 10.3601Z" fill="white"/></g><defs><clipPath id="understandable-icon"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`;
        break;
      case 'robust':
        svg = `<svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6V16H9V12C9 11.4696 9.21071 10.9609 9.58579 10.5858C9.96086 10.2107 10.4696 10 11 10H16C16.5304 10 17.0391 10.2107 17.4142 10.5858C17.7893 10.9609 18 11.4696 18 12V16H20V6H4ZM0 20V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H24V20H18C18 21.11 17.1 22 16 22H11C10.4696 22 9.96086 21.7893 9.58579 21.4142C9.21071 21.0391 9 20.5304 9 20H0ZM11.5 20C11.3674 20 11.2402 20.0527 11.1464 20.1464C11.0527 20.2402 11 20.3674 11 20.5C11 20.6326 11.0527 20.7598 11.1464 20.8536C11.2402 20.9473 11.3674 21 11.5 21C11.6326 21 11.7598 20.9473 11.8536 20.8536C11.9473 20.7598 12 20.6326 12 20.5C12 20.3674 11.9473 20.2402 11.8536 20.1464C11.7598 20.0527 11.6326 20 11.5 20ZM15.5 20C15.3674 20 15.2402 20.0527 15.1464 20.1464C15.0527 20.2402 15 20.3674 15 20.5C15 20.6326 15.0527 20.7598 15.1464 20.8536C15.2402 20.9473 15.3674 21 15.5 21C15.6326 21 15.7598 20.9473 15.8536 20.8536C15.9473 20.7598 16 20.6326 16 20.5C16 20.3674 15.9473 20.2402 15.8536 20.1464C15.7598 20.0527 15.6326 20 15.5 20ZM13 20V21H14V20H13ZM11 12V19H16V12H11Z" fill="white"/></svg>`;
        break;
      default:
        svg = `<svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6V16H9V12C9 11.4696 9.21071 10.9609 9.58579 10.5858C9.96086 10.2107 10.4696 10 11 10H16C16.5304 10 17.0391 10.2107 17.4142 10.5858C17.7893 10.9609 18 11.4696 18 12V16H20V6H4ZM0 20V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H24V20H18C18 21.11 17.1 22 16 22H11C10.4696 22 9.96086 21.7893 9.58579 21.4142C9.21071 21.0391 9 20.5304 9 20H0ZM11.5 20C11.3674 20 11.2402 20.0527 11.1464 20.1464C11.0527 20.2402 11 20.3674 11 20.5C11 20.6326 11.0527 20.7598 11.1464 20.8536C11.2402 20.9473 11.3674 21 11.5 21C11.6326 21 11.7598 20.9473 11.8536 20.8536C11.9473 20.7598 12 20.6326 12 20.5C12 20.3674 11.9473 20.2402 11.8536 20.1464C11.7598 20.0527 11.6326 20 11.5 20ZM15.5 20C15.3674 20 15.2402 20.0527 15.1464 20.1464C15.0527 20.2402 15 20.3674 15 20.5C15 20.6326 15.0527 20.7598 15.1464 20.8536C15.2402 20.9473 15.3674 21 15.5 21C15.6326 21 15.7598 20.9473 15.8536 20.8536C15.9473 20.7598 16 20.6326 16 20.5C16 20.3674 15.9473 20.2402 15.8536 20.1464C15.7598 20.0527 15.6326 20 15.5 20ZM13 20V21H14V20H13ZM11 12V19H16V12H11Z" fill="white"/></svg>`;
    }

    shadow.adoptedStyleSheets = [sheetCards];
    this.applySizeStyles(); // Apply size styles based on the size attribute

    const container = document.createElement('article');
    container.ariaLabel = `WCAG Criterion ${this.criterion}`;
    container.classList.add('wcag-card');
    container.style.backgroundColor = data.background;

    const getDarkerColor = (color: string) => {
      switch (color) {
        case '#535035':
          return '#3E2E1F';
        case '#186312':
          return '#0F4A1A';
        case '#B60000':
          return '#7F0000';
        case '#1651A9':
          return '#0D3A7A';
        default:
          return color;
      }
    };

    const darkerColor = getDarkerColor(data.background);

    container.innerHTML = `
      <header>
        <div style="background-color: ${darkerColor}" class="principle">
          <span class="principle-icon">${svg}</span>
          <span class="principle-text">${data.principle}</span>
        </div>
        <span class="level">${data.level}</span>
      </header>
      <div class="content">
        <div class="content-criterion">${this.criterion}</div>
        <div class="content-title">${data.title}</div>
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
