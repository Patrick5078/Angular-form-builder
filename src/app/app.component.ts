import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

export interface FormField {
  id?: string;
  name?: string;
  configuredOptions: any;
  formFieldType: FormFieldType;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
      configuredOptions: {
      }
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

    let fromArray: FormField[] = [];

    switch (event.previousContainer.data[0].name) {
      case this.formFieldOptions[0].name: fromArray = this.formFieldOptions; break;
      case this.formSpacingOptions[0].name: fromArray = this.formSpacingOptions; break;
      case this.formTextOptions[0].name: fromArray = this.formTextOptions; break;
    }

    const id = this.uuidv4();
    const item = fromArray[event.previousIndex];
    item.id = id;

    const control = new FormControl(item.configuredOptions.text);
    control.valueChanges.subscribe(val => {
      item.configuredOptions.text = val;
    });

    this.optionControls[id] = control;
    copyArrayItem(fromArray!, this.sections[this.activeSection], event.previousIndex, event.currentIndex)
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

