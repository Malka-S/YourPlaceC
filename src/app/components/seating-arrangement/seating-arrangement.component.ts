import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest.model';
import { Table } from '../../model/tables.model';
import { SeatingArrangement } from '../../model/SeatingArrangement.model';
import { SeatingService } from '../../service/SeatingService';
import { GuestService } from '../../service/guest.service';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-seating-arrangement',
  templateUrl: './seating-arrangement.component.html',
  styleUrls: ['./seating-arrangement.component.css']
})

export class SeatingArrangementComponent implements OnInit {

  public tablesList: Table[] = [];
  public seatingArrangement: SeatingArrangement[];
  constructor(private SeatingService: SeatingService, private GuestService: GuestService) { }

  ngOnInit(): void {

    //  this.SeatingService.getSeatingArrangemant().subscribe((data) =>{this.SeatingArrangemant=data;});
    this.SeatingService.getTablesList().subscribe((data) => {
      this.tablesList = data;
      this.fillGuests(data);
      console.log('tablesList-in', this.tablesList);

    });

    // console.log('SeatingArrangemant', this.SeatingArrangemant);
    //this.setCircle();
  }

  fillGuests(tableList) {
    this.seatingArrangement = [];
    tableList.forEach(table => {
      let guestList;
      this.GuestService.getGuestsListByTableId(table.table_id).subscribe(data => {
        guestList = data;
        console.log('guestList', guestList);
        this.seatingArrangement.push(new SeatingArrangement(table, guestList));
        console.log('SeatingArrangement', this.seatingArrangement);
        this.setCircle();
      });
    });
  }
  setCircle() {
    document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
      let circles = ciclegraph.querySelectorAll('.circle')
      let angle = 360 - 90, dangle = 360 / circles.length
      for (let i = 0; i < circles.length; ++i) {
        let circle = circles[i]
        angle += dangle
        document.getElementById("circle" + i).style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
      }
    })
  }

  GetSeatings() {
    // console.log(this.seatingArrangement.length, 'aaaa');
    console.log(this.seatingArrangement,"ghjk");
    
    return this.seatingArrangement !=null && this.seatingArrangement.length > 0;
  }

}
