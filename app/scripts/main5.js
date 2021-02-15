console.log('hello');
const canvas = d3.select('.canva');

const svg = canvas.append('svg')
                .attr('width', 600)
                .attr('height', 400);

const rect = svg.selectAll('rect');

d3.json('./scripts/test.json')
      .then(data => {
          console.log(data)
          const y = d3.scaleLinear()
              .domain([0, d3.max(data, d => d.height)])
              .range([0, 250]);

          console.log(y);
          console.log(y(250));
          console.log(y(500));

          rect.data(data)
              .enter().append('rect')
              .attr('width', (d,i) => d.width)
              .attr('height', (d,i) => y(d.height))
              .attr('fill', (d, i) => d.fill)
              .attr('x', (d,i) => i*26)


      })
