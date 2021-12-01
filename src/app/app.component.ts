import { Component, VERSION, OnInit } from '@angular/core';
import clusterdata from './data.json';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: EChartsOption;
  echartsInstance;

  ngOnInit(): void {
    this.setOption();
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
    setTimeout(()=>{
      this.echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: [0],
        dataIndex: [37, 38]
    });
    },0)
  }

  onChartClick(event) {
    console.log(event)
  }

  setOption(): void {
    this.options = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      hoverLayerThreshold: 100,
      series: [
        {
          type: 'tree',
          data: [clusterdata],
          left: '20%',
          right: '20%',
          top: '20%',
          bottom: '20%',       
          layout: 'orthogonal',
          symbol: 'emptyCircle',
          symbolSize: 9,
          orient: 'TB',
          expandAndCollapse: true,
          roam:true,
          lineStyle: {
            width: 2
          },
          label: {
            position: 'top',
            rotate: 0,
            verticalAlign: 'middle',
            align: 'center',
            fontSize: 9,
            formatter: '{b}\nBob\naccess control',
            lineHeight: 15,
            offset:[0,-10],
          },
          leaves: {
            label: {
              position: 'top',
              rotate: 0,
              verticalAlign: 'middle',
              align: 'center',
              formatter: '{b}',
            },
          },
          emphasis: {
            focus: 'descendant'
          },
          initialTreeDepth: 3,
        }
      ]
    };
  }
}
