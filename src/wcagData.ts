type ILang = 'en' | 'de';

type IBackgroundColor =
  | '#B60000'
  | '#1651A9'
  | '#186312'
  | '#535035'
  | '#000000'
  | '#FFFFFF'
  | 'black'
  | 'white';

type IWCAGCardLanguages = {
  [key in ILang]: {
    title: string;
    description: string;
    principle: string;
  };
};

type IWCAGCard = {
  link: string;
  background: IBackgroundColor;
  level: 'A' | 'AA' | 'AAA';
} & IWCAGCardLanguages;

type IWCAGSuccessCriteriaNumbers =
  | '1.1.1'
  | '1.2.1'
  | '1.2.2'
  | '1.2.3'
  | '1.2.4'
  | '1.2.5'
  | '1.2.6'
  | '1.2.7'
  | '1.2.8'
  | '1.2.9'
  | '1.3.1'
  | '1.3.2'
  | '1.3.3'
  | '1.3.4'
  | '1.3.5'
  | '1.3.6'
  | '1.4.1'
  | '1.4.2'
  | '1.4.3'
  | '1.4.4'
  | '1.4.5'
  | '1.4.6'
  | '1.4.7'
  | '1.4.8'
  | '1.4.9'
  | '1.4.10'
  | '1.4.11'
  | '1.4.12'
  | '1.4.13'
  | '2.1.1'
  | '2.1.2'
  | '2.1.3'
  | '2.1.4'
  | '2.2.1'
  | '2.2.2'
  | '2.2.3'
  | '2.2.4'
  | '2.2.5'
  | '2.2.6'
  | '2.3.1'
  | '2.3.2'
  | '2.3.3'
  | '2.4.1'
  | '2.4.2'
  | '2.4.3'
  | '2.4.4'
  | '2.4.5'
  | '2.4.6'
  | '2.4.7'
  | '2.4.8'
  | '2.4.9'
  | '2.4.10'
  | '2.4.11'
  | '2.4.12'
  | '2.4.13'
  | '2.5.1'
  | '2.5.2'
  | '2.5.3'
  | '2.5.4'
  | '2.5.5'
  | '2.5.6'
  | '2.5.7'
  | '2.5.8'
  | '3.1.1'
  | '3.1.2'
  | '3.1.3'
  | '3.1.4'
  | '3.1.5'
  | '3.1.6'
  | '3.2.1'
  | '3.2.2'
  | '3.2.3'
  | '3.2.4'
  | '3.2.5'
  | '3.2.6'
  | '3.3.1'
  | '3.3.2'
  | '3.3.3'
  | '3.3.4'
  | '3.3.5'
  | '3.3.6'
  | '3.3.7'
  | '3.3.8'
  | '3.3.9'
  | '4.1.2'
  | '4.1.3';

type IWCAGCriteria = {
  [key in IWCAGSuccessCriteriaNumbers]: IWCAGCard;
};

