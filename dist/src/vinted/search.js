"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudscraper = require('cloudscraper');
var token = "";
var size_dictionnary = { 38: 776, 39: 778, 40: 780, 41: 782, 42: 784, 42.5: 785, 43: 786, 43.5: 787, 44: 788, 44.5: 789, 45: 790, 45.5: 791, 46: 792, 47: 794, 48: 1190, 49: 1191 };
var brand_dictionnary = { "nike": 53, "adidas": 14, "asics": 1195, "converse": 11445, "new balance": 1775, "puma": 535, "reebok": 162, "timberland": 44, "vans": 139 };
var color_dictionnary = {
    "noir": 1,
    "black": 1,
    "gris": 3,
    "blanc": 12,
    "crème": 20,
    "beige": 4,
    "abricot": 21,
    "orange": 11,
    "corail": 22,
    "rouge": 7,
    "bordeaux": 23,
    "rose": [5, 24],
    "violet": 6,
    "lila": 25,
    "bleu clair": 26,
    "bleu": 9,
    "marine": 27,
    "turquoise": 17,
    "menthe": 30,
    "vert": 10,
    "vert foncé": 28,
    "kaki": 16,
    "marron": 2,
    "moutarde": 29,
    "jaune": 8,
    "argenté": 13,
    "doré": 14,
    "multicolore": 15
};
class VintedSearch {
    constructor(data) {
        this.url = "https://www.vinted.be/api/v2/catalog/items?";
        this.data = data;
    }
    async setCookies() {
        var response = await cloudscraper.get("https://vinted.fr", async function (error, response, body) {
            if (error) {
                console.log('Error occurred');
            }
            else {
                let substr = "_vinted_fr_session";
                let cookies_data = response.headers['set-cookie'];
                cookies_data.forEach(element => {
                    if (element.startsWith(substr)) {
                        element.split(';').forEach(cookie => {
                            if (cookie.startsWith(substr)) {
                                token = cookie.split('=')[1];
                            }
                        });
                    }
                });
            }
        });
    }
    async getSearchVinted() {
        await this.setCookies();
        this.setCatalog(1231);
        this.setSize([this.data["size"]]);
        this.setBrand([this.data["brand"]]);
        this.setColor([this.data["color"]]);
        this.setSearch(this.data["product"]);
        this.getQuery();
        let headers = {
            "accept": "application/json, text/plain, */*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "cookie": "_vinted_fr_session=" + token,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
            "x-requested-with": "XMLHttpRequest"
        };
        let adsBundle = [];
        let response = await cloudscraper.get(this.url, { headers: headers }, function (error, response, body) {
            if (error) {
                console.log('Error occurred');
            }
            else {
                for (const ad of JSON.parse(body).items) {
                    adsBundle.push({
                        title: ad.title,
                        price: ad.price,
                        brand: ad.brand_title,
                        url: ad.url,
                        picture_url: ad.url,
                    });
                    if (adsBundle.length == 10) {
                        break;
                    }
                }
            }
        });
        return JSON.parse(JSON.stringify(adsBundle));
    }
    setCatalog(catalog) {
        this.catalog_ids = "&catalog_ids=" + catalog;
    }
    setSize(sizes) {
        this.size_ids = "&size_ids=";
        sizes.forEach(size => {
            this.size_ids += size_dictionnary[size] + ",";
        });
    }
    setBrand(brands) {
        this.brand_ids = "&brand_ids=";
        brands.forEach(brand => {
            this.brand_ids += brand_dictionnary[brand] + ",";
        });
    }
    setColor(colors) {
        this.color_ids = "&color_ids=";
        colors.forEach(color => {
            if (typeof color_dictionnary[color] === "number") {
                this.color_ids += color_dictionnary[color] + ",";
            }
            else {
                color_dictionnary[color].forEach(color_id => {
                    this.color_ids += color_id + ",";
                });
            }
        });
    }
    setSearch(search) {
        this.search_text = "&search_text=" + search.split(" ").join("%20");
    }
    getQuery() {
        this.url += this.catalog_ids + this.size_ids + this.brand_ids + this.color_ids + this.search_text;
    }
}
exports.default = VintedSearch;
//# sourceMappingURL=search.js.map