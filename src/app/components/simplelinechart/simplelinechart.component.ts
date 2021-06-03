import {  Component, OnInit, Input} from '@angular/core';
import * as d3 from 'd3';
import * as d3annotate from 'd3-svg-annotation';

@Component({
  selector: 'app-simplelinechart',
  templateUrl: './simplelinechart.component.html',
  styleUrls: ['./simplelinechart.component.scss']
})
export class SimplelinechartComponent implements OnInit {

  @Input() private data: Array<any>;
  mobile;

  constructor() { }

  ngOnInit() {
    const width = window.innerWidth;
    const height = document.getElementById('top').clientHeight;
    const widthsvg = document.getElementById('top').clientWidth;

    if (width >= 600) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }

    let yheight = 250;
    let anote4 = 50;
    let anote3 = 36;
    let anote2 = 20;
    let annote = 10;
    let mobiley = 40;
    let mobilex = 20;

    if (width <= 600) {
      yheight = 200;
      anote4 = 50;
      anote3 = 33;
      anote2 = 17;
      annote = 8;
      mobiley = 20;
      mobilex = 20;
    }

    this.drawfakeCases(width, height, this.data, yheight, annote, anote2, anote3, anote4, widthsvg, mobiley, mobilex);
  }

  drawfakeCases(width, height, datapull, yheight, annote, anote2, anote3, anote4, widthsvg, mobiley, mobilex) {

    datapull = datapull.fakedata;

    if (width >= 450) {
      width = widthsvg;
    }

    const parseTime = d3.timeParse('%m/%d/%Y');

    const x = d3.scaleTime().range([0, width]);
    x.domain(d3.extent(datapull, function(d) { return parseTime(d.date); }));

    const y = d3.scaleLinear().range([0, yheight]);
    y.domain([0, d3.max(datapull, function(d) { return d.cases; })]);

    const area = d3.area()
    .x(function(d) { return x(parseTime(d.date)); })
    .y0(height)
    .y1(function(d) { return height - y(d.cases); })
    .curve(d3.curveMonotoneX);

    const valueline = d3.line()
    .x(function(d) { return x(parseTime(d.date)); })
    .y(function(d) { return height - y(d.cases); })
    .curve(d3.curveMonotoneX);

    const svg = d3.select('.top-wrapper').append('svg')
                .attr('width',  width)
                .attr('height', height)
                .attr('x', 0)
                .attr('y', 0)
                .attr('class', 'jumbo')
                .append('g')
                .attr('transform', 'translate(0, 0)')
                .append('svg')
                .attr('id', 'annotate')
                .attr('width', width)
                .attr('height', height)
                .append('a');

          svg.append('path')
              .datum(datapull)
              .attr('class', 'area')
              .attr('d', area);

    const path = svg.append('path')
                    .datum(datapull)
                    .attr('class', 'line')
                    .attr('fill', 'none')
                    .attr('stroke-width', '3px')
                    .attr('stroke', '#f2f2f2')
                    .attr('d', valueline);

                    const annotations = [
                      {
                        note: {
                          title: 'My Projects'
                        },
                        type: d3annotate.annotationCalloutCircle,
                        subject: {
                          radius: 5,
                          radiusPadding: 0
                        },
                        className: 'myviz',
                        color: ['#dddddd'],
                        x: x(parseTime(datapull[anote2].date)),
                        y: height - y(datapull[anote2].cases),
                        align: 'middle',
                        dy: 30,
                        dx: 30
                      },
                      {
                        note: {
                          title: 'Section Four'
                        },
                        type: d3annotate.annotationCalloutCircle,
                        subject: {
                          radius: 5,
                          radiusPadding: 0
                        },
                        className: 'mywork',
                        color: ['#dddddd'],
                        x: x(parseTime(datapull[anote4].date)),
                        y: height - y(datapull[anote4].cases),
                        dy: -20,
                        dx: -90
                      },
                      {
                        note: {
                          title: 'Medium Feed'
                        },
                        type: d3annotate.annotationCalloutCircle,
                        subject: {
                          radius: 5,
                          radiusPadding: 0
                        },
                        className: 'mediumposts',
                        color: ['#dddddd'],
                        x: x(parseTime(datapull[anote3].date)),
                        y: height - y(datapull[anote3].cases),
                        dy: 40,
                        dx: 20
                      },
                      {
                        note: {
                          title: 'About Me'
                        },
                        type: d3annotate.annotationCalloutCircle,
                        subject: {
                          radius: 5,
                          radiusPadding: 0
                        },
                        className: 'aboutme',
                        color: ['#dddddd'],
                        x: x(parseTime(datapull[annote].date)),
                        y: height - y(datapull[annote].cases),
                        dy: mobiley,
                        dx: mobilex
                      }
                    ];

    const makeAnnotations = d3annotate.annotation().annotations(annotations);

    d3.select('#annotate')
    .append('g')
    .attr('class', 'annotation-group')
    .call(makeAnnotations);

    d3.selectAll('.annotation-note-bg')
      .attr('rx', 10)
      .attr('ry', 10);

    const totalLength = path.node().getTotalLength();

    path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .on('start', function repeat() {
            d3.active(this)
                .duration(7000)
                .ease(d3.easeLinear)
                .attr('stroke-dashoffset', 0);
        });

    d3.select('.myviz')
      .on('click', function() {
        d3.transition()
        .duration(7500)
        .tween('scroll', document.getElementById('navigate').scrollIntoView({behavior: 'smooth'}));
      });

    d3.select('.aboutme')
    .on('click', function() {
      d3.transition()
      .duration(7500)
      .tween('scroll', document.getElementById('aboutme-nav').scrollIntoView({behavior: 'smooth'}));
    });

    d3.select('.mediumposts')
    .on('click', function() {
      d3.transition()
      .duration(7500)
      .tween('scroll', document.getElementById('medium').scrollIntoView({behavior: 'smooth'}));
    });

    d3.select('.mywork')
    .on('click', function() {
      d3.transition()
      .duration(7500)
      .tween('scroll', document.getElementById('section4').scrollIntoView({behavior: 'smooth'}));
    });
  }
}
