import { FormFieldType } from './../../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-field-configuration',
  templateUrl: './form-field-configuration.component.html',
  styleUrls: ['./form-field-configuration.component.scss']
})
export class FormFieldConfigurationComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  @Input() formFieldType!: FormFieldType;
  @Input() formGroup!: FormGroup;

  public FormFieldType = FormFieldType;

  ngOnInit(): void {
  }

}
