import {  Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import * as jumboCasesBar from '../../../assets/jumbotronbar.json';

@Component({
  selector: 'app-simplebarchart',
  templateUrl: './simplebarchart.component.html',
  styleUrls: ['./simplebarchart.component.scss']
})
export class SimplebarchartComponent implements OnInit {

  @Input() private data: Array<any>;
  currentCasesBar;
  mobile;

  constructor() { }

  ngOnInit() {

    const fakeDataBar = jumboCasesBar['fakedatabar'];
    this.currentCasesBar = fakeDataBar[Object.keys(fakeDataBar)[Object.keys(fakeDataBar).length - 1]];
    const width = window.innerWidth;
    const height = document.getElementById('top').clientHeight;
    const widthsvg = document.getElementById('top').clientWidth;
    let yheight = 250;

    if (width >= 600) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }

    if (width <= 600) {
      yheight = 200;
    }

    this.drawfakeCasesBar(width, height, this.data, yheight, widthsvg);
  }

  drawfakeCasesBar(width, height, datapull, yheight, widthsvg) {

    datapull = datapull.fakedatabar;

    if (width >= 450) {
      width = widthsvg;
    }

    const parseTime = d3.timeParse('%m/%d/%Y');

    const xBar = d3.scaleBand().range([0, width]).padding(0.05);
    const yBar = d3.scaleLinear().range([0, yheight]);

    xBar.domain(datapull.map(function(d) { return parseTime(d.date); }));
    yBar.domain([0, d3.max(datapull, function(d) { return d.cases; })]);

    const svg = d3.select('.top-wrapper').append('svg')
                .attr('width',  width)
                .attr('height', height)
                .attr('x', 0)
                .attr('y', 0)
                .attr('class', 'jumbobar')
                .append('g')
                .attr('transform', 'translate(0, 0)');

      svg.selectAll('.bar')
            .data(datapull)
            .enter().append('rect')
            .attr('x', function(d) { return xBar(parseTime(d.date)); })
            .attr('width', xBar.bandwidth())
            .attr('y', function(d) { return height - yBar(d.cases); })
            .attr('height', function(d) { return yBar(d.cases); })
            .attr('fill', '#738A90')

      }
}
