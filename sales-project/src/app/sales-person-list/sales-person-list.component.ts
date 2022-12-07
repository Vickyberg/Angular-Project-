import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Austin","Victor","olamide@gmail.com",60000),
    new SalesPerson("Susan","Opeyemi","opeyemi@gmail.com",50000),
    new SalesPerson("King", "Lebron","lebron@gmail.com",20000),
    new SalesPerson("Steph","Curry","curry@gmail.com",70000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
