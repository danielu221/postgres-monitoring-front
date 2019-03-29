import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementPageComponent } from './statement-page/statement-page.component';
import { CustomMaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [StatementPageComponent],
  imports: [
    CommonModule,CustomMaterialModule
  ]
})
export class StatementsModule { }
