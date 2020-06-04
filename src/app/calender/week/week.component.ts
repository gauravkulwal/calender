import { CreateService } from './../../shared/create.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  today = new Date();
year = this.cService.getYear(1986);
month = this.cService.month;
 ngYear: number = this.today.getFullYear()  ;
ngMonth: number = (this.today.getMonth() + 1);
emonth: number;
eyear: number;
edate: number;
ehour: number;
eminute: number;
message: string;
currentMonth: number ;
currentYear : number ;
numberOfDay: number;
dayFirst: number;
searchText: number;
dateTable = [];
eventData = [];
displayedColumns: string[] = ['Date', 'Time', 'Task', 'Delete'];
dataSource : any;


hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
minute = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
i = 1;
n = 1;
data = [];

data1 = [];
data2 = [];
data3 = [];
data4 = [];
data5 = [];
  constructor(public cService: CreateService) { }
  ngOnInit() {
    this.getCal();
    this.dataSource = new MatTableDataSource(this.eventData);

  }
  daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
firstDay(month , year){
  return new Date(year , month , 1).getDay();
}
getTable(day , numberOfDay){
  while (this.i < day){
    this.dateTable.push('-');
    this.i++;
  }
  while (this.n <= numberOfDay){
      this.dateTable.push(this.n);
      this.n++;

       }
       this.i = 1;
       this.n = 1;
  return this.dateTable;


          }



getCal(){
 const year = this.ngYear;
 const month = this.ngMonth;
 const numberOfDay = this.daysInMonth(month , year);
 const dayFirst = this.firstDay((month - 1) , year);
 this.data = this.getTable(dayFirst , numberOfDay);
 this.data1 = this.data.splice(0, 7);
 this.data2 = this.data.splice(0, 7);
this.data3 = this.data.splice(0, 7 );
this.data4 = this.data.splice(0, 7);
this.data5 = this.data.splice(0, 7);



}
event(data  ){
  this.edate = data;
  this.emonth = this.ngMonth;
  this.eyear = this.ngYear;


}
eventClose(){
  const obj = {date: this.edate , month: this.emonth , year: this.eyear,
  message: this.message,  hour: this.ehour , minute: this.eminute};
  this.eventData.push(obj);
  console.log(this.edate);
  console.log(this.message);
  console.log(obj);
  console.log(this.eventData);
  this.dataSource = new MatTableDataSource(this.eventData);
  this.ehour= 12;
  this.eminute= 10;
  this.message = '';
}
delete(i){
  // this.dataSource.splice(i ,1);
  this.eventData.splice(i , 1);
  this.dataSource = new MatTableDataSource(this.eventData);


}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue;
}

}
