import { Component, Input, OnInit } from '@angular/core';
import { Klub } from '../klub';


@Component({
  selector: 'app-klub-detail',
  templateUrl: './klub-detail.component.html',
  styleUrls: ['./klub-detail.component.scss']
})
export class KlubDetailComponent implements OnInit {

  @Input() klub? : Klub;

  constructor() { }

  ngOnInit(): void {
  }

}
