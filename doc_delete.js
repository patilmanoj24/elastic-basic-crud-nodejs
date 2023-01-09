var client = require('./connection.js');

client.delete({  
  index: 'newdev_skus',
  id: '1',
  type: 'skusdetails'
},function(err,resp,status) {
    console.log(resp);
});