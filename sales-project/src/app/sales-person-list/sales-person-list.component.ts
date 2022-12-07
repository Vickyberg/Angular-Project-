import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Austin","Victor","olamide@gmail.com",6000),
    new SalesPerson("Susan","Opeyemi","opeyemi@gmail.com",5000),
    new SalesPerson("King", "Lebron","lebron@gmail.com",2000),
    new SalesPerson("Steph","Curry","curry@gmail.com",3000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
