import get from 'lodash/get';

const theme = {
  fontFamily: {
    sansSerif: 'Roboto, sans-serif',
    RobotoSlab: 'Roboto Slab, sans-serif',
    mono: 'Menlo, Monaco, monospace',
    Raleway: 'Raleway, sans-serif',
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
    langColorBtn: '#0865BA',
    langColorBtnActive: '#E59E2C',
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
