/**
 * @name: Checkbox
 * @author: mahuanhuan
 * @date: 2022-10-26 18:29
 * @description：Checkbox  基础组件
 * @update: 2022-10-26 18:29
 */
import * as React from 'react';
import {CheckboxProps} from './type';
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
    // 获取 GroupContext 传递过来数据
    const checkboxGroup = useContext(GroupContext);
    // 设置是否被选中
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
    // 点击事件处理
    const handleChange = (e: any) => {
        if (disabled) {
            return;
        }
        setCurrentChecked(e.target.checked);
        if (checkboxGroup?.toggleOption) {
            checkboxGroup.toggleOption({label: children, value});
        }
        onChange && onChange(e);
    }

    useEffect(() => {
        if (checkboxGroup) {
            setCurrentChecked(checkboxGroup.value.includes(value));
        }
    }, [checkboxGroup?.value])

    useEffect(() => {
        setCurrentChecked(checked);
    }, [checked])


    return (
        <label style={style} className={`
        ${styles['checkbox-label']}
        ${indeterminate && styles['checkbox-wrapper-indeterminate']}
        ${mergedDisabled && styles['checkbox-wrapper-disabled']}
        `}>
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
