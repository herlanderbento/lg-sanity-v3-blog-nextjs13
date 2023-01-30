import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#ffffff',
  '--my-black': '#1a1a1a',
  '--herlander-brand': '#f7ab0a',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
};

export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#667',
  '--gray-base': '#667',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--herlander-brand'],

  //Default button
  '--default-button-color': '#667',
  '--default-button-primary-color': props['--herlander-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

   /* State */
   '--state-info-color': props['--herlander-brand'],
   '--state-success-color': props['--my-green'],
   '--state-warning-color': props['--my-yellow'],
   '--state-danger-color': props['--my-red'],

    /* Navbar */
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],
    
    '--focus-color': props['--herlander-brand'],

});
