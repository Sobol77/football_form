import { Component, OnInit } from '@angular/core';
import { KLUBY } from '../mock-kluby';
import { Klub } from '../klub';

 



@Component({
  selector: 'app-kluby',
  templateUrl: './kluby.component.html',
  styleUrls: ['./kluby.component.scss']
})
export class KlubyComponent implements OnInit {
  
  kluby = KLUBY;
 
  klub: Klub = {
    id: 1,
    name: 'Real Madryt'
  
  };
  
  
  
  
   

     
  constructor() { }

  ngOnInit(): void {
  }

}
