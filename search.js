var client = require('./connection.js');

client.search({  
  index: 'newdev_skus',
  type: 'skusdetails',
  body: {
    query: {
      match: { "sku_display_name": "*Samsung*" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
    //   console.log("--- Response ---");
    //   console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});