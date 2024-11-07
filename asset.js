export const assets = [
    { id: 1, name: 'NIO', type: 'stock', price: 120, quantity: 7 },
    { id: 2, name: 'TSLA', type: 'stock', price: 1500, quantity: 10 },
    { id: 3, name: 'US Corporate Bond', type: 'bond', price: 1200, quantity: 15 }
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}