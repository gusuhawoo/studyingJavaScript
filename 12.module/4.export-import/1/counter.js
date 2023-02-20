let count = 0;
// 1.
// export default function increase() {
//   count++;
//   console.log(count);
// }

// 2.
export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
