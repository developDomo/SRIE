import Link from 'next/link'
import { nav } from './../../pages/api/navbar'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LinkChild from '../layout/LinkChild'

export default class NavBar extends React.Component {
  constructor(props) {    
    super(props)
    this.state = {
      condition: false,
      iconActive: "fas fa-times",
      icon: "fas fa-bars"
    }
    
  }
  
  updateCount() {
    this.setState((prevState, props) => {
      return {  condition: !this.state.condition }
    });
  }

  render() {
    const { path } = this.props
    
    return (
      <>
        <Navbar expand='md'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className={ this.state.condition ? this.state.iconActive : this.state.icon  } onClick={() => this.updateCount()}/>
          
          <Navbar.Collapse
            id='basic-navbar-nav'
            className={path == '/' ? 'CName' : ''}
            
          >
            <Nav className='mr-auto'>
              {nav.map((item, indexDrop) => {
                return (
                  <NavDropdown
                    title={item.label}
                    id='basic-nav-dropdown'
                    key={`nav-drop-${indexDrop}`}
                    
                  >
                    {item.items.map((item2, index) => (
                      <LinkChild id={item2.id} href={item2.href} label={item2.label}/>
                    ))}
                  </NavDropdown>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <style type='text/css'>{`
            
            .nav-link{
                font-family: 'Raleway', sans-serif;
                text-transform: uppercase;
                font-weight: bold;
                color: #1D2D49 !important;
                
            }
            .CName .nav-link{
                color: white !important;
                
            }
            a.nav-item-drop {
              color: white !important;
              display: block;
              padding: 5px 10px;
              width: 210px;
            }
            .dropdown-menu{
                background-color: #1D2D49;
            }
            .dropdown-item{
                color: white;
            }
            .dropdown-item:focus, .dropdown-item:hover,a.nav-item-drop:hover {
                color: #16181b;
                text-decoration: none;
                background-color: #0071BC;
                color: white;
            }
            .nav-item > .nav-link {
                border-bottom: 2px solid transparent;
            }
            .show.dropdown.nav-item > a{
                border-bottom: 2px solid #FBB03B;
            }
            a.CName-ative.dropdown-item{
                text-decoration: underline #FBB03B;
            }
            .nav-collapse .open>.dropdown-menu{
              display:block;
               }
               span.navbar-toggler-icon {
              background-image: none;
                 width: 0;
            }
            .navbar-light .navbar-toggler {
                color: rgba(0,0,0,.5);
                border: none;
                margin: 9px auto 0 auto;
            }
            .fa-times:before,.fa-bars:before {
              /*color: white;*/
              font-size: 1.5em;
          }
          

        `}</style>
        
      </>
    )
  }
}