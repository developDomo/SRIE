import React from 'react'
import { action } from '@storybook/addon-actions'

import Banner from '../components/layout/Banner'
import {
  GraficoCompuestoComponent,
  GraficoBarrasComponent,
} from '../components/layout/Grafico'

export default {
  title: 'Grafico',
  component: GraficoBarrasComponent,
}
export const GraficoCompuesto = () => <GraficoCompuestoComponent />
export const GraficoBarras = () => <GraficoBarrasComponent />
