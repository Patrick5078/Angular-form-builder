import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/app.component';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  constructor() { }

  @Input() formField!: FormField;
  @Input() controlArray?: FormArray;

  ngOnInit(): void {
  }

  castToFormGroup(control: AbstractControl) {
    return control as FormGroup;
  }
}
