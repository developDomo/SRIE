import css from 'styled-jsx/css';
import { theme } from './theme';
import { blue2 } from './colors';

export default css.global`
  body {
    margin: 0;
    color: ${theme.colors.font};
    font-family: 'Roboto', sans-serif;    
  }
  
  img{
    max-width: 100%;
  }

  button:focus {
    outline: none;
  }
  
  .indicatorChartTabs {
    background-color: #3784c4;
  }
  .indicatorChartTabs > nav > a {
    color: white;
  }

  .indicatorChartTabs .navbar-default .navbar-nav > .active > a:focus {
    color: #000;
    background: green;
  }

  .info-slider > .row {
    height: 435px;
  }
  .carousel-indicators {
    bottom: -15px;
  }
  .carousel-item .row{
      /*height:345px;*/
      height:18em;
    }
  .breadcrum-item{
    font-family: 'Roboto', sans-serif; 
    font-size: 14px;
  }
  .breadcrum-item a{
    color: ${blue2}!important;
  }

  .indicator-indexes-dropdown {
    background-color: #00558D !important;
  }

  .indicator-dropdown-menu {
    background-color: white !important;
  }

  .indicator-dropdown-menu > a {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #16181B;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  @media (max-width: 576px) { 
    .country-selector{
      
      background-color: #044A95;
    }
    .country-selector a{
      font-size: 0.7em;
      
    }
    .home .row,.row.slider-box{
      margin: 0;
    }
  }
  @media (min-width: 576px) { 
    body {
      background-size: 100% 64%;
      background-repeat: no-repeat;
      background: transparent;
      background-image: url(/img/home/bck.jpg);
      margin: 0;
      color: ${theme.colors.font};
      font-family: 'Roboto', sans-serif; 
    }
  }
  /* fin576 */

  @media (min-width: 768px) {
    .imgfooter a {
      margin-right: 3em;
    }
    .carousel-control-prev {
        left: -25%;
      }
      .carousel-control-next {
        right: -25%;
      }
      .BannerOds > .row {
        min-height: 150px;
        padding: 0 25px;
      }
      body{
        background: transparent;
        background-image: url(/img/home/bck.jpg);
        background-repeat: no-repeat;
        background-size: 100% 60%;
        margin: 0;
        color: ${theme.colors.font};
        font-family: 'Roboto', sans-serif; 
      }
      .carousel-indicators {
        bottom: 30px;
      }
  }
  /* fin768 */

  @media (min-width: 992px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1300px;
    }
  }
  /* fin992 */

  
  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1300px;
    }
  }
  /* fin1200 */
  @media (min-width: 1600px){
    .carousel-item .row{
      /*height:345px;*/
      height:23em;
    }
    .home {    
    background-size: 100%;
}
  }
`;
