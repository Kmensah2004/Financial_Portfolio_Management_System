// Import the assets array from asset.js file
import { assets } from './asset.js';

// Creates function to calculate the portfolio value  
export function calculatePortfolioValue(assets) {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0);
}

// Create the total porfolio value as a variable
const portfolioValue = calculatePortfolioValue(assets);

// Creates function to see what percentage each asset makes out of our total portfolio
export function getPortfolioAllocation(assets) {
    return assets.map(asset => {
        const percentage = ((asset.price * asset.quantity) / portfolioValue) * 100;
        return {
            name: asset.name,
            allocation: Number(percentage.toFixed(1))
        };
    });  
}