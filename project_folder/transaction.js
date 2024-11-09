import { assets, getAssetById } from './asset.js';

// Create Transaction class
class Transaction {
    constructor(id, type, quantity) {
        this.id = id;
        this.type = type;
        this.quantity = quantity;
        this.assets = getAssetById(id);
    }

    //completes transaction
    completeTransaction() {
        if (this.type === 'sell') {
            if (this.quantity > this.assets.quantity) {
                throw new Error (`Insufficient quantity for sale of ${this.assets.name}.`);
            }
            this.assets.quantity -= this.quantity;
        } else if (this.type === 'buy') {
            this.assets.quantity += this.quantity;
        } else {
            throw new Error ('Invalid transaction type.');
        }
    }
}


export default Transaction;