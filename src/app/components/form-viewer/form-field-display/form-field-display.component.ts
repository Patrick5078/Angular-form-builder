import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { FormField } from './../../../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormFieldType } from 'src/app/data/enums';
import { FormControlMap } from 'src/app/services/reactive-form-builder.service';

@Component({
  selector: 'app-form-field-display',
  templateUrl: './form-field-display.component.html',
  styleUrls: ['./form-field-display.component.scss']
})
export class FormFieldDisplayComponent implements OnInit {

  constructor() { }

  @Input() formField!: FormField;
  @Input() controlMap!: FormControlMap;

  FormFieldType = FormFieldType;

  ngOnInit(): void {
  }

  castToFormControl() {
  }
  
  getControl(fieldId: string) {
    return this.controlMap[fieldId].control as FormControl;
  }
}
