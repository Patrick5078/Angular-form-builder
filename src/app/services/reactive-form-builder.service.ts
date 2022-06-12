import { LogicOperator, LogicRule, LogicState } from './../data/models';
import { formTextOptions } from 'src/app/data/form-field-options';
import { FormFieldType } from 'src/app/data/enums';
import { FormField } from './../app.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ApplicationFormDefinition } from '../components/form-viewer/form-viewer.component';

export interface FormControlMap {
  [key: string]: {control: AbstractControl, formFieldInfo: FormField};
}

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formControlMap: FormControlMap = {};

  getReactiveFormFromFormObject(formObject: ApplicationFormDefinition): { form: FormGroup, formControlMap: FormControlMap } {
    this.formControlMap = {};
    const sections = Object.entries(formObject);
    const form = this.formBuilder.group({});
    for (let [key, value] of sections) {
      const group = this.buildFormGroup(value);
      form.addControl(key, group);
    }

    this.addValidatorsAndLogicRules();
    const map = this.formControlMap;
    return { form, formControlMap: map };
  }

  private buildFormGroup(formFieldObject: FormField[]): FormGroup {
    const formGroup = this.formBuilder.group({});
    const entries = Object.entries(formFieldObject);

    for (let [key, value] of entries) {
      this.tryAddControlToInputGroup(formGroup, value);
    }

    return formGroup;
  }

  private tryAddControlToInputGroup(group: FormGroup, formField: FormField) {
    const control = this.buildControl(formField);
    if (control !== null) {
      this.formControlMap[formField.id] = {control, formFieldInfo: formField};
      group.addControl(formField.id, control);
    }
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


  private addValidatorsAndLogicRules() {
    const formControls = Object.values(this.formControlMap);

    for (let formField of formControls) {
      if (!formField.formFieldInfo.config) {
        continue;
      }
      const fieldInfo = formField.formFieldInfo;
      const control = formField.control;
      const logicRules = formField.formFieldInfo?.config?.logicRules as LogicRule[] || [];

      const validators: Array<(control: AbstractControl) => ValidationErrors | null> = [];

      if (fieldInfo.config.required) {
        validators.push(Validators.required);
      }

      control.setValidators(validators);

      /// Applying logic rules
      for (let rule of logicRules) {
        const relatedField = this.formControlMap[rule.fieldId].control;
        relatedField.valueChanges.subscribe(formFieldValue => {
          const valueOfRelatedField = relatedField.value;
          if ((rule.logicOperator == LogicOperator.Equals && rule.value?.toString() === valueOfRelatedField?.toString()) ||
          (rule.logicOperator == LogicOperator.NotEquals && rule.value?.toString() !== valueOfRelatedField?.toString())) {
            if (rule.state == LogicState.Hidden) {
              control.setValue(null);
              control.disable({emitEvent: false});
              fieldInfo.hidden = true;
            } 
            else if (rule.state == LogicState.Disabled) {
              control.disable({emitEvent: false});
            }
            } else {
              control.enable({emitEvent: false});
              fieldInfo.hidden = false;
            }
          });
        }
    }
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

  private isControlType(type: FormFieldType) {

  }
}
