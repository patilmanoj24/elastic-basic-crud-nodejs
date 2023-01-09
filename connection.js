const elasticsearch=require('elasticsearch');

/* var client = new elasticsearch.Client( {  
  hosts: [
    'https://[username]:[password]@[server]:[port]/',
    'https://[username]:[password]@[server]:[port]/'
  ]
}); */
// console.log(elasticsearch);

var client =  new elasticsearch.Client({
	// host: '127.0.0.1:9200',  // this is for local elasticsearch
    host: 'YOUR_ELASTIC_SERVER_HOST',
    log: 'error'
  });

  module.exports = client;