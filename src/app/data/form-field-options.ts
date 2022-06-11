import { FormField } from "../app.component";
import { FormFieldType } from "./enums";

export const formFieldOptions: FormField[] = [
    {
      id: "0",
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tekst',
      valueOfFieldInFormViewer: null,
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.NumberInput,
      name: 'Input | Tal',
      valueOfFieldInFormViewer: null,
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.MoneyInput,
      name: 'Input | Beløb',
      valueOfFieldInFormViewer: null,
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Filer',
      valueOfFieldInFormViewer: null,
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.OptionsInput,
      name: 'Input | Dropdown',
      valueOfFieldInFormViewer: null,
      config: {
        text: "",
        required: false,
        options: null,
        logicRules: [],
      }
    },
  ];

  export const formTextOptions: FormField[] = [
    {
      id: "0",
      formFieldType: FormFieldType.Header1,
      name: 'Overskrift | Stor',
      config: {
        text: ""
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.Header2,
      name: 'Overskrift | Medium',
      config: {
        text: ""
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.Header3,
      name: 'Overskrift | Lille',
      config: {
        text: ""
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.Paragraf,
      name: 'Paragraf',
      config: {
        text: ""
      }
    },
  ];

  export const formSpacingOptions: FormField[] = [
    {
      id: "0",
      formFieldType: FormFieldType.Divider,
      name: 'Divider',
      config: {}
    },
    {
      id: "0",
      formFieldType: FormFieldType.Group,
      name: 'Gruppe',
      config: {
        text: "",
        formFieldsColumn1: [],
        formFieldsColumn2: [],
        logicRules: [],
        hasBorder: true,
      }
    },
  ];