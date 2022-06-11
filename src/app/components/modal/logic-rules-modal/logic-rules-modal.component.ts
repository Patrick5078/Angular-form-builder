import { LogicOperator as LogicOperator, LogicRule, LogicState } from './../../../data/models';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ModalDataManager } from './../../../services/modal-manager';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic-rules-modal',
  templateUrl: './logic-rules-modal.component.html',
  styleUrls: ['./logic-rules-modal.component.scss']
})
export class LogicRulesModalComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ModalDataManager = ModalDataManager;
  @Input() fieldControls!: any;

  LogicState = LogicState;
  LogicOperator = LogicOperator;
  
  amountOfRules = 0;
  // Not using the array as the top level form because it isn't very well supported by angular
  logicRulesGroup = this.formBuilder.group({
    logicRules: this.formBuilder.array([]),
  });

  ngOnInit(): void {
  }

  createLogicRulesForm() {
    this.logicRulesArray.clear();
    for (let logicRule of ModalDataManager.LogicRulesModalItemBeingEdited?.config.logicRules) {
     this.addLogicGroup(this.amountOfRules, logicRule);
     this.amountOfRules++;
    }
  }

  addLogicGroup(index: number, logicRule?: LogicRule) {
    const group = this.formBuilder.group({
      state: [logicRule?.state],
      fieldId: [logicRule?.fieldId],
      value: [logicRule?.value],
      logicOperator: [logicRule?.logicOperator]
    });
    this.logicRulesArray.push(group);
  }

  get logicRulesArray() {
    return this.logicRulesGroup.get('logicRules') as FormArray;
  }

  getLogicRulesControls() {
    return this.logicRulesArray.controls as FormGroup[];
  }

  saveLogicRules() {
    const groups = this.getLogicRulesControls();
    for (let index = 0; index < groups.length; index++) {
      const group = groups[index];
      const logicRuleFormValue = group.getRawValue();
      ModalDataManager.LogicRulesModalItemBeingEdited!.config.logicRules[index] = logicRuleFormValue;
      }; 
    }
  }
  