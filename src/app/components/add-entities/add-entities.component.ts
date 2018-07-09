import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ENTITIES } from '../../mock-entities';
import { Entity } from '../../entity';

@Component({
  selector: 'app-add-entities',
  templateUrl: './add-entities.component.html',
  styleUrls: ['./add-entities.component.sass']
})
export class AddEntitiesComponent implements OnInit {

  entitiesList: Entity[] = [];
  searchText = '';
  shouldSort = false;
  ascending = false;

  constructor(
    public dialogRef: MatDialogRef<AddEntitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    for (const entity of ENTITIES) {
      const newEntry = Object.assign({}, entity);
      if (data && data.length) {
        for (const item of data) {
          if (item.id === entity.id) {
            newEntry['checked'] = true;
          }
        }
      }
      this.entitiesList.push(newEntry);
    }
  }

  ngOnInit() {
  }

  closeDialog(result: any = false): void {
    this.dialogRef.close(result);
  }

  connectEntities(): any {
    const result = this.entitiesList.filter((item: any) => item.checked);
    this.closeDialog(result);
  }

  toggleOrderFilter(): void {
    if (!this.shouldSort) {
      this.shouldSort = true;
      this.ascending = true;
    } else {
      this.shouldSort = false;
      this.ascending = false;
    }
  }

  toggleAscending(): void {
    this.ascending = !this.ascending;
  }

}
