import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/model/guest.model';
import { Table } from '../../model/tables.model';
// import { SeatingArrangement } from '../../model/SeatingArrangement.model';
import { SeatingService } from '../../service/SeatingService';

@Component({
  selector: 'app-seating-arrangement',
  templateUrl: './seating-arrangement.component.html',
  styleUrls: ['./seating-arrangement.component.css']
})

export class SeatingArrangementComponent implements OnInit {

  public tablesList: Table[] = [];
  // public SeatingArrangement: SeatingArrangement[] = [];
  // constructor(private SeatingService: SeatingService,) { }
  SeatingArrangemant: Table[];

  ngOnInit(): void {
    //  this.SeatingService.getSeatingArrangemant().subscribe((data) =>{this.SeatingArrangemant=data;});
    // this.SeatingService.getTablesList().subscribe((data) => { this.tablesList = data; });
    // this.tablesList.forEach(table => {
    //   // this.SeatingArrangement.push(Table = table, GuestsList =)
    // });
    this.setCircle()
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

}
