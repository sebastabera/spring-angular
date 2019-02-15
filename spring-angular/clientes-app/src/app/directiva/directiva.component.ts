import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaCurso:string[] =['TypeScript', 'javascript', 'java', 'C#'];
  habilitar:boolean = true;

  setHabilitar(): void {
    this.habilitar = !this.habilitar
  }


}