export function insertRow(row) {
  console.log('inserting row', row);
  return Math.floor(Math.random() * 100);
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
}

export function deleteRow(rowId) {
  console.log(`Delete row ${rowId}`);
}
