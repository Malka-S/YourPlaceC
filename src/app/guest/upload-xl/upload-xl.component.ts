import { Component, OnInit } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { GuestService } from '../../service/guest.service';
import *as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-xl',
  templateUrl: './upload-xl.component.html',
  styleUrls: ['./upload-xl.component.css']
})

export class UploadXlComponent implements OnInit {
 
  guests : any;
  g:Guest;
  //מנסה לפתור את הבעיה
  externals: [
		{
			'./cptable': 'var cptable',
			'../xlsx.js': 'var _XLSX'
		}
	]
  constructor(private guestService: GuestService ) { }
  uploadExcel(e) { 
    try{
       const fileName = e.target.files[0].name;
        import('XLSX').then(XLSX => { let workBook = null; 
          let jsonData = null; const reader = new FileReader(); 
          // const file = ev.target.files[0];
     reader.onload = (event) => { const data = reader.result;
       workBook = XLSX.read(data, { type: 'binary' }); 
       jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name]; 
        initial[name] = XLSX.utils.sheet_to_json(sheet); return initial; }, {});
         this.guests = jsonData[Object.keys(jsonData)[0]];
         //לכאן הגיע וכאן עובד-מזהה ומדפיס
          console.log(this.guests); 
          
        }; reader.readAsBinaryString(e.target.files[0]); 
      });}
      catch(e){ console.log('error', e);  
    }
  }
    AddGuest(g:Guest):void{
      console.log('category '+g.guest_category_id);
      this.guestService.AddGuest(g).subscribe(
      response=>{console.log(response);
        g = response;
      },
      error=>{ console.log(error);
      }) 
    }
    
  ngOnInit(): void {
  }

}
