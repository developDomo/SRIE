import React from 'react';
import {
  GraficoCompuestoComponent,
  GraficoBarrasComponent,
} from '../components/layout/Grafico';

export default {
  title: 'Grafico',
  component: GraficoBarrasComponent,
};
export const GraficoCompuesto = () => <GraficoCompuestoComponent />;
export const GraficoBarras = () => <GraficoBarrasComponent />;
