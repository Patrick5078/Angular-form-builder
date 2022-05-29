import { FormField } from './../app.component';

export class ModalDataManager {

  constructor() { }

  public static FormGroupModalIsOpen = false;
  public static FormGroupModalItemBeingEdited: FormField;

  public static LogicRulesModalIsOpen = false;
  public static LogicRulesModalItemBeingEdited: FormField;
}
