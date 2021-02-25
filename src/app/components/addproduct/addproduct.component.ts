import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productMed: FormGroup;

  constructor(private fb: FormBuilder, private fireDbService: FirebaseServiceService) { 
    this.productMed = this.fb.group({
      name: [''],
      elementName: [''],
      manufacturer:[''],
      shop:[''],
      unitPrice:[''],
      boxSize:['']
    })
    
  }


  ngOnInit(): void {
    
  }

  get productMedFormControl(){
    return this.productMed.controls;
  }

  saveProduct(){
    console.log(this.productMed.value)
    alert("form is submitted")
    this.fireDbService.add_product(this.productMed.value).then(
      res =>{
        console.log(res)
      }
    ).catch(err=>{
      console.log(err)
    })
  }

  

}
