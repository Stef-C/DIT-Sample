import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  mypicx="../../assets/mypic.JPG"
  myname="Stefany Caliao"
  mail="stefanycaliao22@gmail.com"
  banner = "../../assets/Images/webdev.gif"
  
  webdev="../../assets/Images/webdevv.png"

  progx="../../assets/Images/proglng.png"
  

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(){
    
  }
   
}
    
  

