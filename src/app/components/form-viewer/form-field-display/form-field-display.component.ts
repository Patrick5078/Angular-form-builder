import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { FormField } from './../../../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormFieldType } from 'src/app/data/enums';

@Component({
  selector: 'app-form-field-display',
  templateUrl: './form-field-display.component.html',
  styleUrls: ['./form-field-display.component.scss']
})
export class FormFieldDisplayComponent implements OnInit {

  constructor() { }

  @Input() formField!: FormField;
  @Input() control?: AbstractControl;

  FormFieldType = FormFieldType;

  ngOnInit(): void {
  }

  castToFormControl() {
  }
  
  get controlAsFormControl() {
    return this.control as FormControl;
  }

  get controlAsFormGroup() {
    return this.control as FormGroup;
  }
}
