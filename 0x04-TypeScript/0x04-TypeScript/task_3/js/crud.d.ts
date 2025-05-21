import { RowID, RowElement } from "./interface"
import { insertRow  } from "./crud";
import { deleteRow} from "./crud";
import { updateRow } from "./crud";

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;