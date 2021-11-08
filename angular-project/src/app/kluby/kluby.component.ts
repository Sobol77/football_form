import { Component, OnInit } from '@angular/core';

import { Klub } from '../klub';
import { KlubService } from '../klub.service';
import { MessageService } from '../message.service';





@Component({
  selector: 'app-kluby',
  templateUrl: './kluby.component.html',
  styleUrls: ['./kluby.component.scss']
})
export class KlubyComponent implements OnInit {

  kluby: Klub[] = [];
  selectedKlub?: Klub;







  constructor(private klubService: KlubService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getKluby();
  }

  getKluby(): void {
    this.klubService.getKluby()
      .subscribe(kluby => this.kluby = kluby);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.klubService.addKlub({ name } as Klub)
      .subscribe(klub => {
        this.kluby.push(klub);
      });
    }



}
