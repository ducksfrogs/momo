console.log('hello');
const canvas = d3.select('.canva');

const svg = canvas.append('svg')
                .attr('width', 600)
                .attr('height', 500);

const margin = {top: 20, right: 20, bottom: 70, left:70}
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 500 - margin.top - margin.bottom;

const graph = svg.append('g')
                .attr('width', graphWidth)
                .attr('height', graphHeight)
                .attr('transform', `translate(${margin.left},
                                              ${margin.top})`);

const rect = graph.selectAll('rect');

const xAxisGroup = graph.append('g')
                  .attr('transform', `translate(0, ${graphHeight})`);
const yAxisGroup = graph.append('g');



d3.json('./scripts/test.json')
      .then(data => {
      const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.height)])
                .range([graphHeight, 0]);

      const x = d3.scaleBand()
                .domain(data.map(item => item.fill ))
                .range([0,500])
                .paddingInner(0.1)
                .paddingOuter(0.2);

        console.log(data.map(item => item.fill ))


        console.log(x.bandwidth());
          rect.data(data)
              .enter().append('rect')
              .attr('width', x.bandwidth)
              .attr('height', (d,i) => graphHeight - y(d.height))
              .attr('fill', (d,i) => d.fill)
              .attr('x', (d,i) => x(d.fill))
              .attr('y', d => y(d.height))

              const xAxis = d3.axisBottom(x);
              const yAxis = d3.axisLeft(y);

              xAxisGroup.call(xAxis);
              yAxisGroup.call(yAxis);
      })
