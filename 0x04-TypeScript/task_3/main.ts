import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row1: RowElement = {
	    firstName: 'Guilaume',
	        lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row1);
const updatedRow: RowElement = { ...row1, age: 23};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
