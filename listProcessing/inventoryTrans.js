function transactionsFor(id, trans) {
  let filtered = trans.filter(trans => trans.id === id);
  return filtered;
}

function isItemAvailable(itemId, transactions) {
  let trans = transactionsFor(itemId, transactions);
  let currentQuantity = trans.reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      sum += transaction.quantity;
    } else {
      sum -= transaction.quantity;
    }

    return sum;
  }, 0);

  console.log (currentQuantity > 0);
  return currentQuantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true