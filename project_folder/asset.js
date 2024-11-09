

// Create variable for our assets list
export const assets = [
    {id: 1, name: 'CHPT', type: 'stock', price: 50, quantity: 30},
    {id: 2, name: 'NIO', type: 'stock', price: 200, quantity: 10},
    {id: 3, name: 'AMZN', type: 'stock', price: 1500, quantity: 5},
    {id: 4, name: 'TSLA', type: 'stock', price: 400, quantity: 17},
    {id: 5, name: 'Meta', type: 'stock', price: 300, quantity: 25}
];

//Create function to identify assets by correlating in their  ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
};