export default function createIteratorObject(report) {
  const emploi = [];
  for (const [cle, valu] of Object.entries(report.allEmployees)) {
    emploi.push(...valu);
  }
  return emploi[Symbol.iterator]();
}
