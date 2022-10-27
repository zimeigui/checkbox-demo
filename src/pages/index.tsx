import Checkbox, {CheckboxChangeEvent, CheckboxValueType} from "@/components/checkbox/";
import {useState} from "react";

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default function HomePage() {
    const [indeterminate, setIndeterminate] = useState<boolean>(true);
    const [checkAll, setCheckAll] = useState<boolean>(false);
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    // 全选
    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    }

   // 单个选中操作
    const onChange = (checkedList: CheckboxValueType[]) => {
        console.log('checked = ', checkedList);
        setCheckedList(checkedList);
    };
    return (
        <div>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>全选</Checkbox>
            <Checkbox.Group options={plainOptions} onChange={onChange} value={checkedList} />
        </div>
    );
}
