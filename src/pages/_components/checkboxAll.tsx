/**
 * @name: checkboxAll
 * @author: mahuanhuan
 * @date: 2022-10-30 14:34
 * @description：checkboxAll
 * @update: 2022-10-30 14:34
 */

import styles from "@/pages/index.less";
import Checkbox, {CheckboxOptionType, CheckboxValueType} from "@/components/checkbox";
import {getPlainOptionsValue} from '@/utils';
import {useMemo, useState} from 'react';
import {defaultCheckedList} from "@/constants";

const CheckboxAll = (props: {
    plainOptions: CheckboxOptionType[];
}) => {

    const {plainOptions} = props;
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const [isAll, setIsAll] = useState<boolean>(false);
    // 全选的样式控制
    const [indeterminate, setIndeterminate] = useState<boolean>(true);

    const plainOptionsAll = useMemo(() => {
        return [
            {
                label: '全选',
                value: '全选',
                isAll: true,
                style: plainOptions[0]?.style,
                indeterminate
            },
            ...plainOptions
        ]
    }, [plainOptions, indeterminate])


    const onChange = (checkedList: CheckboxValueType[]) => {
        if (checkedList.includes('全选') && !isAll) {
            setIsAll(true);
            setCheckedList(getPlainOptionsValue(plainOptionsAll));
            setIndeterminate(false);
        } else if (checkedList.includes('全选') && isAll) {
            setIsAll(false);
            setCheckedList(checkedList.filter((item)=> item !='全选'))
            setIndeterminate(true);
        } else if (isAll && checkedList.length == plainOptions.length) {
            // 取消全选
            setIsAll(false);
            setIndeterminate(false);
            setCheckedList([]);
        } else {
            setIndeterminate(true);
            setCheckedList(checkedList);
        }
    };


    return (
        <div className={styles['project-box']}>
            <Checkbox.Group style={{display: 'flex', flexWrap: 'wrap'}} options={plainOptionsAll} onChange={onChange}
                            value={checkedList}>
            </Checkbox.Group>
        </div>
    )
}

export default CheckboxAll
