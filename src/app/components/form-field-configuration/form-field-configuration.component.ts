import { FormField } from './../../app.component';
import { ModalDataManager } from 'src/app/services/modal-manager';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormFieldType } from 'src/app/data/enums';

@Component({
  selector: 'app-form-field-configuration',
  templateUrl: './form-field-configuration.component.html',
  styleUrls: ['./form-field-configuration.component.scss']
})
export class FormFieldConfigurationComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  @Input() formField!: FormField;
  @Input() formGroup!: FormGroup;

  public FormFieldType = FormFieldType;

  ModalDataManager = ModalDataManager;

  ngOnInit(): void {
  }

}
