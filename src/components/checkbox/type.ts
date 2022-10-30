/**
 * @name: type
 * @author: mahuanhuan
 * @date: 2022-10-26 18:33
 * @description：type
 * @update: 2022-10-26 18:33
 */

import * as React from 'react';

export interface AbstractCheckboxProps<T> {
    className?: string;
    checked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: T) => void;
    value?: any;
    children?: React.ReactNode;
}


export interface CheckboxChangeEventTarget extends CheckboxProps {
    checked: boolean;
}

export interface CheckboxChangeEvent {
    target: CheckboxChangeEventTarget;
}


export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
    indeterminate?: boolean;
}

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
    label: React.ReactNode;
    value: CheckboxValueType;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
    isAll?: boolean;
    indeterminate?: boolean;
}

export interface AbstractCheckboxGroupProps {
    prefixCls?: string;
    className?: string;
    options?: Array<CheckboxOptionType | string | number>;
    disabled?: boolean;
    style?: React.CSSProperties;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
    value?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
    children?: React.ReactNode;
}

export interface CheckboxGroupContext {
    name?: string;
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    disabled?: boolean;
    registerValue: (val: string) => void;
    cancelValue: (val: string) => void;
}
