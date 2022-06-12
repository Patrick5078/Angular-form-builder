import { FormField } from "../app.component";
import { FormFieldType } from "./enums";

export const formFieldOptions: FormField[] = [
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Tekst',
      config: {
        text: "",
        required: false,
        logicRules: [],
      },
    },
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.NumberInput,
      name: 'Input | Tal',
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.MoneyInput,
      name: 'Input | Beløb',
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.TextInput,
      name: 'Input | Filer',
      config: {
        text: "",
        required: false,
        logicRules: [],
      }
    },
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.OptionsInput,
      name: 'Input | Dropdown',
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
      hidden: false,
      formFieldType: FormFieldType.Header1,
      name: 'Overskrift | Stor',
      config: {
        text: ""
      }
    },
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.Header2,
      name: 'Overskrift | Medium',
      config: {
        text: ""
      }
    },
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.Header3,
      name: 'Overskrift | Lille',
      config: {
        text: ""
      }
    },
    {
      id: "0",
      hidden: false,
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
      hidden: false,
      formFieldType: FormFieldType.Divider,
      name: 'Divider',
      config: {}
    },
    {
      id: "0",
      hidden: false,
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
    {
      id: "0",
      hidden: false,
      formFieldType: FormFieldType.List,
      name: 'Liste',
      config: {
        text: "",
        formFieldsColumn1: [],
        formFieldsColumn2: [],
        logicRules: [],
        hasBorder: true,
      }
    },
  ];