
// const esClient = require('./client');
var esClient = require('./connection.js');
const addmappingToIndex = async function(indexName, mappingType, mapping){
    console.log(mapping);
    return await esClient.indices.putMapping({
        index: indexName,
        type: mappingType,
        include_type_name : true,
        body: mapping
    });
}

module.exports = addmappingToIndex;


// test function to explain how to invoke.
async function test(){
    const mapping = {
        properties: {
            sku_id: {
                type: "integer"
            },
            sku: {
                type: "keyword"
            },
            sku_display_name: {
                type: "keyword"
            },
            outlet_id: {
                type: "integer"
            },
            outlet_name: {
                type: "keyword"
            },
            airport_id: {
                type: "integer"
            },
            sku_for: {
                type: "integer"
            },
            description: {
                type: "text"
            },
            product_id: {
                type: "integer"
            },
            product_name: {
                type: "text"
            },
            mrp: {
                type: "float"
            },
            selling_price_without_tax: {
                type: "float"
            },
            selling_price_with_tax: {
                type: "float"
            },
            discount_percent: {
                type: "float"
            },
            discount_amount: {
                type: "float"
            },
            brand_id: {
                type: "integer"
            },
            brand_name: {
                type: "text"
            },
            is_top_selling: {
                type: "integer"
            },
            primary_category_id: {
                type: "integer"
            },
            category_ids: {
                type: "text"
            },
            secondary_category_names: {
                type: "text"
            },
            status: {
                type: "integer"
            },
            retail_operator_id: {
                type: "integer"
            },
            sku_images: {
                "type": "nested",
                properties: {
                  key: {
                    "type": "keyword"
                  },
                  value: {
                    "type": "keyword"
                  }
                }
              },
              dynamic_attributes: {
                  "type": "nested",
                  properties: {
                    key: {
                      "type": "keyword"
                    },
                    textvalue: {
                      "type": "keyword"
                    },
                    intvalue: {
                      "type": "text"
                    }
                  }
                },
                created_at: {
                type: "date",
                format: "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }
    }
    try {
        const resp = await addmappingToIndex('newdev_skus', 'skusdetails', mapping);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


test();