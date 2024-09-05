export const wcagCriteria: {
  [key: string]: {
    title: string;
    description: string;
    link: string;
    background: string;
    principle: string;
    level: string;
  };
} = {
  '1.1.1': {
    title: 'Non-text Content',
    description: 'Provide text alternatives for any non-text content.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.2.1': {
    title: 'Audio-only and Video-only (Prerecorded)',
    description:
      'Any audio-only content should also be conveyed in text. Any video content with no audio track should also be described in text, but could also be described with audio.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.2.2': {
    title: 'Captions (Prerecorded)',
    description: 'The audio in videos should be captioned.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.2.3': {
    title: 'Audio Description or Media Alternative (Prerecorded)',
    description:
      'Actions, descriptions, and other important non-audio content in videos should be described in captions or a separate audio track.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.2.4': {
    title: 'Captions (Live)',
    description: 'Live audio content should be captioned.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.2.5': {
    title: 'Audio Description (Prerecorded)',
    description:
      'Actions, descriptions, and other important non-audio content in videos should be described in a separate audio track.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.2.6': {
    title: 'Sign Language (Prerecorded)',
    description:
      'Actions, descriptions, and other important non-audio content in videos should be described in sign language.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.2.7': {
    title: 'Extended Audio Description (Prerecorded)',
    description:
      'Actions, descriptions, and other important non-audio content in videos should be described in captions or a separate audio track.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.2.8': {
    title: 'Media Alternative (Prerecorded)',
    description:
      'A text-based transcription of a video is offered, on top of closed captions and audio description.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.2.9': {
    title: 'Audio-only (Live)',
    description: 'Any audio-only content should also be conveyed in text.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.3.1': {
    title: 'Info and Relationships',
    description:
      'Information or relationships between content that is visual is also conveyed through the code, via HTML or ARIA (for example the for attribute on a form label, or aria-describedby on an input that has hint text).',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.3.2': {
    title: 'Meaningful Sequence',
    description:
      'The visual presentation of the content matches what’s read out by a screen reader.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.3.3': {
    title: 'Sensory Characteristics',
    description:
      'Nothing is referred to just by its color, size, position, shape, and so on. Instructions, like “click the button below”, should be programmatically determinable.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.3.4': {
    title: 'Orientation',
    description:
      'The orientation of content is not restricted to just one way (like portrait mode on a phone).',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/orientation',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.3.5': {
    title: 'Identify Input Purpose',
    description:
      'The purpose of form fields can be identified by the browser, so that auto-complete suggestions can be offered in a dropdown.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.3.6': {
    title: 'Identify Purpose',
    description:
      'The purpose of any user interface component can be programmatically determined. Landmark regions and personalisation semantics have been used, so people can use browser tools to do things like: remove non-essential content, add identifying icons to particular elements, or navigate to particular elements.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.4.1': {
    title: 'Use of Color',
    description:
      'Color is not used as the only way to convey information, indicate an action, prompt a response, or distinguish a visual element.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.4.2': {
    title: 'Audio Control',
    description:
      'Any audio that plays for more than 3 seconds can be paused or stopped by the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'A',
  },
  '1.4.3': {
    title: 'Contrast (Minimum)',
    description:
      'Text and images of text have a contrast ratio of at least 4.5:1, except for large text, which only needs a contrast ratio of 3:1.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.4.4': {
    title: 'Resize Text',
    description:
      'Text can be resized up to 200% without loss of content or functionality.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.4.5': {
    title: 'Images of Text',
    description:
      'Text is not used in images, unless the image is essential to the content.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.4.6': {
    title: 'Contrast (Enhanced)',
    description:
      'Text and images of text have a contrast ratio of at least 7:1, except for large text, which only needs a contrast ratio of 4.5:1.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.4.7': {
    title: 'Low or No Background Audio',
    description:
      'Audio that plays automatically for more than 3 seconds is either a) a sound that is part of the functionality of the page, or b) can be turned off or adjusted by the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.4.8': {
    title: 'Visual Presentation',
    description:
      'Text is used to convey information, rather than images of text. Also a lot of other things like: do not justify text, line-height must be at least 1.5, witdh should be at least 80 characters, and so on.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.4.9': {
    title: 'Images of Text (No Exception)',
    description:
      'Text is not used in images, unless the image is essential to the content.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.4.10': {
    title: 'Reflow',
    description:
      'The content adjusts to the width of the screen, without requiring the user to scroll horizontally. This is also known as full responsive design.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AAA',
  },
  '1.4.11': {
    title: 'Non-text Contrast',
    description:
      'Text has a contrast ratio of 4.5 to 1. Large text can be a 3 to 1 ratio if it’s over 24px, or bold and over 19px. Usable components like form fields and buttons, and graphics like pie charts and line graphs should have a contrast ratio of 3 to 1.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.4.12': {
    title: 'Text Spacing',
    description:
      'Line height is at least 1.5 times the font size, and spacing between paragraphs is at least 2 times the font size.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '1.4.13': {
    title: 'Content on Hover or Focus',
    description:
      'Content that appears on hover or focus is dismissible, hoverable, and persistent.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus',
    background: '#B60000',
    principle: 'Perceivable',
    level: 'AA',
  },
  '2.1.1': {
    title: 'Keyboard',
    description: 'Make all functionality available from a keyboard.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.1.3': {
    title: 'Keyboard (No Exception)',
    description:
      'Make all functionality available from a keyboard without exception.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '3.1.1': {
    title: 'Language of Page',
    description:
      'The default human language of each web page can be programmatically determined. There is a lang attribute on the <html> element that matches the language of the page',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '4.1.2': {
    title: 'Name, Role, Value',
    description:
      'The semantic meaning of every interactive element (form controls, links, headings, landmarks, tables, and so on) is correct, and each has an accessible name.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value',
    background: '#535035',
    principle: 'Robust',
    level: 'A',
  },
  '4.1.3': {
    title: 'Status Messages',
    description:
      'Messages like form errors and success pop-ups are communicated to assistive technology like screen readers.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages',
    background: '#535035',
    principle: 'Robust',
    level: 'AA',
  },
  // Add more WCAG criteria as needed
};
