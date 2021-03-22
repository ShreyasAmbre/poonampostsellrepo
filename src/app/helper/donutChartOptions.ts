import {Options} from 'highcharts'

export const donutChartOptions: Options = {
  chart:{
    type: 'pie',
    plotShadow: false,
    width: 350,
    height: 200
  },
  credits:{
    enabled: false
  },
  plotOptions:{
    pie:{
      innerSize: '99%',
      borderWidth: 20,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth:0
      },
    }
  },
  title:{
    verticalAlign: 'middle',
    floating: false,
    text: 'Leads',
  },
  series:[
    {
      type:'pie',
      data: [
        {name: '', y: 4, color: '#378AFF'},
        {name: '', y: 1, color: '#eeeeee'},
      ]
    }
  ],
}

export const donutChartOptions2: Options = {
  chart:{
    type: 'pie',
    plotShadow: false,
    width: 350,
    height: 200
  },
  credits:{
    enabled: false
  },
  plotOptions:{
    pie:{
      innerSize: '99%',
      borderWidth: 20,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth:0
      },
    }
  },
  title:{
    verticalAlign: 'middle',
    floating: false,
    text: 'Follow Ups',
  },
  series:[
    {
      type:'pie',
      data: [
        {name: '', y: 4, color: '#F54F52'},
        {name: '', y: 1, color: '#eeeeee'},
      ]
    }
  ],
}

export const donutChartOptions3: Options = {
  chart:{
    type: 'pie',
    plotShadow: false,
    width: 350,
    height: 200
  },
  credits:{
    enabled: false
  },
  plotOptions:{
    pie:{
      innerSize: '99%',
      borderWidth: 20,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth:0
      },
    }
  },
  title:{
    verticalAlign: 'middle',
    floating: false,
    text: 'Properties',
  },
  series:[
    {
      type:'pie',
      data: [
        {name: '', y: 4, color: '#FFEC21'},
        {name: '', y: 1, color: '#eeeeee'},
      ]
    }
  ],
}

export const donutChartOptions4: Options = {
  chart:{
    type: 'pie',
    plotShadow: false,
    width: 350,
    height: 200
  },
  credits:{
    enabled: false
  },
  plotOptions:{
    pie:{
      innerSize: '99%',
      borderWidth: 20,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth:0
      },
    }
  },
  title:{
    verticalAlign: 'middle',
    floating: false,
    text: 'Appointment',
  },
  series:[
    {
      type:'pie',
      data: [
        {name: '', y: 4, color: '#9552EA'},
        {name: '', y: 1, color: '#eeeeee'},
      ]
    }
  ],
}

