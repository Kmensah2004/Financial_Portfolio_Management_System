// Create variable for our assets list
export const assets = [
    {id: 1, name: 'TSLA', type: 'stock', price: 450, quantity: 20},
    {id: 2, name: 'NIO', type: 'stock', price: 200, quantity: 40},
    {id: 3, name: 'Apple', type: 'stock', price: 1500, quantity: 25},
    {id: 4, name: 'CHPT', type: 'stock', price: 325, quantity: 50},
    {id: 5, name: 'META', type: 'stock', price: 238, quantity: 50}
];

//Create function to identify assets by typing in their unique ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
};