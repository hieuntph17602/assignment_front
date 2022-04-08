import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhonesService } from 'src/app/services/phones/phones.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  id: string | undefined;
  phone: any;
  phoneForm : FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private phonesService: PhonesService
  ) {
    this.phoneForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      status: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.phonesService.getPhone(this.id).subscribe(data => {
        this.phone = data;
      })
    } else {
      this.phone = {
        name: '',
        desc: '',
        image: '',
        price: '',
        status: 0
      }
    }
  }

  onSubmit(obj: any) {
    if (this.id) {
      this.phonesService.updatePhone(this.id, obj).subscribe(data => {
        this.router.navigate(['/admin/phones'])
      })
    } else {
      this.phonesService.createPhone(obj).subscribe(data => {
        this.router.navigate(['/admin/phones'])
      })
    }

  }

}
