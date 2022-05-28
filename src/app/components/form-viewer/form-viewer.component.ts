import { FormFieldType } from '../../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '../../app.component';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit {

  constructor() { }

  @Input() sections!: FormField[][];
  @Input() activeSection: number = 0;

  
  FormFieldType = FormFieldType;
  customPatterns = {
    'V': {pattern: new RegExp('-?')},
    '0': {pattern: new RegExp('[0-9]')}
  }
  
  ngOnInit(): void {

  }
}
