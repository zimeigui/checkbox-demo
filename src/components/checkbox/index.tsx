/**
 * @name: index
 * @author: mahuanhuan
 * @date: 2022-10-26 18:28
 * @description：index
 * @update: 2022-10-26 18:28
 */
import type * as React from 'react';
import CheckboxComponent from './Checkbox';
import Group from './Group';
import {CheckboxProps} from './type'
export * from './type';


interface CompoundedComponent extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> {
    Group: typeof Group;
}


const Checkbox = CheckboxComponent as CompoundedComponent;
Checkbox.Group = Group;

export default Checkbox;
