import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEntitiesComponent } from '../add-entities/add-entities.component';
import { Entity } from '../../entity';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  entitiesList: Entity[] = [];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(e): void {
    e.stopPropagation();
    const dialogRef = this.dialog.open(AddEntitiesComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      maxHeight: '100vh',
      data: this.entitiesList
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.entitiesList = result;
    });
  }

}
