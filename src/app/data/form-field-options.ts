import { FormField } from "../app.component";
import { FormFieldType } from "./enums";

export const formFieldOptions: FormField[] = [
    {
      id: "0",
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tekst',
      hidden: false,
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
      hidden: false,
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
      hidden: false,
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
      hidden: false,
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
      hidden: false,
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
      hidden: false,
      config: {
        text: ""
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.Header2,
      name: 'Overskrift | Medium',
      hidden: false,
      config: {
        text: ""
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.Header3,
      name: 'Overskrift | Lille',
      hidden: false,
      config: {
        text: ""
      }
    },
    {
      id: "0",
      formFieldType: FormFieldType.Paragraf,
      name: 'Paragraf',
      hidden: false,
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
      hidden: false,
      config: {}
    },
    {
      id: "0",
      formFieldType: FormFieldType.Group,
      name: 'Gruppe',
      hidden: false,
      config: {
        text: "",
        formFieldsColumn1: [],
        formFieldsColumn2: [],
        logicRules: [],
        hasBorder: true,
      }
    },
  ];