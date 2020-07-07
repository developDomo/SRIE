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
  <ButtonNav yellow onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
);
export const Nav2 = () => (
  <ButtonNav blue onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
);
export const Nav3 = () => (
  <ButtonNav green onClick={action('clicked')}>
    Hello Button
  </ButtonNav>
);

export const NavIndicadores = () => (
  <ButtonNavIndicadores blue onClick={action('clicked')}>
    Ver los indicadores
  </ButtonNavIndicadores>
);
export const ButtonWithIconNav = () => (
  <ButtonWithIcon
    color="light_blue"
    onClick={action('clicked')}
    icon={ParticipacionIcon}
  >
    participacion
  </ButtonWithIcon>
);
export const ButtonWithIconNav2 = () => (
  <ButtonWithIcon color="brown" onClick={action('clicked')} icon={OfertaIcon}>
    oferta
  </ButtonWithIcon>
);
export const ButtonWithIconNav3 = () => (
  <ButtonWithIcon
    color="blue"
    onClick={action('clicked')}
    icon={AprendizajeIcon}
  >
    Aprendizaje y competencias
  </ButtonWithIcon>
);
export const ButtonWithIconNav4 = () => (
  <ButtonWithIcon
    color="orange"
    onClick={action('clicked')}
    icon={ConclusionIcon}
  >
    Conclusión
  </ButtonWithIcon>
);
export const ButtonWithIconNav5 = () => (
  <ButtonWithIcon color="pink" onClick={action('clicked')} icon={EntornoIcon}>
    Entorno educativo
  </ButtonWithIcon>
);
export const ButtonWithIconNav6 = () => (
  <ButtonWithIcon color="yellow" onClick={action('clicked')} icon={MetasIcon}>
    Metas transversales
  </ButtonWithIcon>
);
