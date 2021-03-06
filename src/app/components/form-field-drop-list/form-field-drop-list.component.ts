import { FormFieldType } from 'src/app/data/enums';
import { FormConfigurationGroupCreatorService } from '../../services/form-configuration-group-creator.service';
import { FormField } from './../../app.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { formFieldOptions, formSpacingOptions, formTextOptions } from 'src/app/data/form-field-options';
import { ModalDataManager } from 'src/app/services/modal-manager';
import { Utilities } from 'src/app/services/utility.service';

@Component({
  selector: 'app-form-field-drop-list',
  templateUrl: './form-field-drop-list.component.html',
  styleUrls: ['./form-field-drop-list.component.scss']
})
export class FormFieldDropListComponent implements OnInit {

  constructor(
    private formGroupCreator: FormConfigurationGroupCreatorService,
  ) { }

  @Input() formConfigurationControlMap: any;
  @Input() targetArray!: Array<any>;
  @Input() dropListId!: string;

  @ViewChild("testName") someElement: any;

  FormFieldType = FormFieldType;

  editGroupModalIsOpen = false;
  groupFormFieldBeingEdited?: FormField = undefined;

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<FormField[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    let sourceArray: FormField[] = [];

    switch (event.previousContainer.data[0].name) {
      case formFieldOptions[0].name: sourceArray = formFieldOptions; break;
      case formSpacingOptions[0].name: sourceArray = formSpacingOptions; break;
      case formTextOptions[0].name: sourceArray = formTextOptions; break;
    }

    const item = Utilities.getDeepCopy(sourceArray[event.previousIndex]) as FormField;

    const id = Utilities.getNextId();
    item.id = id.toString();
    item.isExpanded = true;

    const formGroup = this.formGroupCreator.getConfigurationFormGroup(item);
    if (formGroup !== null) {
      this.formConfigurationControlMap[id] = formGroup;
    }
    copyArrayItem([item], this.targetArray, 0, event.currentIndex);
  }

  removeItem(index: number) {
    this.targetArray.splice(index, 1);
  }

  openEditFormGroupModal(item: FormField) {
    ModalDataManager.FormGroupModalItemBeingEdited = item;
    ModalDataManager.FormGroupModalIsOpen = true;
  }
}
