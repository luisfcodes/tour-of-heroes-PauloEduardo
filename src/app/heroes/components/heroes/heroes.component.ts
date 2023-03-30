import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions']
  heroes: Hero[] = []

  constructor(
    private heroService: HeroService,
    private matDialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.heroService.getAll().subscribe(
      {
        next: res => this.heroes = res,
        error: err => err,
      }
    )
  }

  delete(hero: Hero): void{
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`
    }

    const dialogRef = this.matDialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.heroService.delete(hero).subscribe(() => {
          this.heroes = this.heroes.filter((h) => h !== hero)
        })
      }
    })


  }
}
