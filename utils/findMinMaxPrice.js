export const  findMinMaxPrice = variations => {
    if (!variations || variations.length === 0) {
        return { minPrice: null, maxPrice: null };
    }
    let minPrice = variations[0].price;
    let maxPrice = variations[0].price;

    for (let i = 1; i < variations.length; i++) {
        const price = variations[i].price;
        if (price < minPrice) {
            minPrice = price;
        }
        if (price > maxPrice) {
            maxPrice = price;
        }
    }
    return { minPrice, maxPrice };
}
