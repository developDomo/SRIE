import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  ButtonNav,
  ButtonNavIndicadores,
} from '../components/layout/Button';
import ButtonWithIcon from '../components/layout/ButtonWithIcon';

import ParticipacionIcon from '../public/img/home/icon_participacion_indicador.svg';
import OfertaIcon from '../public/img/home/icon_oferta_indicador.svg';
import AprendizajeIcon from '../public/img/home/icon_aprendizaje_indicador.svg';
import ConclusionIcon from '../public/img/home/icon_conclusion_indicador.svg';
import EntornoIcon from '../public/img/home/icon_entorno_indicador.svg';
import MetasIcon from '../public/img/home/icon_metas_indicador.svg';

export default {
  title: 'Button',
  component: ButtonNav,
};

export const Nav1 = () => (
  <ButtonNav amarillo onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
);
export const Nav2 = () => (
  <ButtonNav azul onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
);
export const Nav3 = () => (
  <ButtonNav verde onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
);

export const NavIndicadores = () => (
  <ButtonNavIndicadores azul onClick={action('clicked')}>
    Ver los indicadores
  </ButtonNavIndicadores>
);
export const ButtonWithIconNav = () => (
  <ButtonWithIcon
    color="celeste"
    onClick={action('clicked')}
    icon={ParticipacionIcon}
  >
    participacion
  </ButtonWithIcon>
);
export const ButtonWithIconNav2 = () => (
  <ButtonWithIcon color="cafe" onClick={action('clicked')} icon={OfertaIcon}>
    oferta
  </ButtonWithIcon>
);
export const ButtonWithIconNav3 = () => (
  <ButtonWithIcon
    color="azul"
    onClick={action('clicked')}
    icon={AprendizajeIcon}
  >
    Aprendizaje y competencias
  </ButtonWithIcon>
);
export const ButtonWithIconNav4 = () => (
  <ButtonWithIcon
    color="naranja"
    onClick={action('clicked')}
    icon={ConclusionIcon}
  >
    Conclusión
  </ButtonWithIcon>
);
export const ButtonWithIconNav5 = () => (
  <ButtonWithIcon color="rosa" onClick={action('clicked')} icon={EntornoIcon}>
    Entorno educativo
  </ButtonWithIcon>
);
export const ButtonWithIconNav6 = () => (
  <ButtonWithIcon color="amarillo" onClick={action('clicked')} icon={MetasIcon}>
    Metas transversales
  </ButtonWithIcon>
);
