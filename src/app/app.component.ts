import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {Bookinglist} from './Booking'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingApp';

  bookinglist: Bookinglist;

  constructor(private http: Http){}


  ngOnInit(){
    this.doGET();
  }

  //method to retrive api data
  doGET() {
    let url = `https://demo0126309.mockable.io/booking`;
        this.http.get(url).subscribe(
        (data: any) => {
          data =  JSON.parse(data['_body']);
          this.bookinglist = data;
        },
        err => console.log(err), // error
        () => this.insertValue()// complete  
    ); 
  }
  insertValue(){
  	console.log(" i m a",this.bookinglist.date)
  }
}
