export function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const calculateOutstanding = (invoice) =>
  invoice.orders.reduce((sum, order) => sum + order.amount, 0);

const recordDueDate = (invoice) => {
  // record due date
  const today = new Date();

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const printDetails = (invoice, outstanding) => {
  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
