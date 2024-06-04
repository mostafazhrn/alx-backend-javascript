export default function groceriesList() {
  const ar = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const gro = new Map();
  for (const x of ar) gro.set(x[0], x[1]);
  return gro;
}
