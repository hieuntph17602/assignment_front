import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from 'src/app/services/phones/phones.service';

@Component({
  selector: 'app-phone-detail-clients',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  id: any;
  phone: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private PhonesService: PhonesService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.PhonesService.getPhone(this.id).subscribe(data => {
      this.phone = data;
    });
  }

}
