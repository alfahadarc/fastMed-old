import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: any[];
  constructor(private fireDbService: FirebaseServiceService) { }

  ngOnInit(): void {

    this.fireDbService.getProduct().subscribe(
      (data)=>{
        
        this.Products = data.map((doc)=>{
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data() as {}
          }
        })

        console.log(this.Products)
      },
      (err) =>{
        console.log(err)
      }
    );

  }

}