export const wcagCriteria: IWCAGCriteria = {
  '1.1.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Non-text Content',
      description: 'Provide text alternatives for any non-text content.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Nicht-Text-Inhalte',
      description:
        'Für nicht-textuelle Inhalte Textalternativen bereitstellen.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Audio-only and Video-only (Prerecorded)',
      description:
        'Any audio-only content should also be conveyed in text. Any video content with no audio track should also be described in text, but could also be described with audio.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Nur Audio und Nur Video (Voraufgezeichnet)',
      description:
        'Alle nur-Audio-Inhalte sollten auch in Text vermittelt werden. Video-Inhalte ohne Tonspur sollten ebenfalls in Text beschrieben werden, können aber auch mit Audio beschrieben werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Captions (Prerecorded)',
      description: 'The audio in videos should be captioned.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Untertitel (Voraufgezeichnet)',
      description: 'Der Ton in Videos sollte untertitelt werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Audio Description or Media Alternative (Prerecorded)',
      description:
        'Actions, descriptions, and other important non-audio content in videos should be described in captions or a separate audio track.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Audiobeschreibung oder Medienalternative (Voraufgezeichnet)',
      description:
        'Aktionen, Beschreibungen und andere wichtige nicht-audio-basierte Inhalte in Videos sollten in Untertiteln oder einer separaten Audiospur beschrieben werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Captions (Live)',
      description: 'Live audio content should be captioned.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Untertitel (Live)',
      description: 'Live-Audio-Inhalte sollten untertitelt werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Audio Description (Prerecorded)',
      description:
        'Actions, descriptions, and other important non-audio content in videos should be described in a separate audio track.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Audiobeschreibung (Voraufgezeichnet)',
      description:
        'Aktionen, Beschreibungen und andere wichtige nicht-audio-basierte Inhalte in Videos sollten in einer separaten Audiospur beschrieben werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Sign Language (Prerecorded)',
      description:
        'Actions, descriptions, and other important non-audio content in videos should be described in sign language.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Gebärdensprache (Voraufgezeichnet)',
      description:
        'Aktionen, Beschreibungen und andere wichtige nicht-audio-basierte Inhalte in Videos sollten in Gebärdensprache beschrieben werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.7': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Extended Audio Description (Prerecorded)',
      description:
        'Actions, descriptions, and other important non-audio content in videos should be described in captions or a separate audio track.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Erweiterte Audiobeschreibung (Voraufgezeichnet)',
      description:
        'Aktionen, Beschreibungen und andere wichtige nicht-audio-basierte Inhalte in Videos sollten in Untertiteln oder einer separaten Audiospur beschrieben werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.8': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Media Alternative (Prerecorded)',
      description:
        'A text-based transcription of a video is offered, on top of closed captions and audio description.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Medienalternative (Voraufgezeichnet)',
      description:
        'Eine textbasierte Transkription eines Videos wird zusätzlich zu Untertiteln und Audiobeschreibungen angeboten.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.2.9': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Audio-only (Live)',
      description: 'Any audio-only content should also be conveyed in text.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Nur-Audio (Live)',
      description:
        'Alle nur-Audio-Inhalte sollten auch in Text vermittelt werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.3.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Info and Relationships',
      description:
        'Information or relationships between content that is visual is also conveyed through the code, via HTML or ARIA (for example the for attribute on a form label, or aria-describedby on an input that has hint text).',
      principle: 'Perceivable',
    },
    de: {
      title: 'Informationen und Beziehungen',
      description:
        'Informationen oder Beziehungen zwischen Inhalten, die visuell dargestellt werden, werden auch durch den Code vermittelt, z. B. durch HTML oder ARIA (z. B. das Attribut for bei einem Formularfeld oder aria-describedby bei einem Eingabefeld mit Hinweistext).',
      principle: 'Wahrnehmbar',
    },
  },
  '1.3.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Meaningful Sequence',
      description:
        'The visual presentation of the content matches what’s read out by a screen reader.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Bedeutungsvolle Reihenfolge',
      description:
        'Die visuelle Darstellung der Inhalte stimmt mit dem überein, was ein Screenreader vorliest.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.3.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Sensory Characteristics',
      description:
        'Nothing is referred to just by its color, size, position, shape, and so on. Instructions, like “click the button below”, should be programmatically determinable.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Sinneseigenschaften',
      description:
        'Nichts wird nur durch seine Farbe, Größe, Position, Form usw. bezeichnet. Anweisungen wie „Klicken Sie auf die Schaltfläche unten“ sollten programmatisch bestimmbar sein.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.3.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/orientation',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Orientation',
      description:
        'The orientation of content is not restricted to just one way (like portrait mode on a phone).',
      principle: 'Perceivable',
    },
    de: {
      title: 'Orientierung',
      description:
        'Die Ausrichtung des Inhalts ist nicht auf eine einzige Weise beschränkt (wie der Hochformatmodus auf einem Telefon).',
      principle: 'Wahrnehmbar',
    },
  },
  '1.3.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Identify Input Purpose',
      description:
        'The purpose of form fields can be identified by the browser, so that auto-complete suggestions can be offered in a dropdown.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Zweck der Eingabe identifizieren',
      description:
        'Der Zweck von Formularfeldern kann vom Browser identifiziert werden, sodass Autovervollständigungsvorschläge in einem Dropdown-Menü angeboten werden können.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.3.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Identify Purpose',
      description:
        'The purpose of any user interface component can be programmatically determined. Landmark regions and personalisation semantics have been used, so people can use browser tools to do things like: remove non-essential content, add identifying icons to particular elements, or navigate to particular elements.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Zweck identifizieren',
      description:
        'Der Zweck jedes Benutzeroberflächenelements kann programmatisch bestimmt werden. Landmark-Regionen und Personalisierungssemantik wurden verwendet, damit Benutzer Browser-Tools verwenden können, um Dinge wie das Entfernen nicht wesentlicher Inhalte, das Hinzufügen von Identifikationsikonen zu bestimmten Elementen oder das Navigieren zu bestimmten Elementen zu tun.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Use of Color',
      description:
        'Color is not used as the only way to convey information, indicate an action, prompt a response, or distinguish a visual element.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Verwendung von Farbe',
      description:
        'Farbe wird nicht als einziger Weg verwendet, um Informationen zu vermitteln, eine Aktion anzuzeigen, eine Antwort aufzufordern oder ein visuelles Element zu unterscheiden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control',
    background: '#B60000',
    level: 'A',
    en: {
      title: 'Audio Control',
      description:
        'Any audio that plays for more than 3 seconds can be paused or stopped by the user.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Audio-Steuerung',
      description:
        'Jeder Ton, der länger als 3 Sekunden spielt, kann vom Benutzer angehalten oder gestoppt werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Contrast (Minimum)',
      description:
        'Text and images of text have a contrast ratio of at least 4.5:1, except for large text, which only needs a contrast ratio of 3:1.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Kontrast (Minimum)',
      description:
        'Text und Textbilder haben ein Kontrastverhältnis von mindestens 4,5:1, außer bei großen Texten, die nur ein Kontrastverhältnis von 3:1 benötigen.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Resize Text',
      description:
        'Text can be resized up to 200% without loss of content or functionality.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Textgröße ändern',
      description:
        'Text kann um bis zu 200 % vergrößert werden, ohne dass Inhalte oder Funktionen verloren gehen.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Images of Text',
      description:
        'Text is not used in images, unless the image is essential to the content.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Bilder von Text',
      description:
        'Text wird nicht in Bildern verwendet, es sei denn, das Bild ist für den Inhalt unerlässlich.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Contrast (Enhanced)',
      description:
        'Text and images of text have a contrast ratio of at least 7:1, except for large text, which only needs a contrast ratio of 4.5:1.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Kontrast (Erweitert)',
      description:
        'Text und Textbilder haben ein Kontrastverhältnis von mindestens 7:1, außer bei großen Texten, die nur ein Kontrastverhältnis von 4,5:1 benötigen.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.7': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Low or No Background Audio',
      description:
        'Audio that plays automatically for more than 3 seconds is either a) a sound that is part of the functionality of the page, or b) can be turned off or adjusted by the user.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Geringe oder keine Hintergrundmusik',
      description:
        'Audio, das automatisch länger als 3 Sekunden abgespielt wird, ist entweder a) ein Ton, der Teil der Funktionalität der Seite ist, oder b) kann vom Benutzer ausgeschaltet oder angepasst werden.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.8': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Visual Presentation',
      description:
        'Text is used to convey information, rather than images of text. Also a lot of other things like: do not justify text, line-height must be at least 1.5, witdh should be at least 80 characters, and so on.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Visuelle Präsentation',
      description:
        'Text wird verwendet, um Informationen zu vermitteln, anstatt Bilder von Text. Auch viele andere Dinge wie: Text nicht rechtfertigen, Zeilenhöhe muss mindestens 1,5 betragen, Breite sollte mindestens 80 Zeichen betragen, usw.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.9': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Images of Text (No Exception)',
      description:
        'Text is not used in images, unless the image is essential to the content.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Bilder von Text (Keine Ausnahme)',
      description:
        'Text wird nicht in Bildern verwendet, es sei denn, das Bild ist für den Inhalt unerlässlich.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.10': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow',
    background: '#B60000',
    level: 'AAA',
    en: {
      title: 'Reflow',
      description:
        'The content adjusts to the width of the screen, without requiring the user to scroll horizontally. This is also known as full responsive design.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Umbruch',
      description:
        'Der Inhalt passt sich der Bildschirmbreite an, ohne dass der Benutzer horizontal scrollen muss. Dies wird auch als vollständiges responsives Design bezeichnet.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.11': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Non-text Contrast',
      description:
        'Text has a contrast ratio of 4.5 to 1. Large text can be a 3 to 1 ratio if it’s over 24px, or bold and over 19px. Usable components like form fields and buttons, and graphics like pie charts and line graphs should have a contrast ratio of 3 to 1.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Kontrast von Nicht-Text',
      description:
        'Text hat ein Kontrastverhältnis von 4,5 zu 1. Großer Text kann ein Verhältnis von 3 zu 1 haben, wenn er über 24px groß ist oder fett und über 19px groß ist. Verwendbare Komponenten wie Formularfelder und Schaltflächen sowie Grafiken wie Tortendiagramme und Liniendiagramme sollten ein Kontrastverhältnis von 3 zu 1 haben.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.12': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Text Spacing',
      description:
        'Line height is at least 1.5 times the font size, and spacing between paragraphs is at least 2 times the font size.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Textabstand',
      description:
        'Die Zeilenhöhe beträgt mindestens 1,5-mal die Schriftgröße, und der Abstand zwischen Absätzen beträgt mindestens 2-mal die Schriftgröße.',
      principle: 'Wahrnehmbar',
    },
  },
  '1.4.13': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus',
    background: '#B60000',
    level: 'AA',
    en: {
      title: 'Content on Hover or Focus',
      description:
        'Content that appears on hover or focus is dismissible, hoverable, and persistent.',
      principle: 'Perceivable',
    },
    de: {
      title: 'Inhalt beim Hover oder Fokus',
      description:
        'Inhalte, die beim Hover oder Fokus erscheinen, sind abweisbar, hoverbar und persistent.',
      principle: 'Wahrnehmbar',
    },
  },
  '2.1.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Keyboard',
      description: 'Make all functionality available from a keyboard.',
      principle: 'Operable',
    },
    de: {
      title: 'Tastatur',
      description:
        'Alle Funktionen müssen von einer Tastatur aus verfügbar sein.',
      principle: 'Bedienbar',
    },
  },
  '2.1.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'No Keyboard Trap',
      description:
        'Keyboard focus is never locked or trapped at one particular part of the page.',
      principle: 'Operable',
    },
    de: {
      title: 'Keine Tastaturfalle',
      description:
        'Der Tastaturfokus wird nie an einem bestimmten Teil der Seite gesperrt oder eingefangen.',
      principle: 'Bedienbar',
    },
  },
  '2.1.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Keyboard (No Exception)',
      description:
        'Make all functionality available from a keyboard without exception.',
      principle: 'Operable',
    },
    de: {
      title: 'Tastatur (Keine Ausnahme)',
      description:
        'Alle Funktionen müssen von einer Tastatur aus ohne Ausnahme verfügbar sein.',
      principle: 'Bedienbar',
    },
  },
  '2.1.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Character Key Shortcuts',
      description:
        'If a keyboard shortcut is implemented in the content, then it can be turned off or remapped.',
      principle: 'Operable',
    },
    de: {
      title: 'Zeichen-Tastenkürzel',
      description:
        'Wenn eine Tastenkombination in den Inhalten implementiert ist, kann sie deaktiviert oder neu zugeordnet werden.',
      principle: 'Bedienbar',
    },
  },
  '2.2.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Timing Adjustable',
      description:
        'The user can control the timing of any time-based content, like a slideshow or a video. Anyways, time limits should be avoided unless they are able to be extended.',
      principle: 'Operable',
    },
    de: {
      title: 'Zeit einstellbar',
      description:
        'Der Benutzer kann die Zeitsteuerung von zeitbasierten Inhalten wie einer Diashow oder einem Video steuern. Zeitlimits sollten jedoch vermieden werden, es sei denn, sie können verlängert werden.',
      principle: 'Bedienbar',
    },
  },
  '2.2.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Pause, Stop, Hide',
      description:
        'Automatically moving/animating content that lasts more than 5 seconds should be able to be stopped or hidden.',
      principle: 'Operable',
    },
    de: {
      title: 'Pause, Stop, Verbergen',
      description:
        'Automatisch bewegende/animierte Inhalte, die länger als 5 Sekunden dauern, sollten angehalten oder ausgeblendet werden können.',
      principle: 'Bedienbar',
    },
  },
  '2.2.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/no-timing',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'No Timing',
      description:
        'Timing is not an essential part of the content, or can be turned off or extended. Unless it’s a live broadcast or something else that’s happening in real time, there are no time constraints placed on the user.',
      principle: 'Operable',
    },
    de: {
      title: 'Keine Zeit',
      description:
        'Zeit ist kein wesentlicher Bestandteil des Inhalts oder kann deaktiviert oder verlängert werden. Es sei denn, es handelt sich um eine Live-Übertragung oder etwas anderes, das in Echtzeit passiert, es gibt keine zeitlichen Einschränkungen für den Benutzer.',
      principle: 'Bedienbar',
    },
  },
  '2.2.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/interruptions',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Interruptions',
      description:
        'Interruptions can be postponed or suppressed by the user, except in emergencies.',
      principle: 'Operable',
    },
    de: {
      title: 'Unterbrechungen',
      description:
        'Unterbrechungen können vom Benutzer verschoben oder unterdrückt werden, außer in Notfällen.',
      principle: 'Bedienbar',
    },
  },
  '2.2.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Re-authenticating',
      description:
        'If a user session expires, the user can continue the activity without losing any data.',
      principle: 'Operable',
    },
    de: {
      title: 'Erneute Authentifizierung',
      description:
        'Wenn eine Benutzersitzung abläuft, kann der Benutzer die Aktivität fortsetzen, ohne Daten zu verlieren.',
      principle: 'Bedienbar',
    },
  },
  '2.2.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/timeouts',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Timeouts',
      description:
        'If a user session is about to expire, a warning is shown to the user.',
      principle: 'Operable',
    },
    de: {
      title: 'Zeitüberschreitungen',
      description:
        'Wenn eine Benutzersitzung kurz vor dem Ablauf steht, wird dem Benutzer eine Warnung angezeigt.',
      principle: 'Bedienbar',
    },
  },
  '2.3.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Three Flashes or Below Threshold',
      description:
        'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.',
      principle: 'Operable',
    },
    de: {
      title: 'Drei Blitze oder unterhalb des Schwellenwerts',
      description:
        'Webseiten enthalten nichts, das in einem Sekundenzeitraum mehr als drei Mal blinkt, oder der Blitz liegt unter den allgemeinen Blitz- und roten Blitzschwellenwerten.',
      principle: 'Bedienbar',
    },
  },
  '2.3.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Three Flashes',
      description:
        'Web pages do not contain anything that flashes more than three times in any one second period.',
      principle: 'Operable',
    },
    de: {
      title: 'Drei Blitze',
      description:
        'Webseiten enthalten nichts, das in einem Sekundenzeitraum mehr als drei Mal blinkt.',
      principle: 'Bedienbar',
    },
  },
  '2.3.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Animation from Interactions',
      description:
        'If an animation is triggered by interaction, the user can pause, stop, or hide it.',
      principle: 'Operable',
    },
    de: {
      title: 'Animation durch Interaktionen',
      description:
        'Wenn eine Animation durch eine Interaktion ausgelöst wird, kann der Benutzer sie anhalten, stoppen oder ausblenden.',
      principle: 'Bedienbar',
    },
  },
  '2.4.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Bypass Blocks',
      description:
        'A mechanism is available to bypass blocks of content that are repeated on multiple web pages.',
      principle: 'Operable',
    },
    de: {
      title: 'Umgehung von Blöcken',
      description:
        'Ein Mechanismus ist verfügbar, um Blöcke von Inhalten zu umgehen, die auf mehreren Webseiten wiederholt werden.',
      principle: 'Bedienbar',
    },
  },
  '2.4.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Page Titled',
      description:
        'Every web page has a title that describes its topic or purpose.',
      principle: 'Operable',
    },
    de: {
      title: 'Seitenüberschrift',
      description:
        'Jede Webseite hat eine Überschrift, die ihr Thema oder ihren Zweck beschreibt.',
      principle: 'Bedienbar',
    },
  },
  '2.4.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Focus Order',
      description:
        'The order in which elements receive focus is logical and intuitive.',
      principle: 'Operable',
    },
    de: {
      title: 'Fokusreihenfolge',
      description:
        'Die Reihenfolge, in der Elemente den Fokus erhalten, ist logisch und intuitiv.',
      principle: 'Bedienbar',
    },
  },
  '2.4.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Link Purpose (In Context)',
      description:
        'The purpose of each link can be determined from the link text alone, or from the link text and its context.',
      principle: 'Operable',
    },
    de: {
      title: 'Link-Zweck (Im Kontext)',
      description:
        'Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext und seinem Kontext bestimmt werden.',
      principle: 'Bedienbar',
    },
  },
  '2.4.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Multiple Ways',
      description:
        'More than one way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process. Header navigation is not the only way to get around a website; there’s another way, such as on-page links, a sitemap, or a site-wide search.',
      principle: 'Operable',
    },
    de: {
      title: 'Mehrere Wege',
      description:
        'Es stehen mehrere Möglichkeiten zur Verfügung, um eine Webseite innerhalb einer Reihe von Webseiten zu finden, außer wenn die Webseite das Ergebnis eines Prozesses ist oder ein Schritt in einem Prozess ist. Die Kopfnavigation ist nicht der einzige Weg, um sich auf einer Website zu bewegen; es gibt einen anderen Weg, wie z. B. On-Page-Links, eine Sitemap oder eine websiteübergreifende Suche.',
      principle: 'Bedienbar',
    },
  },
  '2.4.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Headings and Labels',
      description:
        'Headings and labels describe topic or purpose. Headings are used to structure content, and labels are used to identify form controls.',
      principle: 'Operable',
    },
    de: {
      title: 'Überschriften und Beschriftungen',
      description:
        'Überschriften und Beschriftungen beschreiben Thema oder Zweck. Überschriften werden verwendet, um Inhalte zu strukturieren, und Beschriftungen werden verwendet, um Formularsteuerelemente zu identifizieren.',
      principle: 'Bedienbar',
    },
  },
  '2.4.7': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Focus Visible',
      description:
        'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
      principle: 'Operable',
    },
    de: {
      title: 'Fokus sichtbar',
      description:
        'Jede tastaturbedienbare Benutzeroberfläche verfügt über einen Betriebsmodus, bei dem der Tastaturfokusindikator sichtbar ist.',
      principle: 'Bedienbar',
    },
  },
  '2.4.8': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/location',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Location',
      description:
        'The user is informed of their location within a set of web pages.',
      principle: 'Operable',
    },
    de: {
      title: 'Ort',
      description:
        'Der Benutzer wird über seinen Standort innerhalb einer Reihe von Webseiten informiert.',
      principle: 'Bedienbar',
    },
  },
  '2.4.9': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Link Purpose (Link Only)',
      description:
        'The purpose of each link can be determined from the link text alone.',
      principle: 'Operable',
    },
    de: {
      title: 'Link-Zweck (Nur Link)',
      description:
        'Der Zweck jedes Links kann allein aus dem Linktext bestimmt werden.',
      principle: 'Bedienbar',
    },
  },
  '2.4.10': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/section-headings',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Section Headings',
      description:
        'Headings are used to structure content. They are not used just for visual presentation.',
      principle: 'Operable',
    },
    de: {
      title: 'Abschnittsüberschriften',
      description:
        'Überschriften werden verwendet, um Inhalte zu strukturieren. Sie werden nicht nur für die visuelle Präsentation verwendet.',
      principle: 'Bedienbar',
    },
  },
  '2.4.11': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Focus Not Obscured (Minimum)',
      description:
        'The item receiving keyboard focus is always partially visible in the viewport of the user.',
      principle: 'Operable',
    },
    de: {
      title: 'Fokus nicht verdeckt (Minimum)',
      description:
        'Das Element, das den Tastaturfokus erhält, ist immer teilweise im Viewport des Benutzers sichtbar.',
      principle: 'Bedienbar',
    },
  },
  '2.4.12': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Focus Not Obscured (Enhanced)',
      description:
        'Almost the same as 2.4.12 Focus Not Obscured (Minimum), but the focusable item should be fully visible when it’s tabbed to, so that no scrolling is necessary to bring it into view.',
      principle: 'Operable',
    },
    de: {
      title: 'Fokus nicht verdeckt (Erweitert)',
      description:
        'Fast das gleiche wie 2.4.12 Fokus nicht verdeckt (Minimum), aber das fokussierbare Element sollte vollständig sichtbar sein, wenn es angewählt wird, sodass kein Scroll erforderlich ist, um es in den Blick zu bringen.',
      principle: 'Bedienbar',
    },
  },
  '2.4.13': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Focus Appearance',
      description:
        'The visual focus indicator is visible and clear, and it doesn nott rely on color alone. The focus indicators for keyboard users are easy to spot: they are at least 2px thick and have a contrast ratio of 3 to 1 (or higher) against their unfocused state.',
      principle: 'Operable',
    },
    de: {
      title: 'Fokus-Erscheinungsbild',
      description:
        'Der visuelle Fokusindikator ist sichtbar und klar und verlässt sich nicht nur auf Farbe. Die Fokusindikatoren für Tastaturnutzer sind leicht zu erkennen: Sie sind min 2px dick und haben ein Kontrastverhältnis von 3 zu 1 (oder höher) gegenüber ihrem nicht fokussierten Zustand.',
      principle: 'Bedienbar',
    },
  },
  '2.5.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Pointer Gestures',
      description:
        'Any functionality that can be operated by a mouse or trackpad (swiping, pinching, drawing, and so on) can also be operated by a single pointer without a path.',
      principle: 'Operable',
    },
    de: {
      title: 'Zeigergesten',
      description:
        'Alle Funktionen, die mit einer Maus oder einem Trackpad bedient werden können (Wischen, Zoomen, Zeichnen usw.), können auch von einem einzelnen Zeiger ohne Pfad bedient werden.',
      principle: 'Bedienbar',
    },
  },
  '2.5.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Pointer Cancellation',
      description:
        'If an action is triggered by a pointer, then the action can be cancelled without moving the pointer. Actions (like pressing a button) aren’t triggered on mouse-down; rather on mouse-up.',
      principle: 'Operable',
    },
    de: {
      title: 'Zeigerstornierung',
      description:
        'Wenn eine Aktion durch einen Zeiger ausgelöst wird, kann die Aktion ohne Bewegung des Zeigers abgebrochen werden. Aktionen (wie das Drücken einer Schaltfläche) werden nicht bei Mausklick ausgelöst, sondern bei Maustaste loslassen.',
      principle: 'Bedienbar',
    },
  },
  '2.5.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Label in Name',
      description:
        'The accessible name of a user interface component includes any visible label.',
      principle: 'Operable',
    },
    de: {
      title: 'Beschriftung im Namen',
      description:
        'Der zugängliche Name eines Benutzeroberflächenelements enthält jede sichtbare Beschriftung.',
      principle: 'Bedienbar',
    },
  },
  '2.5.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation',
    background: '#1651A9',
    level: 'A',
    en: {
      title: 'Motion Actuation',
      description:
        'Functionality that can be operated by device motion or user motion can also be operated by a single pointer without a path. There is no reliance on device motion, like shaking or tilting, to carry out an action.',
      principle: 'Operable',
    },
    de: {
      title: 'Bewegungssteuerung',
      description:
        'Funktionen, die durch Gerätebewegung oder Benutzerbewegung bedient werden können, können auch von einem einzelnen Zeiger ohne Pfad bedient werden. Es wird keine Abhängigkeit von Gerätebewegung, wie Schütteln oder Neigen, um eine Aktion auszuführen.',
      principle: 'Bedienbar',
    },
  },
  '2.5.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Target Size (Enhanced)',
      description:
        'The target size for pointer inputs is at least 44 by 44 CSS pixels. This is the minimum size for buttons and other interactive elements.',
      principle: 'Operable',
    },
    de: {
      title: 'Zielgröße (Erweitert)',
      description:
        'Die Zielgröße für Zeigereingaben beträgt mindestens 44 mal 44 CSS-Pixel. Dies ist die Mindestgröße für Schaltflächen und andere interaktive Elemente.',
      principle: 'Bedienbar',
    },
  },
  '2.5.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms',
    background: '#1651A9',
    level: 'AAA',
    en: {
      title: 'Concurrent Input Mechanisms',
      description:
        'If a user interface can be operated by multiple input methods, then the user can switch between them.',
      principle: 'Operable',
    },
    de: {
      title: 'Gleichzeitige Eingabemechanismen',
      description:
        'Wenn eine Benutzeroberfläche von mehreren Eingabemethoden bedient werden kann, kann der Benutzer zwischen ihnen wechseln.',
      principle: 'Bedienbar',
    },
  },
  '2.5.7': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/drag-and-drop',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Dragging Movements',
      description:
        'An action that is achieved by dragging from one point to another, for example drag-and-drop for reordering, can also be carried out by pressing buttons (‘Move item up’, ‘Move item down’, etc.). This is related to 2.1.1 Keyboard and 2.5.1 Pointer Gestures. ',
      principle: 'Operable',
    },
    de: {
      title: 'Ziehbewegungen',
      description:
        'Eine Aktion, die durch Ziehen von einem Punkt zum anderen erreicht wird, z. B. Drag-and-Drop zum Neuanordnen, kann auch durch Drücken von Schaltflächen („Element nach oben verschieben“, „Element nach unten verschieben“, usw.) ausgeführt werden. Dies steht im Zusammenhang mit 2.1.1 Tastatur und 2.5.1 Zeigergesten. ',
      principle: 'Bedienbar',
    },
  },
  '2.5.8': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum',
    background: '#1651A9',
    level: 'AA',
    en: {
      title: 'Target Size (Minimum)',
      description:
        'Anything clickable should be at least 24 by 24 pixels, except links within a sentence which will just be the size of the text.',
      principle: 'Operable',
    },
    de: {
      title: 'Zielgröße (Minimum)',
      description:
        'Alles Klickbare sollte mindestens 24 mal 24 Pixel groß sein, außer Links innerhalb eines Satzes, die nur die Größe des Textes haben.',
      principle: 'Bedienbar',
    },
  },
  '3.1.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page',
    background: '#186312',
    level: 'A',
    en: {
      title: 'Language of Page',
      description:
        'The default human language of each web page can be programmatically determined. There is a lang attribute on the <html> element that matches the language of the page',
      principle: 'Understandable',
    },
    de: {
      title: 'Sprache der Seite',
      description:
        'Die Standardsprache jeder Webseite kann programmatisch bestimmt werden. Es gibt ein lang-Attribut auf dem <html>-Element, das die Sprache der Seite angibt.',
      principle: 'Verständlich',
    },
  },
  '3.1.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Language of Parts',
      description:
        'The human language of each passage or phrase in the content can be programmatically determined. There is a lang attribute on the element that matches the language of the content.',
      principle: 'Understandable',
    },
    de: {
      title: 'Sprache von Teilen',
      description:
        'Die menschliche Sprache jedes Abschnitts oder Satzes im Inhalt kann programmatisch bestimmt werden. Es gibt ein lang-Attribut auf dem Element, das die Sprache des Inhalts angibt.',
      principle: 'Verständlich',
    },
  },
  '3.1.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/unusual-words',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Unusual Words',
      description:
        'Jargon and figurative language is avoided, or, where not it’s possible, the words are defined or clarified the first time they’re used on a page.',
      principle: 'Understandable',
    },
    de: {
      title: 'Ungewöhnliche Wörter',
      description:
        'Fachsprache und bildhafte Sprache werden vermieden, oder, wenn dies nicht möglich ist, werden die Wörter definiert oder beim ersten Gebrauch auf einer Seite geklärt.',
      principle: 'Verständlich',
    },
  },
  '3.1.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/abbreviations',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Abbreviations',
      description:
        'Abbreviations are marked up with the <abbr> element, or expanded on the first use.',
      principle: 'Understandable',
    },
    de: {
      title: 'Abkürzungen',
      description:
        'Abkürzungen werden mit dem <abbr>-Element markiert oder beim ersten Gebrauch erweitert.',
      principle: 'Verständlich',
    },
  },
  '3.1.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/reading-level',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Reading Level',
      description:
        'The reading level of the text is at the lower secondary education level or lower.',
      principle: 'Understandable',
    },
    de: {
      title: 'Leseniveau',
      description:
        'Das Leseniveau des Textes liegt auf der unteren Sekundarstufe oder darunter.',
      principle: 'Verständlich',
    },
  },
  '3.1.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/pronunciation',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Pronunciation',
      description:
        'Any unusual words, phrases, or abbreviations have a pronunciation guide.',
      principle: 'Understandable',
    },
    de: {
      title: 'Aussprache',
      description:
        'Alle ungewöhnlichen Wörter, Phrasen oder Abkürzungen haben eine Aussprachehilfe.',
      principle: 'Verständlich',
    },
  },
  '3.2.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus',
    background: '#186312',
    level: 'A',
    en: {
      title: 'On Focus',
      description:
        'When a user interface component receives focus, it does not initiate a change of context. So basically nothing unexpected changes when something on the page receives keyboard focus, like a <button>',
      principle: 'Understandable',
    },
    de: {
      title: 'Bei Fokus',
      description:
        'Wenn ein Benutzeroberflächenelement den Fokus erhält, wird kein Kontextwechsel initiiert. Im Grunde ändert sich nichts Unerwartetes, wenn etwas auf der Seite den Tastaturfokus erhält, wie ein <button>',
      principle: 'Verständlich',
    },
  },
  '3.2.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input',
    background: '#186312',
    level: 'A',
    en: {
      title: 'On Input',
      description:
        'When a user inputs information, it does not initiate a change of context. So basically nothing unexpected changes when a user inputs information, like text into a form field.',
      principle: 'Understandable',
    },
    de: {
      title: 'Bei Eingabe',
      description:
        'Wenn ein Benutzer Informationen eingibt, wird kein Kontextwechsel initiiert. Im Grunde ändert sich nichts Unerwartetes, wenn ein Benutzer Informationen eingibt, wie Text in ein Formularfeld.',
      principle: 'Verständlich',
    },
  },
  '3.2.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Consistent Navigation',
      description:
        'Navigation mechanisms that are repeated on multiple web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
      principle: 'Understandable',
    },
    de: {
      title: 'Konsistente Navigation',
      description:
        'Navigationsmechanismen, die auf mehreren Webseiten wiederholt werden, treten jedes Mal in derselben relativen Reihenfolge auf, es sei denn, eine Änderung wird vom Benutzer initiiert.',
      principle: 'Verständlich',
    },
  },
  '3.2.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Consistent Identification',
      description:
        'Components that have the same functionality are identified consistently.',
      principle: 'Understandable',
    },
    de: {
      title: 'Konsistente Identifikation',
      description:
        'Komponenten mit derselben Funktionalität werden konsistent identifiziert.',
      principle: 'Verständlich',
    },
  },
  '3.2.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/change-on-request',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Change on Request',
      description: 'Changes of context are initiated only by user request.',
      principle: 'Understandable',
    },
    de: {
      title: 'Änderung auf Anfrage',
      description:
        'Änderungen des Kontexts werden nur auf Benutzeranforderung hin initiiert.',
      principle: 'Verständlich',
    },
  },
  '3.2.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help',
    background: '#186312',
    level: 'A',
    en: {
      title: 'Consistent Help',
      description: 'Help is available in the same location on every web page.',
      principle: 'Understandable',
    },
    de: {
      title: 'Konsistente Hilfe',
      description: 'Hilfe ist an jedem Ort auf jeder Webseite verfügbar.',
      principle: 'Verständlich',
    },
  },
  '3.3.1': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification',
    background: '#186312',
    level: 'A',
    en: {
      title: 'Error Identification',
      description:
        'If an input error is detected, the error is identified and described to the user in text. Also, we should provide suggestions to help the user successfully proceed.',
      principle: 'Understandable',
    },
    de: {
      title: 'Fehleridentifikation',
      description:
        'Wenn ein Eingabefehler erkannt wird, wird der Fehler dem Benutzer in Textform identifiziert und beschrieben. Außerdem sollten wir Vorschläge machen, um dem Benutzer zu helfen, erfolgreich fortzufahren.',
      principle: 'Verständlich',
    },
  },
  '3.3.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions',
    background: '#186312',
    level: 'A',
    en: {
      title: 'Labels or Instructions',
      description:
        'As much help as is needed is offered to prevent triggering a form error; the form label may be enough, but hint text may also be required.',
      principle: 'Understandable',
    },
    de: {
      title: 'Beschriftungen oder Anweisungen',
      description:
        'Es wird so viel Hilfe angeboten, wie nötig ist, um das Auslösen eines Formularfehlers zu verhindern; die Formularbeschriftung kann ausreichen, aber auch Hilfetext kann erforderlich sein.',
      principle: 'Verständlich',
    },
  },
  '3.3.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Error Suggestion',
      description:
        'If an input error is detected and suggestions for correction are known, then the suggestions are provided to the user.',
      principle: 'Understandable',
    },
    de: {
      title: 'Fehlerhinweis',
      description:
        'Wenn ein Eingabefehler erkannt wird und Korrekturvorschläge bekannt sind, werden die Vorschläge dem Benutzer zur Verfügung gestellt.',
      principle: 'Verständlich',
    },
  },
  '3.3.4': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Error Prevention (Legal, Financial, Data)',
      description:
        'For web pages that require user input, submissions are reversible, checked for errors, and confirmed by the user.',
      principle: 'Understandable',
    },
    de: {
      title: 'Fehlervermeidung (Rechtliches, Finanzielles, Daten)',
      description:
        'Für Webseiten, die eine Benutzereingabe erfordern, sind die Eingaben umkehrbar, werden auf Fehler überprüft und vom Benutzer bestätigt.',
      principle: 'Verständlich',
    },
  },
  '3.3.5': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/help',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Help',
      description: 'Context-sensitive help is available.',
      principle: 'Understandable',
    },
    de: {
      title: 'Hilfe',
      description: 'Kontextsensitive Hilfe ist verfügbar.',
      principle: 'Verständlich',
    },
  },
  '3.3.6': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Error Prevention (All)',
      description:
        'After entering any information, the user is offered the opportunity to check it before sending.',
      principle: 'Understandable',
    },
    de: {
      title: 'Fehlervermeidung (Alle)',
      description:
        'Nach Eingabe von Informationen wird dem Benutzer die Möglichkeit geboten, sie vor dem Senden zu überprüfen.',
      principle: 'Verständlich',
    },
  },
  '3.3.7': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry',
    background: '#186312',
    level: 'A',
    en: {
      title: 'Redundant Entry',
      description:
        'If the user as already given some information, it’s either: not asked for again, pre-populated, or can be selected from a dropdown.',
      principle: 'Understandable',
    },
    de: {
      title: 'Redundante Eingabe',
      description:
        'Wenn der Benutzer bereits einige Informationen angegeben hat, wird entweder nicht erneut danach gefragt, vorausgefüllt oder kann aus einem Dropdown-Menü ausgewählt werden.',
      principle: 'Verständlich',
    },
  },
  '3.3.8': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum',
    background: '#186312',
    level: 'AA',
    en: {
      title: 'Accessible Authentication (Minimum)',
      description:
        'If the user is required to log in, they don’t have to remember a password, for example they can: copy and paste a password into the right form field, use password manager softwares, have a verficiation link setn to their email. It also allows photo recognition, like CAPTCHAs and user-uploaded picture recognition.',
      principle: 'Understandable',
    },
    de: {
      title: 'Zugängliche Authentifizierung (Minimum)',
      description:
        'Wenn der Benutzer sich anmelden muss, muss er sich nicht an ein Passwort erinnern, sondern kann beispielsweise ein Passwort in das richtige Formularfeld kopieren und einfügen, Passwort-Manager-Software verwenden oder einen Bestätigungslink an seine E-Mail-Adresse senden lassen. Es ermöglicht auch die Fotoerkennung, wie CAPTCHAs und die Erkennung von vom Benutzer hochgeladenen Bildern.',
      principle: 'Verständlich',
    },
  },
  '3.3.9': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced',
    background: '#186312',
    level: 'AAA',
    en: {
      title: 'Accessible Authentication (Enhanced)',
      description:
        'Almost the same as 3.3.8 Accessible Authentication (Minimum), but CAPTCHAs and user-uploaded pictures can’t be included in the log-in process.',
      principle: 'Understandable',
    },
    de: {
      title: 'Zugängliche Authentifizierung (Erweitert)',
      description:
        'Fast das gleiche wie 3.3.8 Zugängliche Authentifizierung (Minimum), aber CAPTCHAs und vom Benutzer hochgeladene Bilder können nicht im Anmeldevorgang enthalten sein.',
      principle: 'Verständlich',
    },
  },
  '4.1.2': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value',
    background: '#535035',
    level: 'A',
    en: {
      title: 'Name, Role, Value',
      description:
        'The semantic meaning of every interactive element (form controls, links, headings, landmarks, tables, and so on) is correct, and each has an accessible name.',
      principle: 'Robust',
    },
    de: {
      title: 'Name, Rolle, Wert',
      description:
        'Die semantische Bedeutung jedes interaktiven Elements (Formularelemente, Links, Überschriften, Landmarken, Tabellen usw.) ist korrekt, und jedes hat einen zugänglichen Namen.',
      principle: 'Robust',
    },
  },
  '4.1.3': {
    link: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages',
    background: '#535035',
    level: 'AA',
    en: {
      title: 'Status Messages',
      description:
        'Messages like form errors and success pop-ups are communicated to assistive technology like screen readers.',
      principle: 'Robust',
    },
    de: {
      title: 'Statusmeldungen',
      description:
        'Meldungen wie Formularfehler und Erfolgsmeldungen werden an unterstützende Technologien wie Bildschirmlesegeräte weitergegeben.',
      principle: 'Robust',
    },
  },
};
