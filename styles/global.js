import css from 'styled-jsx/css';
import theme from './theme';

export default css.global`
  body {
    margin: 0;
    color: ${theme.colors.font};
    font-family: 'Roboto', sans-serif;    
  }
  img{
    max-width: 100%;
  }
  .home{
    background: rgba(0, 113, 188, .7);
  }
  .info-slider > .row {
    height: 435px;
  }
  .carousel-indicators {
    bottom: -15px;
  }
  .carousel-item .row{
      /*height:345px;*/
      height:21em;
    }
  @media (max-width: 576px) { 
    .country-selector{
      
      background-color: #044A95;
    }
    .country-selector a{
      font-size: 0.7em;
      
    }
    .home .row,.row.slider-box{
    margin 0;
    }
  }
  @media (min-width: 576px) { 
    
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
      .home{
        background: transparent;
        background-image: url(/img/home/bck.jpg);
        background-repeat: no-repeat;
      }
      .carousel-indicators {
        bottom: 30px;
      }
  }
  /* fin768 */

  @media (min-width: 992px) {
    
    
  }
  /* fin992 */

  
  @media (min-width: 1200px) {

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
