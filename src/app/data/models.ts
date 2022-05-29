export interface LogicRule {
    state: LogicState,
    fieldId: string;
    value: string;
    logicOperator: LogicOperator
}

export enum LogicState {
    Disabled,
    Hidden
}

export enum LogicOperator {
    Equals,
    NotEquals,
}