/**
 * @name: checkbox
 * @author: mahuanhuan
 * @date: 2022-10-30 14:41
 * @description：checkbox
 * @update: 2022-10-30 14:41
 */

import {useState} from "react";
import {CheckboxValueType} from "@/components/checkbox";
import {defaultCheckedList} from '@/constants';

export default function useCheckboxModel() {
    // 选中数据
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    return {
        checkedList,
        setCheckedList
    }
}
