import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface iFeelingChartProps {
  feelingArray: { name: string; y: number }[]
}

export default function FeelingChart({ feelingArray }: iFeelingChartProps) {
  const options = {
    chart: {
      type: 'pie',
      margin: [0, 5, 0, 5],
      backgroundColor: 'transparent',
      spacingTop: 0,
      spacingBottom: 0,
      height: '325px',
    },
    title: {
      text: null,
    },
    subtitle: {
      text: null,
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
        '<span style="color:{point.color}">\u25cf</span> ' +
        '{point.name}: <b>{point.percentage:.1f}%</b>',
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        size: '50%',
        allowPointSelect: true,
        borderWidth: 2,
        borderRadius: 8,
        innerSize: '60%',
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.2f}%',
          distance: 20,
        },
      },
    },
    series: [
      {
        animation: {
          duration: 1000,
        },
        colorByPoint: true,
        data: feelingArray,
      },
    ],
  }
  return (
    <div className="w-0 md:w-[350px] ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
