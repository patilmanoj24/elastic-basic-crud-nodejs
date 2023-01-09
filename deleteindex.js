var client = require('./connection.js');

client.indices.delete({index: 'newdev_skus'},function(err,resp,status) {  
  console.log("delete",resp);
});