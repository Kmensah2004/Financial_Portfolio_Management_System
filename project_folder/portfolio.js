
import { assets } from './asset.js';

// Creates function to calculate the portfolio value 
export function calculatePortfolioValue(assets) {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0);
}

// Create the total porfolio value as a variable
const portfolioValue = calculatePortfolioValue(assets);

// Create function to see what percentage each asset makes 
export function getPortfolioAllocation(assets) {
    return assets.map(asset => {
        const percentage = ((asset.price * asset.quantity) / portfolioValue) * 100;
        return {
            name: asset.name,
            allocation: Number(percentage.toFixed(1))
        };
    });  
}