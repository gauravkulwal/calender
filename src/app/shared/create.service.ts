import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
year = []  ;
month = [1,2,3,4,5,6, 7,8,9,10,11,12];


  constructor() { }
getYear(year){
  while(year < 2035){
    this.year.push(year);
    year++;
}
  return this.year;
}


}
