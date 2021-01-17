import React from 'react';
import { withTranslation } from '../../i18n';

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    const { name, children } = this.props;
    const classDropdownMenu = `dropdown-menu${isToggleOn ? ' show' : ''}`;
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={(e) => {
            this.showDropdown(e);
          }}
        >
          {name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {children}
        </div>
      </li>
    );
  }
}

const Navigation = ({ t }) => (
  <nav className="navbar navbar-expand-lg">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <NavDropdown name="Sobre el SRIE">
          <a className="dropdown-item" href="/">
            {t('navigation.pages.whatIsTheSRIE')}
          </a>
          <a className="dropdown-item" href="/">
            {t('navigation.pages.implementingPartners')}
          </a>
          <a className="dropdown-item" href="/">
            {t('navigation.pages.howToUseTheSystem')}
          </a>
          <a className="dropdown-item" href="/">
            {t('navigation.pages.glossary')}
          </a>
          <a className="dropdown-item" href="/">
            {t('navigation.pages.frequentQuestions')}
          </a>
          <a className="dropdown-item" href="/">
            {t('navigation.pages.responsibleTeam')}
          </a>
        </NavDropdown>
        <NavDropdown name="Indicadores educativos">
          <a className="dropdown-item" href="/">
            {t('navigation.level')}
          </a>

        </NavDropdown>
      </ul>
    </div>
  </nav>
);

export default withTranslation('navigation')(Navigation);
