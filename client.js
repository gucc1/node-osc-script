const { Client } = require('node-osc');
 
const client = new Client('127.0.0.1', 8338);
client.send('/oscAddress', 200, () => {
  client.close();
});