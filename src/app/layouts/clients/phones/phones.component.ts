
import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/services/phones/phones.service';

@Component({
  selector: 'app-phones-clients',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones: any;
  // result: any;
  constructor(private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    this.phoneService.getProducts().subscribe((data) => {
      this.phones = Object.values(data).filter(element => {
        return element.status == 1
      });
      console.log(this.phones);
      
    });
  }



}
