import * as dotenv from "dotenv";
import axios from 'axios'

async function dataMatcher(data: object): Promise<object> {

    let product_title = data["product"];
    let product_brand = data["brand"];
    let product_size = data["size"];
    let product_color = data["color"];

    console.log("title :" + product_title + ".")
    console.log("brand :" + product_brand + ".")
    console.log("size :" + product_size + ".")
    console.log("color :" + product_color + ".")

    let res = await axios.get(
      'http://163.172.129.60:9200/okaz_sample_good_1/_search', {
        headers: {
            'Content-Type': 'application/json'
        },
        data : JSON.stringify(
        {
            "query": { 
              "bool": { 
                "must": [
                  { "match": { "title": product_title}},
                  { "match": { "brand": product_brand }},
                  { "match": { "size": product_size }}
                ],
                "should": [
                  { "match": { "color": product_color }}
                ]
              }
            }
        })
    });

    console.log(res.data.hits.hits)

    let adsBundle = [];
    for (const hit of res.data.hits.hits) {
        adsBundle.push({
          title: hit._source.title,
          price: hit._source.price,
          brand: hit._source.brand,
          url: hit._source.url,
          picture_url: hit._source.picture_url,
        });
    }
    return adsBundle;
}

export { dataMatcher };
