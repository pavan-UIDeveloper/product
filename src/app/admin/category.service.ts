import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/category/category-save';

  saveCategory(model){
    console.log(model)
    localStorage.setItem('category',model);
    
    let response = this.http.post(this.url,model)
    return response
  }
}
