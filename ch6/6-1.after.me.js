export function printOwing(invoice) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  const outstanding = invoice.orders.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);

  invoice.dueDate = getDueDate(new Date(), 30);

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const getDueDate = (baseDate, due) => {
  return new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate() + due
  );
};

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '경택',
};

printOwing(invoice);
