import React from 'react';
import {
  Box,
  BoxIndicador,
  BoxPreescolar,
  BoxPrimaria,
  BoxSecundaria,
} from '../components/layout/Box';
import { LineTime } from '../components/layout/TimeLineEducation';
import EducacionIcon from '../public/img/home/icon_datos_educ.svg';
import AlfabetizacionIcon from '../public/img/home/icon_datos_alfabetizacion.svg';
import CentroseducIcon from '../public/img/home/icon_datos_centroseduc.svg';
import DatoNinoIcon from '../public/img/home/icono_datos_niños.svg';
import IndEducativo from '../components/layout/IndEducativo';

export default {
  title: 'Box',
  component: Box,
};

export const IndicadorEducativo = () => (
  <IndEducativo />
);
// export const Nav1 = () => (
//   <ButtonNav amarillo onClick={action('clicked')}>
//     Hello Button
//   </ButtonNav>
// );
// export const Nav2 = () => (
//   <ButtonNav azul onClick={action('clicked')}>
//     Hello Button
//   </ButtonNav>
// );
export const Box1 = () => (
  <Box
    iconImg={EducacionIcon}
    title="Educación gratuita y obligatoria"
    subtitle="Número de años: 12"
    color="azul"
  />
);

export const Box2 = () => (
  <Box
    iconImg={AlfabetizacionIcon}
    title="Tasa de alfabetización"
    subtitle="88%"
    color="verde"
  />
);

export const Box3 = () => (
  <Box
    iconImg={CentroseducIcon}
    title="Cantidad de centros educativos"
    subtitle="10.000"
    color="naranja"
  />
);

export const Box4 = () => (
  <Box
    iconImg={DatoNinoIcon}
    title="Niñas, niños y adolescentes fuera
    de la escuela"
    subtitle="10,00%"
    color="celeste"
  />
);
export const Box5 = () => (
  <BoxIndicador
    title="Tasas de matrícula, por nivel"
    prescolar="50,09%"
    primaria="40,60%"
    secundaria="50,00%"
  />
);
export const Box6 = () => (
  <BoxIndicador
    title="Niñas, niños y adolescentes fuera"
    prescolar="50,09%"
    primaria="36,00%"
    secundaria="50,00%"
  />
);
export const Box7 = () => <BoxPreescolar title="PREESCOLAR" />;
export const Box8 = () => <BoxPrimaria title="PRIMARIA" />;
export const Box9 = () => <BoxSecundaria title="SECUNDARIA" />;
export const Line = () => <LineTime />;
