const canvas = d3.select(".canva")

const svg = canvas.append("svg")
              .attr("width", 600)
              .attr("height", 600)

const margin = {top: 20, right:20. bottom:20}


const margin = {top: 20, right: 10, bottom: 20, left: 10};
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

// var svg = d3.select('body').append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//   .append('g')
//     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

area = svg.append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)

var linearGen = d3.line()
                    .x(d,i) 
                    .y()
