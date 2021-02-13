console.log("hello");
const canvas = d3.select('.canva');

const svg = canvas.append('svg')
                .attr('width', 600)
                .attr('height', 600);

const rect = svg.selectAll('rect');

d3.json('./scripts/test.json')
      .then(data => {
          console.log(data)
          rect.data(data)
              .enter().append('rect')
              .attr("width", (d,i) => d.width)
              .attr('height', (d,i) => d.height)
              .attr('fill', (d, i) => d.fill)
      })
