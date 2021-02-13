console.log('\'Allo \'Allo!');

var width = 600;
var height = 600;

// const api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson'
// const api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson'
const api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson'
const canvas = d3.select('.canva');

const svg = canvas.append('svg')
            .attr('width', width)
            .attr('height', height);


d3.json(api_url)
      .then(data => {

          console.log(data.features)
          const circle = svg.selectAll('circle')
                      .data(data.features);

          circle.attr('cx', (d,i) => d.properties.mag)
                .attr('cy', (d, i) => Math.floor(Math.random()*100)+ d.properties.mag)
                .attr('r', (d,i) => d.properties.mag)
                .attr('fill', (d, i) => d.properties.alert)
//
          circle.enter().append('circle')
                .attr('cx', (d,i) => d.properties.mag * 80)
                .attr('cy', (d, i) => Math.floor(Math.random()*100)+ d.properties.mag)
                .attr('r', (d,i) => d.properties.mag*4)
                .attr('fill', (d,i) => d.properties.alert)
        });
