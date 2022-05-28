import { ModalDataManager } from './../../../services/modal-manager';
import { FormField } from './../../../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormFieldType } from 'src/app/data/enums';

@Component({
  selector: 'app-edit-input-group-modal',
  templateUrl: './edit-input-group-modal.component.html',
  styleUrls: ['./edit-input-group-modal.component.scss']
})
export class EditInputGroupModalComponent implements OnInit {

  constructor() { }

  @Input() formField?: FormField;
  @Input() optionControls = {};

  ModalDataManager = ModalDataManager;


  ngOnInit(): void {

  }
}
