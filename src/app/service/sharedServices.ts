import { Injectable } from '@angular/core';
//import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable()
export class SharedService {
currentUserId : number ;
currentEventId:number;
constructor() { }
public exportAsExcelFile(json: any[], excelFileName: string): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, excelFileName);
}
public exportTExcelFile(): void {
  // const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('excel-template'));
  // const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  // this.saveAsExcelFile(excelBuffer, excelFileName);
 /* table id is passed over here */   
 let element = document.getElementById('excel-template'); 
 const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

 /* generate workbook and add the worksheet */
 const wb: XLSX.WorkBook = XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 /* save to file */
 XLSX.writeFile(wb, 'ExcelTemplate.xlsx');



}
private saveAsExcelFile(buffer: any, fileName: string): void {
   const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
   //FileSaver.saveAs(data, fileName + '_YourPlace_' + new  Date().getTime() + EXCEL_EXTENSION);
}
}