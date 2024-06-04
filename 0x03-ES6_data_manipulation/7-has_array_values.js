export default function hasvaluesFromArray(set, array) {
  return array.every((x) => set.has(x));
}
