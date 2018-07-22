import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnyProfileRoutingModule } from './any-profile-routing.module';
import { AnyProfileComponent } from './any-profile.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AnyProfileRoutingModule,
    SharedModule,
  ],
  declarations: [AnyProfileComponent]
})
export class AnyProfileModule { }
