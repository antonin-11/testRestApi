import { Injectable } from '@nestjs/common';

import shoeService from '../db/services/shoeService'

import { BodyDto } from 'src/dto/body.dto';
import { ShoeDto } from '../dto/add.dto';

import { extractData } from '../../lib/body/body';
import { dataMatcher } from '../../lib/matching/matching';

import VintedSearch from '../vinted/search';

@Injectable()
export class ExtensionService {

    getExtensionBody(): string {
        return 'Hello from ExtensionBody';
    }

    async Addshoe(shoe: ShoeDto): Promise<boolean> {

        await shoeService.create({
            title: shoe.title,
            description: shoe.description,
            price: shoe.price,
            brand: shoe.brand,
            size: shoe.size,
            state: shoe.state,
            color: shoe.color,
            date: shoe.date,
            rating: shoe.rating,
            last_update: shoe.last_update,
            url: shoe.url,
            picture_url: shoe.picture_url,
            platform: "vinted",
            country: "FR",
            sold: false,
        });

        return true;
    }

    async getShoes(body: BodyDto): Promise<object> {

        let data = extractData(body);
    
        // create instance of vintedsearch
        const vintedSearch = new VintedSearch(data);
        const ads = await vintedSearch.getSearchVinted();

        return ads;
    }

}
