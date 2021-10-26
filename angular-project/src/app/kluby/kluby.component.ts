import { Component, OnInit } from '@angular/core';
import { KLUBY } from '../mock-kluby';
import { Klub } from '../klub';
import { KlubService } from '../klub.service';

 



@Component({
  selector: 'app-kluby',
  templateUrl: './kluby.component.html',
  styleUrls: ['./kluby.component.scss']
})
export class KlubyComponent implements OnInit {
  
  kluby: Klub[] = [];
  selectedKlub?: Klub;
 
  klub: Klub = {
    id: 1,
    name: 'Real Madryt'
  
  };
  
  
  
  
   

     
  constructor(private klubService: KlubService) { }

  ngOnInit(): void {
    this.getKluby();
  }

  getKluby(): void{
    this.klubService.getKluby()
    .subscribe(x => {
      console.log(x);
      this.kluby = x;
    })
  }

  

  onSelect(klub: Klub): void {
     this.selectedKlub = klub;
  }
}
