import { Guest } from 'src/app/model/guest.model';
import { Table } from 'src/app/model/tables.model';

export class SeatingArrangement{
    Table:Table;
    GuestsList:Guest[]=[];
    constructor(table, guestsList){
      this.Table=table;
      this.GuestsList=guestsList;
    }
  }