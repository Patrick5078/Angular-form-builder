import { formTextOptions } from 'src/app/data/form-field-options';
import { FormFieldType } from 'src/app/data/enums';
import { FormField } from './../app.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

interface FormFieldObject {
  [key: string]: FormField;
}

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  getReactiveFormFromFormObject(formObject: object) {
    const sections = Object.entries(formObject);
    const form = this.formBuilder.group({});
    for (let [key, value] of sections) {
      const group = this.buildFormGroup(value);
      form.addControl(key, group);
    }

    return form;
  }

  private buildFormGroup(formFieldObject: FormFieldObject, formGroup?: FormGroup): FormGroup {
    if (!formGroup) {
      formGroup = this.formBuilder.group({});
    }

    const entries = Object.entries(formFieldObject);

    for (let [key, value] of entries) {
      this.tryAddControlToInputGroup(formGroup, value);
    }

    return formGroup;
  }

  private buildControl(value: FormField): AbstractControl | null {
    if (this.IsNonInputType(value.formFieldType)) {
      return null;
    }

    if (this.isArrayType(value.formFieldType)) {
      // TODO Implement arrays
    }

    if (this.isColumnType(value.formFieldType)) {
      const group = this.formBuilder.group({});
      value.config.formFieldsColumn1.forEach((value: FormField) => {
        this.tryAddControlToInputGroup(group, value);
      });

      value.config.formFieldsColumn2.forEach((value: FormField) => {
        this.tryAddControlToInputGroup(group, value);
      });

      return group;
    }

    return this.formBuilder.control(null);
  }

  private tryAddControlToInputGroup(group: FormGroup, value: FormField) {
    const control = this.buildControl(value);
    if (control !== null) {
      this.addValidators(control);
      group.addControl(value.config.text ? value.config.text : "Placeholder", control);
    }
  }

  private addValidators(control: AbstractControl) {
    
  }

  private isArrayType(type: FormFieldType) {
    return false;
  }

  private isColumnType(type: FormFieldType) {
    return type === FormFieldType.Group;
  }

  private IsNonInputType(type: FormFieldType) {
    const nonInputTypes = formTextOptions.map(e => e.formFieldType);
    nonInputTypes.push(FormFieldType.Divider);

    return nonInputTypes.includes(type);
  }

  // private isControlType(type: FormFieldType) {

  // }
}
