export function price({ quantity, itemPrice }) {
  const basePrice = quantity * itemPrice;
  const discount = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const shipping = Math.min(quantity * itemPrice * 0.1, 100);

  // 가격(price) = 기본가격 - 수량할인 + 배송비
  return basePrice - discount + shipping;
}
