/**
 * @name: Checkbox
 * @author: mahuanhuan
 * @date: 2022-10-26 18:29
 * @description：Checkbox
 * @update: 2022-10-26 18:29
 */
import * as React from 'react';
import classNames from 'classnames';
import {CheckboxProps, CheckboxChangeEvent} from './type';
import {GroupContext} from './Group';
import styles from './index.less';
import {useContext, useEffect, useRef, useState} from 'react';


const CheckboxComponent: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
    {
        className,
        children,
        indeterminate = false,
        style,
        disabled,
        onChange,
        checked,
        value
    },
    ref
) => {
    const checkboxGroup = useContext(GroupContext);

    const [currentChecked, setCurrentChecked] = useState<Boolean>();

    // 控制是否禁用
    const mergedDisabled = disabled || checkboxGroup?.disabled;

    // 对 value 值的管理
    const prevValue = useRef(value);
    useEffect(() => {
        checkboxGroup?.registerValue(value);
    }, [])
    useEffect(() => {
        if (value !== prevValue.current) {
            checkboxGroup?.cancelValue(prevValue.current);
            checkboxGroup?.registerValue(value);
            prevValue.current = value;
        }
        return () => checkboxGroup?.cancelValue(value);
    }, [value]);

    const handleChange = (e: any) => {
        if (disabled) {
            return;
        }
        setCurrentChecked(e.target.checked);
        if(checkboxGroup?.toggleOption) {
            checkboxGroup.toggleOption({label: children, value});
        }
        onChange && onChange(e);
    }

    useEffect(()=>{
        if(checkboxGroup) {
            setCurrentChecked(checkboxGroup.value.includes(value));
        }
    }, [checkboxGroup?.value])

    // const checkboxClass = classNames({
    //     // [`${prefixCls}-indeterminate`]: indeterminate,
    // });

    // label 样式控制
    // const classString = classNames(
    //     styles['checkbox-label'],
    //     {
    //         ['checkbox-wrapper-checked']: currentChecked,
    //         ['checkbox-wrapper-disabled']: mergedDisabled,
    //     },
    //     className,
    // );

    return (
        <label style={style}>
            <input
                type="checkbox"
                onChange={handleChange}
                disabled={mergedDisabled}
                checked={!!currentChecked}
                ref={ref}
            />
            {children !== undefined && <span>{children}</span>}
        </label>
    )
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(CheckboxComponent);

export default Checkbox;
