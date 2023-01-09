var elasticsearch=require('elasticsearch');

/* var client = new elasticsearch.Client( {  
  hosts: [
    'https://[username]:[password]@[server]:[port]/',
    'https://[username]:[password]@[server]:[port]/'
  ]
}); */

var client =  new elasticsearch.Client({
    host: '127.0.0.1:9200', // this is your local elastic host
    log: 'error'
  });

  module.exports = client;