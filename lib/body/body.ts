// import * as fs from 'fs';
import { Zalando } from './zalando';
import { Nike } from './nike';
import { Adidas } from './adidas';
import { Brand } from './brand';

function getZalandoData(str: string) :object {
    const zalando = new Zalando(str)

    return {
        price: zalando.getProductPrice(),
        product: zalando.getProduct(),
        type: zalando.getProductType(),
        color: zalando.getProductColor()
    };
}

function getNikeData(str: string) :object {
    const nike = new Nike(str)

    return {
        price: nike.getProductPrice(),
        product: nike.getProduct(),
        type: nike.getProductType(),
        color: nike.getProductColor()
    };
}

function getAdidasData(str: string) :object {
    const adidas = new Adidas(str)

    return {
        price: adidas.getProductPrice(),
        product: adidas.getProduct(),
        type: adidas.getProductType(),
        color: adidas.getProductColor(),
        brand: adidas.brand
    };
}

function extractData(body: object) :object {
    let data = {}
    switch (body['site']) {
        case "zalando.fr":
            data = getZalandoData(body['body']);
            break;
        case "nike.com":
            data = getNikeData(body['body']);
            break;
        case "adidas.fr":
            data = getAdidasData(body['body']);
            break;
    }
    data['size'] = body['size'];
    if (data['brand'] === undefined)
        data['brand'] = new Brand(data['product']).extractBrand();

    data['product'] = data['product'].toLowerCase().replace(data['brand'], '').trim();
    data['color'] = data['color'].toLowerCase();

    return data;
}

export { extractData };
