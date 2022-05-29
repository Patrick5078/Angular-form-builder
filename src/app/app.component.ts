import { FormGroupCreatorService } from './services/form-group-creator.service';
import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder } from '@angular/forms';
import { exampleFormDefinition } from './test.data';
import { FormFieldType } from './data/enums';
import { formFieldOptions, formSpacingOptions, formTextOptions } from './data/form-field-options';
import { dropListIds } from './data/drop-list-ids';
import { ModalDataManager } from './services/modal-manager';

export interface FormField {
  id?: string;
  name?: string;
  config: any;
  formFieldType: FormFieldType;
  isExpanded?: boolean;
  valueOfFieldInFormViewer?: any;
  hidden: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public formGroupCreator: FormGroupCreatorService
  ) { }

  exportedForm = "";

  fieldControls = {} as any;
  FormFieldType = FormFieldType;
  
  sections: FormField[][] = [[]];
  sectionNames: string[] = ["Start"];
  activeSection = 0;
  dropListIds = dropListIds;
  
  formSpacingOptions = formSpacingOptions;
  formFieldOptions = formFieldOptions;
  formTextOptions = formTextOptions;

  ModalDataManager = ModalDataManager;

  ngOnInit() {
    this.importForm(exampleFormDefinition);
  }

  removeItem(index: number) {
    this.sections[this.activeSection].splice(index, 1);
  }
    
  addSection(name: string) {
    this.sections.push([]);
    this.sectionNames.push(name);
  }

  removeSection(index: number) {
    this.sections.splice(index, 1);
    this.sectionNames.splice(index, 1);
  }

  closeAll() {
    this.sections[this.activeSection].forEach(field => {
      field.isExpanded = false;
    })
  }

  exportForm() {
    const exportData = {} as any;
    for (let index = 0; index < this.sectionNames.length; index++) {
      const name = this.sectionNames[index];
      exportData[name] = this.sections[index];
    }

    this.exportedForm = JSON.stringify(exportData);
  }

  importForm(form: any) {
    this.sectionNames = [];
    this.sections = [];
    for (let [sectionName, section] of Object.entries(form)) {
      this.sectionNames.push(sectionName);
      this.sections.push(section as FormField[]);
      for (let field of section as FormField[]) {
        this.fieldControls[field.id!] = this.formGroupCreator.getFormGroup(field);
      }
    }
  }
}

