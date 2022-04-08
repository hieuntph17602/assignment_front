import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/services/phones/phones.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones: any;
  constructor(private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    this.phoneService.getProducts().subscribe((data) => {
      this.phones = data;
    });
  }

  delete(id: string | number) {
    this.phoneService.deletePhone(id).subscribe(data => {
      this.onGetList();
    })
  }

  confirmDelete(id: string | number) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      this.delete(id);
    }
  }

  parentChangeStatus(newStatus: number, phone: any) {
    this.phoneService.updatePhone(
      phone.id,
      {
        ...phone,
        status: newStatus
      }).subscribe((data) => {
        this.onGetList();
      })
  }
}
