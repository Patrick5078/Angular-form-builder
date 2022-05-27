import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { exampleFormDefinition } from './test.data';

export interface FormField {
  id?: string;
  name?: string;
  config: any;
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

  exportedForm = "";

  formFieldOptions: FormField[] = [
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tekst',
      config: {
        title: "",
        required: false,
        numbersOnly: false,
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tal',
      config: {
        title: "",
        required: false,
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Beløb',
      config: {
        title: "",
        required: false,
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Filer',
      config: {
        title: "",
        required: false,
      }
    }
  ];

  formTextOptions: FormField[] = [
    {
      formFieldType: FormFieldType.Header1,
      name: 'Overskrift | Stor',
      config: {
        text: "Header1 test"
      }
    },
    {
      formFieldType: FormFieldType.Header2,
      name: 'Overskrift | Medium',
      config: {
        text: "Header2 test"
      }
    },
    {
      formFieldType: FormFieldType.Header3,
      name: 'Overskrift | Lille',
      config: {
        text: "Header3 test"
      }
    },
    {
      formFieldType: FormFieldType.Paragraf,
      name: 'Paragraf',
      config: {
        text: ""
      }
    },
  ];

  formSpacingOptions: FormField[] = [
    {
      formFieldType: FormFieldType.Divider,
      name: 'Divider',
      config: {}
    },
  ];

  optionControls = {} as any;
  FormFieldType = FormFieldType;

  sections: FormField[][] = [[]];
  sectionNames: string[] = ["Start"];
  activeSection = 0;

  ngOnInit() {
    this.importForm(exampleFormDefinition);
  }

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
          text: [item.config.text]
        });
    
        group.get('text')!.valueChanges.subscribe(val => {
          item.config.text = val;
        });
    
        return group;

      case FormFieldType.TextInput:
      case FormFieldType.MoneyInput:
      case FormFieldType.NumberInput:
        const group2 = this.formBuilder.group({
          text: [item.config.text],
          required: [item.config.required]
        });
    
        group2.valueChanges.subscribe(val => {
          item.config.text = val?.text;
          item.config.required = val?.required;
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

  exportForm() {
    const exportData = {} as any;
    for (let index = 0; index < this.sectionNames.length; index++) {
      const name = this.sectionNames[index];
      exportData[name] = this.sections[index];
    }

    this.exportedForm = JSON.stringify(exportData);
  }

  importForm(form: any) {
    this.sectionNames = [];
    this.sections = [];
    for (let [sectionName, section] of Object.entries(form)) {
      this.sectionNames.push(sectionName);
      this.sections.push(section as FormField[]);
      for (let field of section as FormField[]) {
        this.optionControls[field.id!] = this.getFormGroup(field);
      }
    }
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

