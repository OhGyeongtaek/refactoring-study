export function price({ quantity, itemPrice }) {
  const basePrice = quantity * itemPrice;
  const qtySalePrice = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const deliveryPrice = Math.min(quantity * itemPrice * 0.1, 100);

  // 가격(price) = 기본가격 - 수량할인 + 배송비
  return basePrice - qtySalePrice + deliveryPrice;
}

const testValue = {
  quantity: 5,
  itemPrice: 5000,
};

console.log(price(testValue));
