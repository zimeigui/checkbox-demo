/**
 * @name: Group
 * @author: mahuanhuan
 * @date: 2022-10-26 18:28
 * @description：Group
 * @update: 2022-10-26 18:28
 */

import * as React from 'react';
import {CheckboxGroupProps, CheckboxValueType, CheckboxOptionType, CheckboxGroupContext} from './type';
import Checkbox from './Checkbox';
import {useState, useEffect} from "react";

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null);


const CheckboxGroupComponent: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxGroupProps> = (
    {
        value,
        onChange,
        options = [],
        className,
        style,
        children,
        disabled
    },
    ref,
) => {

    const [currentValue, setCurrentValue] = useState<CheckboxValueType[]>(
        value || [],
    );

    const [registeredValues, setRegisteredValues] = useState<CheckboxValueType[]>([]);

    useEffect(() => {
        if (value) {
            setCurrentValue(value || []);
        }
    }, [value]);

    const getOptions = () =>
        options.map(option => {
            if (typeof option === 'string' || typeof option === 'number') {
                return {
                    label: option,
                    value: option,
                };
            }
            return option;
        });

    // 取消选中
    const cancelValue = (val: string) => {
        setRegisteredValues(prevValues => prevValues.filter(v => v !== val));
    };
   // 选中
    const registerValue = (val: string) => {
        setRegisteredValues(prevValues => [...prevValues, val]);
    };
    // 点击时处理
    const toggleOption = (option: CheckboxOptionType) => {
        const optionIndex = currentValue.indexOf(option.value);
        const newValue = [...currentValue];
        if (optionIndex === -1) {
            newValue.push(option.value);
        } else {
            newValue.splice(optionIndex, 1);
        }

        const opts = getOptions();
        onChange?.(
            newValue
                .filter(val => registeredValues.includes(val))
                .sort((a, b) => {
                    const indexA = opts.findIndex(opt => opt.value === a);
                    const indexB = opts.findIndex(opt => opt.value === b);
                    return indexA - indexB;
                }),
        );
    };

    if (options && options.length > 0) {
        children = getOptions().map(option => (
            <Checkbox
                key={option.value.toString()}
                disabled={'disabled' in option ? option.disabled : disabled}
                value={option.value}
                checked={currentValue.includes(option.value)}
                onChange={option.onChange}
                className={`CheckboxGroup-item`}
                style={option.style}
                indeterminate={option.indeterminate}
            >
                {option.label}
            </Checkbox>
        ));
    }

    const context = {
        toggleOption,
        value: currentValue,
        disabled,
        registerValue,
        cancelValue,
    };

    return (
        <div style={style} ref={ref}>
            <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
        </div>
    )
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(CheckboxGroupComponent);

export default React.memo(CheckboxGroup);
