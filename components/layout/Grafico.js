import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Cell,
} from 'recharts'
import {
  verde,
  azul3,
  txt,
  naranja,
  amarillo,
  bordes,
} from '../../theme/colors'

const data = [
  {
    name: '2015',
    uv: 20000,
  },
  {
    name: '2016',
    uv: 22500,
  },
  {
    name: '2017',
    uv: 22500,
  },
  {
    name: '2018',
    uv: 21000,
  },
  {
    name: '2019',
    uv: 25400,
  },
]

const dataBarras = [
  {
    name: 'Hombres',
    Mujeres: 4000,
    Hombres: 3000,
  },
]
export const GraficoBarrasComponent = ({ children, onClick, icon, color }) => (
  <BarChart width={500} height={300} data={dataBarras}>
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey='Hombres' fill={verde} minPointSize={10} />
    <Bar dataKey='Mujeres' fill={azul3} minPointSize={10} />
  </BarChart>
)
const dotStyle = { fill: amarillo, stroke: amarillo, r: 6 }
export const GraficoCompuestoComponent = ({
  children,
  onClick,
  icon,
  color,
}) => (
  <ComposedChart
    width={800}
    height={400}
    data={data}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <CartesianGrid stroke={txt} vertical={false} />
    <XAxis dataKey='name' />
    <YAxis />
    {/* <Tooltip /> */}

    <Bar dataKey='uv' barSize={100} fill={verde} />
    <Line
      type='linear'
      dataKey='uv'
      dot={dotStyle}
      activeDot={{ r: 8 }}
      stroke={bordes}
    />
  </ComposedChart>
)

export default GraficoBarrasComponent
