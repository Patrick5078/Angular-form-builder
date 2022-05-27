import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface FormField {
  id?: string;
  name?: string;
  configuredOptions: any;
  formFieldType: FormFieldType;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public formBuilder: FormBuilder,
  ) {

  }

  formFieldOptions: FormField[] = [
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tekst',
      configuredOptions: {
        title: "",
        required: false,
        numbersOnly: false,
        validationRegex: ''
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tal',
      configuredOptions: {
        title: "",
        required: false,
        numbersOnly: false,
        validationRegex: ''
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Beløb',
      configuredOptions: {
        title: "",
        required: false,
        numbersOnly: false,
        validationRegex: ''
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Filer',
      configuredOptions: {
        title: "",
        required: false,
        numbersOnly: false,
        validationRegex: ''
      }
    }
  ];

  formTextOptions: FormField[] = [
    {
      formFieldType: FormFieldType.Header1,
      name: 'Overskrift | Stor',
      configuredOptions: {
        text: "Header1 test"
      }
    },
    {
      formFieldType: FormFieldType.Header2,
      name: 'Overskrift | Medium',
      configuredOptions: {
        text: "Header2 test"
      }
    },
    {
      formFieldType: FormFieldType.Header3,
      name: 'Overskrift | Lille',
      configuredOptions: {
        text: "Header3 test"
      }
    },
    {
      formFieldType: FormFieldType.Paragraf,
      name: 'Paragraf',
      configuredOptions: {
        text: ""
      }
    },
  ];

  formSpacingOptions: FormField[] = [
    {
      formFieldType: FormFieldType.Divider,
      name: 'Divider',
      configuredOptions: {}
    },
  ];

  optionControls = {} as any;
  FormFieldType = FormFieldType;

  sections: FormField[][] = [[]];
  sectionNames: string[] = [];
  activeSection = 0;

  onDrop(event: CdkDragDrop<FormField[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    let sourceArray: FormField[] = [];

    switch (event.previousContainer.data[0].name) {
      case this.formFieldOptions[0].name: sourceArray = this.formFieldOptions; break;
      case this.formSpacingOptions[0].name: sourceArray = this.formSpacingOptions; break;
      case this.formTextOptions[0].name: sourceArray = this.formTextOptions; break;
    }

    const item = this.getDeepCopy(sourceArray[event.previousIndex]) as FormField;

    const id = this.uuidv4();
    item.id = id;
    item.isExpanded = true;

    const formGroup = this.getFormGroup(item);
    if (formGroup !== null) {
      this.optionControls[id] = formGroup;
    }

    copyArrayItem([item], this.sections[this.activeSection], 0, event.currentIndex);
  }

  getFormGroup(item: FormField) {
    switch (item.formFieldType) {
      case FormFieldType.Header1:
      case FormFieldType.Header2:
      case FormFieldType.Header3:
      case FormFieldType.Paragraf:
        const group = this.formBuilder.group({
          text: [item.configuredOptions.text]
        });
    
        group.get('text')!.valueChanges.subscribe(val => {
          item.configuredOptions.text = val;
        });
    
        return group;

      case FormFieldType.TextInput:
      case FormFieldType.MoneyInput:
      case FormFieldType.NumberInput:
        const group2 = this.formBuilder.group({
          text: [item.configuredOptions.text],
          required: [item.configuredOptions.required]
        });
    
        group2.valueChanges.subscribe(val => {
          item.configuredOptions.text = val?.text;
          item.configuredOptions.required = val?.required;
        });
    
        return group2;

      default: return null;
    }
  }

  uuidv4() {
    return (([1e7] as unknown as number)+-1e3+-4e3+-8e3+-1e11).toString().replace(/[018]/g, (c: any) =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  removeItem(index: number) {
    this.sections[this.activeSection].splice(index, 1);
  }
    
  addSection(name: string) {
    this.sections.push([]);
    this.sectionNames.push(name);
  }

  removeSection(index: number) {
    this.sections.splice(index, 1);
    this.sectionNames.splice(index, 1);
  }

  getDeepCopy(item: any) {
    return JSON.parse(JSON.stringify(item));
  }
}

export enum FormFieldType {
  TextInput,
  NumberInput,
  MoneyInput,
  Header1,
  Header2,
  Header3,
  Paragraf,
  Divider,
}

