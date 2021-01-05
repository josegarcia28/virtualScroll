import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']

})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) muestraP: CdkVirtualScrollViewport;
  personas= Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  irFinal(){
    this.muestraP.scrollToIndex( this.personas.length);
  }
  irInicio(){
    this.muestraP.scrollToIndex( 0 );
  }
  irCentro(){
    this.muestraP.scrollToIndex( this.personas.length / 2 );
  }
}
