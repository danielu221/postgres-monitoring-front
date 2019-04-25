import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { CustomMaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [DocumentationPageComponent],
  imports: [
    CommonModule,CustomMaterialModule
  ]
})
export class DocumentationModule { }
