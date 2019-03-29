import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { CustomMaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [ActivityPageComponent],
  imports: [
    CommonModule,CustomMaterialModule
  ]
})
export class ActivityModule { }
