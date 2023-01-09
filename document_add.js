var client = require('./connection.js');

var date = new Date();
var timestamp = date.getTime();  

client.index({  
  index: 'newdev_skus',
  id: '80',
  type: 'skusdetails',
  body: {
    "sku": "S_G_S-10",
    "sku_id": "80",
    "sku_for": "2",
    "sku_display_name": "Samsung Galaxy s10-malad",
    "description": "Any Extra info",
    "product_name": "Samsung Galaxy s10",
    "mrp": "51000",
    "selling_price_without_tax": "45000",
    "selling_price_with_tax": "50400",
    "discount_percent": "1",
    "discount_amount": "600",
    "is_top_selling": "0",
    "brand_id": "2",
    "brand_name": "Samsung",
    "primary_category_id": "20",	
    "secondary_category_names": ['oneplus', 'apple', 'nokia', 'pixel' ],
    "category_ids": ["21", "22", "95"],
    "status": "1",
    "retail_operator_id": "10",
    "airport_id": "25",
    "outlet_id": "226",
    "product_id": "1",
    "outlet_name": "Timex Inorbit Vashi",
    "sku_images": [{
      "key": "desc_compressed_image",
      "value": ["https://Your_S3_BUCKET_URL/cmp_samsung galaxy s10_1578312696496_pdi_1.jpg"]
    }, {
      "key": "sku_compressed_image",
      "value": ["https://Your_S3_BUCKET_URL/cmp_samsung galaxy s10_1578312696496_pdi_1.jpg"]
    }],
    "dynamic_attributes": [{
      "key": "Size",
      "value": ["Five Inches"]
    }, {
      "key": "Colour",
      "value": ["Pink","Black","White"],
    }, {
      "key": "Pattern",
      "value": ["touchscreen"]
    }],
    "created_at": timestamp
  }
},function(err,resp,status) {
    console.log(resp);
});