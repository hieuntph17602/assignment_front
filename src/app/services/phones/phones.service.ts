import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/products';


@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(apiUrl);
  }


  getPhone(id: undefined | string) {
    return this.http.get(`${apiUrl}/${id}`);
  }

  createPhone(obj: any) {
    return this.http.post(apiUrl, obj);
  }

  updatePhone(id: string | number, obj: any) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }

  deletePhone(id: string | number) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

}
