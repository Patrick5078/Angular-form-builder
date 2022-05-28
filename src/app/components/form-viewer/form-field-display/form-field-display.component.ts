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

  FormFieldType = FormFieldType;

  ngOnInit(): void {
  }

}
