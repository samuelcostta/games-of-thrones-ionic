
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Continents } from '../continents';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) { }
 
  continents:Array<Continents> = [];

  ngOnInit() {
    this.list();
  }
list(): any {
  return this.activatedRoute.data.subscribe(({ continents })=>{
    this.continents = this.continents;
    console.log(continents);
  });
}
}
