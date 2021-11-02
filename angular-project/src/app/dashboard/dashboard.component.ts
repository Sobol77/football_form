import { Component, OnInit } from '@angular/core';
import { Klub } from '../klub';
import { KlubService } from '../klub.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kluby: Klub[] = [];

  constructor(private klubService: KlubService) { }

  ngOnInit(): void {
    this.getKluby();
  }
  getKluby() {
    this.klubService.getKluby()
    .subscribe(kluby => this.kluby = kluby.slice(1, 5));
  }

}
