import { exampleFormDefinition } from './../../test.data';
import { Utilities } from './../../services/utility.service';
import { FormControlMap, ReactiveFormBuilderService } from './../../services/reactive-form-builder.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldType } from 'src/app/data/enums';
import { FormField } from '../../app.component';

export interface ApplicationFormDefinition {
  [key: string]: FormField[];
}

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit {

  constructor(
    private reactiveFormBuilderService: ReactiveFormBuilderService
  ) { }

  previousDefinition: string = "";

  @Input() activeSection: number = 0;
  private _applicationFormDefinition!: ApplicationFormDefinition;
  @Input()
  public get applicationFormDefinition(): ApplicationFormDefinition {
    return this._applicationFormDefinition;
  }
  public set applicationFormDefinition(value: ApplicationFormDefinition) {
    if (value && JSON.stringify(value) !== this.previousDefinition) {
      this._applicationFormDefinition = value;
      this.invalidateForm();
      this.previousDefinition = JSON.stringify(value);
    }
  }

  applicationForm!: FormGroup;
  formControlMap!: FormControlMap;
  FormFieldType = FormFieldType;

  sections: FormField[][] = [];

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.applicationForm?.getRawValue());
    }, 5000);
    this.invalidateForm();
  }

  invalidateForm() {
    const result = this.reactiveFormBuilderService.getReactiveFormFromFormObject(this.applicationFormDefinition)
    this.applicationForm = result.form;
    this.formControlMap = result.formControlMap;
    this.sections = Object.values(this.applicationFormDefinition);
  }
}
