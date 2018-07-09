import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ENTITIES } from '../../mock-entities';
import { Entity } from '../../entity';

@Component({
  selector: 'app-add-entities',
  templateUrl: './add-entities.component.html',
  styleUrls: ['./add-entities.component.sass']
})
export class AddEntitiesComponent implements OnInit {

  options: FormGroup;
  entitiesList: Entity[] = ENTITIES;
  searchText: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddEntitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    fb: FormBuilder
  ) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  closeDialog(result: any = false): void {
    this.dialogRef.close(result);
  }

  connectEntities(): any {
    const result =  this.entitiesList.filter((item: any) => item.checked);
    this.closeDialog(result);
  }

}
