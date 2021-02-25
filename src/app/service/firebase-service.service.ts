import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private db: AngularFirestore) { }

  add_product(record){
      return this.db.collection('Products').add(record)
  }
  getProduct(){
   return this.db.collection('Products').snapshotChanges()
  }
}
