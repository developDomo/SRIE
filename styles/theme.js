import get from 'lodash/get';

const theme = {
  fontFamily: {
    sansSerif: 'Roboto, sans-serif',
    mono: 'Menlo, Monaco, monospace',
  },
  colors: {
    primary: '#cccccc',
    background: '#dddddd',
    font: '#333',
  },

  navbar: {
    primaryFontColor: 'white',
    secondaryFontColor: '#1D2D49',
    dropdownMenuColor: '#1D2D49',
    underlineMenuColor: '#FBB03B',
    menuHoverColor: '#0071BC',
    home: {
      color: 'white',
      body: {
        'background-image': 'url(/img/home/bck.jpg)',
      },
    },
    otherPages: {
      color: '#1D2D49 !important',
      body: {
        'background-image': 'none',
      },
    },
  },
};

const getThemeProperty = (path) => get(theme, path);

export { theme, getThemeProperty };
