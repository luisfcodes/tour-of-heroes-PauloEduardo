import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class HeroesModule { }
