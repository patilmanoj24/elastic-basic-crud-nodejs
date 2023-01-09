var client = require('./connection.js');

client.indices.create({  
  index: 'newdev_skus' // change the indexname if you want 
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});