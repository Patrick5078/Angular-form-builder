import { FormField } from "../app.component";
import { FormFieldType } from "./enums";

export const formFieldOptions: FormField[] = [
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tekst',
      config: {
        text: "",
        required: false,
      }
    },
    {
      formFieldType: FormFieldType.NumberInput,
      name: 'Input | Tal',
      config: {
        text: "",
        required: false,
      }
    },
    {
      formFieldType: FormFieldType.MoneyInput,
      name: 'Input | Beløb',
      config: {
        text: "",
        required: false,
      }
    },
    {
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Filer',
      config: {
        text: "",
        required: false,
      }
    },
    {
      formFieldType: FormFieldType.OptionsInput,
      name: 'Input | Dropdown',
      config: {
        text: "",
        required: false,
        options: null,
      }
    },
  ];

  export const formTextOptions: FormField[] = [
    {
      formFieldType: FormFieldType.Header1,
      name: 'Overskrift | Stor',
      config: {
        text: ""
      }
    },
    {
      formFieldType: FormFieldType.Header2,
      name: 'Overskrift | Medium',
      config: {
        text: ""
      }
    },
    {
      formFieldType: FormFieldType.Header3,
      name: 'Overskrift | Lille',
      config: {
        text: ""
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

  export const formSpacingOptions: FormField[] = [
    {
      formFieldType: FormFieldType.Divider,
      name: 'Divider',
      config: {}
    },
    {
      formFieldType: FormFieldType.Group,
      name: 'Gruppe',
      config: {
        text: "",
        formFieldsColumn1: [],
        formFieldsColumn2: []
      }
    },
  ];