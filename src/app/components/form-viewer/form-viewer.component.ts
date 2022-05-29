import { Component, Input, OnInit } from '@angular/core';
import { FormFieldType } from 'src/app/data/enums';
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

  @Input() fieldControls: any = {};
  
  FormFieldType = FormFieldType;
  ngOnInit(): void {

  }
}
