import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default class BarChart extends React.Component {
  componentDidMount() {
    this.drawBarChart([2, 4, 6, 8])
  }

  drawBarChart = (data) => {
    const canvasHeight = 400
    const canvasWidth = 600
    const scale = 20
    const svgCanvas = d3
      .select(this.refs.canvas)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .style('border', '1px solid black')
    svgCanvas
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', (datapoint) => datapoint * scale)
      .attr('fill', 'orange')
      .attr('x', (datapoint, iteration) => iteration * 45)
      .attr('y', (datapoint) => canvasHeight - datapoint * scale - 10)
    svgCanvas
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (dataPoint, i) => i * 45 + 20)
      .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 20)
      .text((dataPoint) => dataPoint)
  }

  render() {
    return <div ref="canvas" />
  }
}
