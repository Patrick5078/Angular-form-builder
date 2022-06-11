import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicInputModel, DynamicRadioGroupModel, DynamicCheckboxModel, DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-view-dynamic-form',
  templateUrl: './view-dynamic-form.component.html',
  styleUrls: ['./view-dynamic-form.component.scss']
})
export class ViewDynamicFormComponent implements OnInit {

  constructor(private formService: DynamicFormService) { }

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup = this.formService.createFormGroup(this.formModel);

  ngOnInit(): void {
  }

}

export const MY_FORM_MODEL: DynamicFormModel = [

  new DynamicInputModel({
      id: "sampleInput",
      label: "Sample Input",
      maxLength: 42,
      placeholder: "Sample input"
  }),

  new DynamicRadioGroupModel<string>({
      id: "sampleRadioGroup",
      label: "Sample Radio Group",
      options: [
          {label: "Option 1", value: "option-1"},
          {label: "Option 2", value: "option-2"},
          {label: "Option 3", value: "option-3"}
      ],
      value: "option-3"
  }),

  new DynamicCheckboxModel({
      id: "sampleCheckbox",
      label: "I do agree"
  })
];