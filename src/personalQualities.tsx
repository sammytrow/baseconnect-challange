import React, { useState, PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,  ComposedChart,
    Bar,
    XAxis,
    YAxis, } from 'recharts';
    
import {personalInformation} from './static-data';

let totalPercentage:number = 0;

var data:any[] = [];
var data2:any[]= [];
for(var i=0;i<personalInformation.personalQualities.length;i++){
    data[i] = {
      name:personalInformation.personalQualities[i].title,
      uv:(100 - personalInformation.personalQualities[i].percentage),
      pv:personalInformation.personalQualities[i].percentage
    }
    data2[i] = [{
      name:'Negative',
      value:(100 - personalInformation.personalQualities[i].percentage)
    },
    {
      name:personalInformation.personalQualities[i].title,
      value:personalInformation.personalQualities[i].percentage
    }];
    
    totalPercentage += personalInformation.personalQualities[i].percentage;
}

interface Chart {
  chartDisplayed:number,
  onChartChange:any
}
const COLORS = ['#515151', '#18acb2'];

const PersonalQualities = () => {
    const [chartDisplayed, setChartDisplayed] = useState<number>(0);
    var test = 0;
    return (
      <div className='charts-section-container'>
        <p className='more-info'>Click a bar for more details</p>
        <DisplayPieChart chartDisplayed={chartDisplayed} onChartChange={setChartDisplayed}/>
        <div className='right'>
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart
                layout="vertical"
                width={500}
                data={data}
                barGap={10}
                margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
                }}
                >
                <XAxis display='none' type="number" />
                <YAxis width={90} tick={{fontSize: 12}} dataKey="name" type="category" scale="band" />
                <Bar dataKey="pv" stackId="a" barSize={20} fill="#18acb2" label={renderCustomizedLabel}>
                    {
                      data.map((entry, index) => {
                        return(<Cell style={{ cursor: 'pointer' }} key={`cell-${index}`}  onClick={function(){ setChartDisplayed(index)}} stroke='#515151'  strokeWidth={1}/>)
                    })}
                </Bar>
                <Bar dataKey="uv" stackId="a" barSize={20} fill="#515151" stroke="#515151" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
    //<Bar dataKey="pv" stackId="a" barSize={20} fill="#413ea0" label/>
  
}

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + (width - 20)}
        y={y - (radius - 25)}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="center"
      >
        {value}%
      </text>
    </g>
  );
};
const DisplayPieChart: React.FC<Chart> = ({chartDisplayed, onChartChange}) =>{
  return(
    <div>
      <div className='pie-chart-text'>
        <p className='bar-title'>{personalInformation.personalQualities[chartDisplayed].title}</p>
        <p className='bar-text'>{personalInformation.personalQualities[chartDisplayed].infoText}</p>
      </div>
      <div className='left'>
        <ResponsiveContainer className='temp' width="100%" height={200}>
          <PieChart>
            <g>
              <text
                x={111}
                y={114}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="center"
                style={{fontSize: 20}}
              >
                {data2[chartDisplayed][1].value}%
              </text>
            </g>
            <Pie
              data={data2[chartDisplayed]}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>)
};
/*<PieChart>
              <g>
                <text
                  x={111}
                  y={114}
                  fill="#000"
                  textAnchor="middle"
                  dominantBaseline="center"
                  style={{fontSize: 20}}
                >
                  {data3[1].value}%
                </text>
              </g>
              <Pie
                data={data3}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>*/
              export default PersonalQualities;