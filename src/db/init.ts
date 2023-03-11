import Shoe from "./models/shoe";

async function dbinit() {
    await Shoe.sync({
        alter: true
    });
}

export default dbinit;
