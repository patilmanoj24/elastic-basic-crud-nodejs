var client = require('./connection.js');

var date = new Date();
var timestamp = date.getTime();  

client.index({  
  index: 'newdev_skus',
  id: '4',
  type: 'skusdetails',
  body: {
    "sku": "Samsung Galaxy s30",
    "sku_id": "57",
    "sku_for": "mall",
    "sku_display_name": "Samsung Galaxy s30",
    "description": "48MP + 8MP + 5MP triple rear camera | 16MP front facing camera , 16.21 centimeters (6.4-inch) FHD+ capacitive touchscreen with 2340 x 1080 pixels resolution 16M color support",
    "product_name": "Samsung Galaxy s10",
    "mrp": "15000",
    "selling_price_without_tax": "15000",
    "selling_price_with_tax": "15000",
    "discount_percent": "27",
    "discount_amount": "801",
    "is_top_selling": "yes",
    "brand_id": "2",
    "brand_name": "Samsung",
    "primary_category_id": "20",	
    "secondary_category_names": ["OneplusApple", "Nokia", "Pixel 1"],
    "cat_ids": ["1", "5", "21"],
    "status": "0",
    "retail_operator_id": "11",
    "airport_id": "25",
    "outlet_id": "222",
    "product_id": "1",
    "outlet_name": "raghuleela Vashi",
    "sku_images": [{
      "key": "desc_compressed_image",
      "value": ["https:/YOUR_S3_BUSKET_PATH/cmp_samsung galaxy s10_1578312696496_pdi_1.jpg"]
    }, {
      "key": "sku_compressed_image",
      "value": ["https:/YOUR_S3_BUSKET_PATH/cmp_samsung galaxy s10_1578312696496_pdi_1.jpg"]
    }],
    "dynamic_attributes": [{
      "key": "Size",
      "value": ["Five Inches"]
    }, {
      "key": "Colour",
      "value": ["Red,Yellow,Green"]
    }, {
      "key": "Pattern",
      "value": ["touchscreen"]
    }],
    "created_at": timestamp
  }
},function(err,resp,status) {
    console.log(resp);
});