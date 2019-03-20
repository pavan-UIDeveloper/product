import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  model= {
    category:''
}
modelArray = []

  constructor(private catService: CategoryService) { }

 


  ngOnInit() {
  }
 
  saveCategory(){
    // this.modelArray.push(this.model)
    // console.log(this.modelArray)
    // localStorage.setItem('categorycomp',JSON.stringify(this.modelArray))
    // console.log(JSON.parse(localStorage.getItem('categorycomp')))
     this.catService.saveCategory(this.model).subscribe(data=>{
        console.log(data);
   })
  }
}
