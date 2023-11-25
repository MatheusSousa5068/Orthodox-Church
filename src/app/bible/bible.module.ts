import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleComponent } from './bible/bible.component';



@NgModule({
  declarations: [
    BibleComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    BibleComponent
  ]
})
export class BibleModule { }
