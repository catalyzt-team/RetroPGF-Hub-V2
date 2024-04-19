import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import data from '@/public/static/graphRPGF2/allocationDistributionEachCategory.json'
import { format } from 'path'
const AllocationDistributionEducation = () => {
  const allocationDataset = data

  const option = {
    chart: {
      type: 'pie',
      style: {
        fontFamily: 'Inter',
      },
    },
    // colors: ['#7cb5ec', '#8085e9', '#f7a35c'],
    title: {
      text: 'Education Category Distribution',
    },
    subtitle: {
      text: 'The allocation distribution OP in education category.',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
        '{point.name}: <b>{point.y}</b> ({Number(point.percentage).toFixed(2)} %)',
      formatter: function () {
        return `${this.point.name}: <b>${this.y}  OP</b> (${Number(
          this.percentage
        ).toFixed(2)}%)`
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            formatter: function () {
              return this.point.name.length > 10
                ? this.point.name.substring(0, 10) + '...'
                : this.point.name
            },
          },
          //   {
          //     enabled: true,
          //     distance: -40,
          //     format: '{point.percentage:.2f}%',
          //     style: {
          //       fontSize: '0.8em',
          //       textOutline: 'none',
          //       opacity: 1,
          //     },
          //   },
        ],
      },
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        // data: [
        //   {
        //     name: 'Education',
        //     y: data['Education'],
        //   },
        //   {
        //     name: 'Infrastructure',
        //     y: data['Infrastructure'],
        //   },
        //   {
        //     name: 'Tooling and utilities',
        //     y: data['Tooling and utilities'],
        //   },
        // ],
        data: allocationDataset.Educaiton.map((item) => {
          return {
            name: item['projectName'],
            y: item['amount'],
          }
        }),
      },
    ],
  }
  return (
    <div className="w-[40em]">
      <HighchartsReact highcharts={Highchart} options={option} />
    </div>
  )
}
export default AllocationDistributionEducation