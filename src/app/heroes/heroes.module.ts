import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
