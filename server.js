let OSC = require('node-osc')
let server = new OSC.Server(8338)

server.on('message', function(msg, rinfo) {
  console.log(`msg = ${msg}`)
  console.log(`rinfo = ${rinfo}`)
})
// const dgram = require('dgram')
// const osc = require('osc-min')

// const sock = dgram.createSocket("udp4", function(msg, rinfo) {
//   var error, error1;
//   try {
//     return console.log(osc.fromBuffer(msg));
//   } catch (error1) {
//     error = error1;
//     return console.log("invalid OSC packet");
//   }
// });

// sock.bind(8338);
