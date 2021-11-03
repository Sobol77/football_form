import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Klub } from '../klub';
import { KlubService } from '../klub.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-klub-detail',
  templateUrl: './klub-detail.component.html',
  styleUrls: ['./klub-detail.component.scss']
})
export class KlubDetailComponent implements OnInit {

  klub?: Klub;

  constructor(private klubService: KlubService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getKlub();
  }
  getKlub() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.klubService.getKlub(id)
      .subscribe(klub => this.klub = klub);
  }
  goBack(): void {
    this.location.back();
  }

}
