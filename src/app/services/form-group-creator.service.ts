import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormField } from '../app.component';
import { FormFieldType } from '../data/enums';

@Injectable({
  providedIn: 'root'
})
export class FormGroupCreatorService {

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  getFormGroup(item: FormField) {
    switch (item.formFieldType) {
      case FormFieldType.Header1:
      case FormFieldType.Header2:
      case FormFieldType.Header3:
      case FormFieldType.Paragraf:
        const group = this.formBuilder.group({
          text: [item.config.text]
        });
    
        group.get('text')!.valueChanges.subscribe(val => {
          item.config.text = val;
        });
    
        return group;

      case FormFieldType.TextInput:
      case FormFieldType.MoneyInput:
      case FormFieldType.NumberInput:
        const group2 = this.formBuilder.group({
          text: [item.config.text],
          required: [item.config.required]
        });
    
        group2.valueChanges.subscribe(val => {
          item.config.text = val.text;
          item.config.required = val.required;
        });
    
        return group2;

      case FormFieldType.OptionsInput:
        const group3 = this.formBuilder.group({
          text: [item.config.text],
          required: [item.config.required],
          options: [item.config.options],
        });

        group3.valueChanges.subscribe(val => {
          const options = val?.options?.split(',');
          item.config.options = options ? options : [];
          item.config.text = val.text;
          item.config.required = val.required;
        });

        return group3;

      case FormFieldType.Group:
        return this.formBuilder.group({});

      default: return null;
    }
  }
}
