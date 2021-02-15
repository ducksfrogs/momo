console.log("HEllo")

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.png',
    inStock:true,
    inventory: 1,
    details: ['80cottn', 'ddd', 'ddddd'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ]
  }
})
