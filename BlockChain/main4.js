const {Blockchain, Transaction} = require('./blockchain');

let savjeeCoin = new Blockchain();
savjeeCoin.createTransaction(new transaction('address1', 'address2', 100));
savjeeCoin.createTransaction(new transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions('xaviers-address');

console.log('\n Balance of xavier is', savjeeCoin.getBalanceOfAddress('xaviers-address'));



console.log('\n Starting the miner again...');
savjeeCoin.minePendingTransactions('xaviers-address');

console.log('\n Balance of xavier is', savjeeCoin.getBalanceOfAddress('xaviers-address'));