export default function cleanSet(set, startString) {
  if (!startString) return '';
  const arr = [];
  set.forEach((x) => {
    if (x && x.startsWith(startString)) arr.push(x.slice(startString.length));
  });
  return arr.join('-');
}
