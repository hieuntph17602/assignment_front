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
  phoneForm: FormGroup;
  imageBase64: any;

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

  onSubmit(obj: {
    name: string,
    desc: string,
    price: number,
    status: number
  }) {
    if (!this.imageBase64) {
      this.imageBase64 = this.phone.image;
    }
    const submitData = {
      ...obj,
      image: this.imageBase64
    };

    if (this.id) {
      this.phonesService.updatePhone(this.id, submitData).subscribe(data => {
        this.router.navigate(['/admin/phones'])
      })
    } else {
      this.phonesService.createPhone(submitData).subscribe(data => {
        this.router.navigate(['/admin/phones'])
      })
    }
  }

  resultString(e: any) {
    if (e && e.target && typeof e.target.result === 'string') {
      return e.target.result;
    }
    return '';
  }

  changeImage(event: any) {
    const arrayImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    const file = event.target.files[0];

    if (file.size > 500000) {
      return alert('Kích thước file quá lớn!');
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert('File không đúng định dạng!');
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
      console.log(this.imageBase64);

      const image = new Image();
      image.src = this.resultString(e);
    }

    reader.readAsDataURL(file);
  }

}
