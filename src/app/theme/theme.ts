export interface Theme {
  name: string;
  properties: any;
}

export const white: Theme = {
    name: "white",
    properties: {
      '--darkest': '#464646',
      '--darker': '#a3a3a3',
      '--medium': '#e3e3e3',
      '--light': '#f7f7f7',
      '--lightest': ' linear-gradient(#ffffff, #fcfcfc)',
      '--red': '#e05d5d',
      '--white': '#F4F4F4',
      '---black': '#000000',


      '--progress-background': 'var(--light)',
      '--progress-level': 'var(--red)',

      '--thanks-background': 'url("/../../../assets/images/thank_background_white.png")',
      '--cv-background': 'url("/../../../assets/images/White_background.png")',
      '--welcome-background': 'url("/../../../assets/images/welcome_background_white.png")',

      '--welcome-text': 'var(--black)',
      '--welcome-text-button': 'var(--light)',

      '--nav': 'var(--darker)',

      '--step-button': 'var(--medium)',
      '--step-button-text': 'var(--black)',
      '--step-card-top': 'var(--lightest)',
      '--step-card-text': 'var(--black)',
      '--step-card-title': 'var(--black)',
      '--step-card-description': 'var(--black)',
      '--full-step-title': 'var(--black)',
      '--card': 'var(--lightest)',
      '--card-border': 'var(--medium)',
      '--step-input-text': 'var(--black)',
      '--step-input': 'var(--darker)',

    }
  }
;

export const black: Theme = {
    name: "black",
    properties: {
      '--darkest': '#2b2b2b',
      '--darker': 'linear-gradient(90deg, #363535, #3e3e3e)',
      '--medium': '#404040',
      '--light': '#8c8c8c',
      '--lightest': '#c0c0c0',
      '--red': '#e05d5d',
      '--white': '#F4F4F4',
      '---black': '#000000',


      '--progress-background': '#000000',
      '--progress-level': 'var(--red)',

      '--thanks-background': 'url("/../../../assets/images/thank_background.png")',
      '--cv-background': 'url("/../../../assets/images/Black_background.png")',
      '--welcome-background': 'url("/../../../assets/images/welcome_background.png")',

      '--welcome-text': 'var(--white)',
      '--welcome-text-button': 'var(--lightest)',

      '--nav': 'var(--lightest)',

      '--step-button': 'var(--medium)',
      '--step-button-text': 'var(--lightest)',
      '--step-card-top': 'var(--darker)',
      '--step-card-text': 'var(--lightest)',
      '--step-card-title': 'var(--white)',
      '--step-card-description': 'var(--light)',
      '--full-step-title': 'var(--white)',
      '--card': 'var(--darker)',
      '--card-border': 'var(--medium)',

      '--step-input-text': 'var(--light)',
      '--step-input': 'var(--light)',
    }
  }
;
