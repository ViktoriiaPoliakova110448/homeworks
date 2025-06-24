function process(services) {
    const getPrices = () => Object.values(services).map(price => parseInt(price.replace(' грн', '')));
    return {
        price: () => getPrices().reduce((acc, curr) => acc + curr, 0),
        minPrice: () => Math.min(...getPrices()),
        maxPrice: () => Math.max(...getPrices())
    };
}

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

const ops = process(services);

console.log(`Сума: ${ops.price()} грн`);
console.log(`Мінімум: ${ops.minPrice()} грн`);
console.log(`Максимум: ${ops.maxPrice()} грн`);

services['Розбити скло'] = "200 грн";

console.log(`\nПісля додавання нової послуги:`);
console.log(`Сума: ${ops.price()} грн`);
console.log(`Мінімум: ${ops.minPrice()} грн`);
console.log(`Максимум: ${ops.maxPrice()} грн`);