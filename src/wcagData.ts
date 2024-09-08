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
  '2.1.2': {
    title: 'No Keyboard Trap',
    description:
      'Keyboard focus is never locked or trapped at one particular part of the page.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap',
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
  '2.1.4': {
    title: 'Character Key Shortcuts',
    description:
      'If a keyboard shortcut is implemented in the content, then it can be turned off or remapped.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.2.1': {
    title: 'Timing Adjustable',
    description:
      'The user can control the timing of any time-based content, like a slideshow or a video. Anyways, time limits should be avoided unless they are able to be extended.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.2.2': {
    title: 'Pause, Stop, Hide',
    description:
      'Automatically moving/animating content that lasts more than 5 seconds should be able to be stopped or hidden.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.2.3': {
    title: 'No Timing',
    description:
      'Timing is not an essential part of the content, or can be turned off or extended. Unless it’s a live broadcast or something else that’s happening in real time, there are no time constraints placed on the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/no-timing',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.2.4': {
    title: 'Interruptions',
    description:
      'Interruptions can be postponed or suppressed by the user, except in emergencies.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/interruptions',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.2.5': {
    title: 'Re-authenticating',
    description:
      'If a user session expires, the user can continue the activity without losing any data.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.2.6': {
    title: 'Timeouts',
    description:
      'If a user session is about to expire, a warning is shown to the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/timeouts',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.3.1': {
    title: 'Three Flashes or Below Threshold',
    description:
      'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.3.2': {
    title: 'Three Flashes',
    description:
      'Web pages do not contain anything that flashes more than three times in any one second period.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.3.3': {
    title: 'Animation from Interactions',
    description:
      'If an animation is triggered by interaction, the user can pause, stop, or hide it.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.4.1': {
    title: 'Bypass Blocks',
    description:
      'A mechanism is available to bypass blocks of content that are repeated on multiple web pages.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.4.2': {
    title: 'Page Titled',
    description:
      'Every web page has a title that describes its topic or purpose.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.4.3': {
    title: 'Focus Order',
    description:
      'The order in which elements receive focus is logical and intuitive.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.4.4': {
    title: 'Link Purpose (In Context)',
    description:
      'The purpose of each link can be determined from the link text alone, or from the link text and its context.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.4.5': {
    title: 'Multiple Ways',
    description:
      'More than one way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process. Header navigation is not the only way to get around a website; there’s another way, such as on-page links, a sitemap, or a site-wide search.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
  },
  '2.4.6': {
    title: 'Headings and Labels',
    description:
      'Headings and labels describe topic or purpose. Headings are used to structure content, and labels are used to identify form controls.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
  },
  '2.4.7': {
    title: 'Focus Visible',
    description:
      'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
  },
  '2.4.8': {
    title: 'Location',
    description:
      'The user is informed of their location within a set of web pages.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/location',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.4.9': {
    title: 'Link Purpose (Link Only)',
    description:
      'The purpose of each link can be determined from the link text alone.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.4.10': {
    title: 'Section Headings',
    description:
      'Headings are used to structure content. They are not used just for visual presentation.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/section-headings',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.4.11': {
    title: 'Focus Not Obscured (Minimum)',
    description:
      'The item receiving keyboard focus is always partially visible in the viewport of the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
  },
  '2.4.12': {
    title: 'Focus Not Obscured (Enhanced)',
    description:
      'Almost the same as 2.4.12 Focus Not Obscured (Minimum), but the focusable item should be fully visible when it’s tabbed to, so that no scrolling is necessary to bring it into view.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.4.13': {
    title: 'Focus Appearance',
    description:
      'The visual focus indicator is visible and clear, and it doesn nott rely on color alone. The focus indicators for keyboard users are easy to spot: they are at least 2px thick and have a contrast ratio of 3 to 1 (or higher) against their unfocused state.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.5.1': {
    title: 'Pointer Gestures',
    description:
      'Any functionality that can be operated by a mouse or trackpad (swiping, pinching, drawing, and so on) can also be operated by a single pointer without a path.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.5.2': {
    title: 'Pointer Cancellation',
    description:
      'If an action is triggered by a pointer, then the action can be cancelled without moving the pointer. Actions (like pressing a button) aren’t triggered on mouse-down; rather on mouse-up.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.5.3': {
    title: 'Label in Name',
    description:
      'The accessible name of a user interface component includes any visible label.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.5.4': {
    title: 'Motion Actuation',
    description:
      'Functionality that can be operated by device motion or user motion can also be operated by a single pointer without a path. There is no reliance on device motion, like shaking or tilting, to carry out an action.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation',
    background: '#1651A9',
    principle: 'Operable',
    level: 'A',
  },
  '2.5.5': {
    title: 'Target Size (Enhanced)',
    description:
      'The target size for pointer inputs is at least 44 by 44 CSS pixels. This is the minimum size for buttons and other interactive elements.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
  },
  '2.5.6': {
    title: 'Concurrent Input Mechanisms',
    description:
      'If a user interface can be operated by multiple input methods, then the user can switch between them.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AAA',
  },
  '2.5.7': {
    title: 'Dragging Movements',
    description:
      'An action that is achieved by dragging from one point to another, for example drag-and-drop for reordering, can also be carried out by pressing buttons (‘Move item up’, ‘Move item down’, etc.). This is related to 2.1.1 Keyboard and 2.5.1 Pointer Gestures. ',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/drag-and-drop',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
  },
  '2.5.8': {
    title: 'Target Size (Minimum)',
    description:
      'Anything clickable should be at least 24 by 24 pixels, except links within a sentence which will just be the size of the text.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum',
    background: '#1651A9',
    principle: 'Operable',
    level: 'AA',
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
  '3.1.2': {
    title: 'Language of Parts',
    description:
      'The human language of each passage or phrase in the content can be programmatically determined. There is a lang attribute on the element that matches the language of the content.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.1.3': {
    title: 'Unusual Words',
    description:
      'Jargon and figurative language is avoided, or, where not it’s possible, the words are defined or clarified the first time they’re used on a page.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/unusual-words',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
  },
  '3.1.4': {
    title: 'Abbreviations',
    description:
      'Abbreviations are marked up with the <abbr> element, or expanded on the first use.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/abbreviations',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.1.5': {
    title: 'Reading Level',
    description:
      'The reading level of the text is at the lower secondary education level or lower.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/reading-level',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
  },
  '3.1.6': {
    title: 'Pronunciation',
    description:
      'Any unusual words, phrases, or abbreviations have a pronunciation guide.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pronunciation',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
  },
  '3.2.1': {
    title: 'On Focus',
    description:
      'When a user interface component receives focus, it does not initiate a change of context. So basically nothing unexpected changes when something on the page receives keyboard focus, like a <button>',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '3.2.2': {
    title: 'On Input',
    description:
      'When a user inputs information, it does not initiate a change of context. So basically nothing unexpected changes when a user inputs information, like text into a form field.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '3.2.3': {
    title: 'Consistent Navigation',
    description:
      'Navigation mechanisms that are repeated on multiple web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.2.4': {
    title: 'Consistent Identification',
    description:
      'Components that have the same functionality are identified consistently.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.2.5': {
    title: 'Change on Request',
    description: 'Changes of context are initiated only by user request.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/change-on-request',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
  },
  '3.2.6': {
    title: 'Consistent Help',
    description: 'Help is available in the same location on every web page.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '3.3.1': {
    title: 'Error Identification',
    description:
      'If an input error is detected, the error is identified and described to the user in text. Also, we should provide suggestions to help the user successfully proceed.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '3.3.2': {
    title: 'Labels or Instructions',
    description:
      'As much help as is needed is offered to prevent triggering a form error; the form label may be enough, but hint text may also be required.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '3.3.3': {
    title: 'Error Suggestion',
    description:
      'If an input error is detected and suggestions for correction are known, then the suggestions are provided to the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.3.4': {
    title: 'Error Prevention (Legal, Financial, Data)',
    description:
      'For web pages that require user input, submissions are reversible, checked for errors, and confirmed by the user.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.3.5': {
    title: 'Help',
    description: 'Context-sensitive help is available.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/help',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
  },
  '3.3.6': {
    title: 'Error Prevention (All)',
    description:
      'After entering any information, the user is offered the opportunity to check it before sending.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
  },
  '3.3.7': {
    title: 'Redundant Entry',
    description:
      'If the user as already given some information, it’s either: not asked for again, pre-populated, or can be selected from a dropdown.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry',
    background: '#186312',
    principle: 'Understandable',
    level: 'A',
  },
  '3.3.8': {
    title: 'Accessible Authentication (Minimum)',
    description:
      'If the user is required to log in, they don’t have to remember a password, for example they can: copy and paste a password into the right form field, use password manager softwares, have a verficiation link setn to their email. It also allows photo recognition, like CAPTCHAs and user-uploaded picture recognition.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum',
    background: '#186312',
    principle: 'Understandable',
    level: 'AA',
  },
  '3.3.9': {
    title: 'Accessible Authentication (Enhanced)',
    description:
      'Almost the same as 3.3.8 Accessible Authentication (Minimum), but CAPTCHAs and user-uploaded pictures can’t be included in the log-in process.',
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced',
    background: '#186312',
    principle: 'Understandable',
    level: 'AAA',
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
};
