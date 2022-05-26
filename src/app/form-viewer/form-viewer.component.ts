import { FormFieldType } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '../app.component';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit {

  constructor() { }

  @Input() sections!: FormField[][];

  FormFieldType = FormFieldType;

  ngOnInit(): void {

  }
}
