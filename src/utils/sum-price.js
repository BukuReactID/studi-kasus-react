export function sumPrice(items){
  return items.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
}

