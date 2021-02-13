console.log('\'Allo \'Allo!');

var dataArray = [
  {width: 25, height: 4, fill: 'pink'},
  {width: 25, height: 10, fill: 'blue'},
  {width: 25, height: 30, fill: 'blue'},
  {width: 25, height: 60, fill: 'gray'},
  {width: 25, height: 40, fill: 'red'}
]
const canvas = d3.select('.canva');

const svg = canvas.append('svg')
            .attr('width', 500)
            .attr('height', 400);

const rect = svg.selectAll('rect');

rect.data(dataArray)
    .enter().append('rect')
        .attr('fill', 'black')
        .attr('width', '24')
        .attr('height', function(d){
              console.log(d.height);
              return d.height*2})
        .attr('x',function(d,i) {
          console.log(d);
          return i*25;})
        .attr('y', function(d, i){
          return 100 -(d.height*2);
        } )
console.log("ddd")
