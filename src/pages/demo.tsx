/**
 * @name: demo
 * @author: mahuanhuan
 * @date: 2022-10-27 16:19
 * @description：demo
 * @update: 2022-10-27 16:19
 */
import Checkbox, {
    CheckboxChangeEvent,
    CheckboxValueType,
} from "@/components/checkbox/";

import {history} from 'umi';


const CheckboxDemo = () => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </div>
    )
}

const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];

const CheckboxGupDemo = () => {
    return (
      <div style={{display: "flex"}}>
          <Checkbox.Group options={plainOptions} value={['Apple']} onChange={onChange} />
          <br />
          <br />
          <Checkbox.Group options={options} value={['Pear']} onChange={onChange} />
          <br />
          <br />
          <Checkbox.Group
              options={optionsWithDisabled}
              disabled
              value={['Apple']}
              onChange={onChange}
          />
      </div>
    )
}


const DemoPage = () => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div style={{width: '400px', margin: '100px auto'}}>
            <div style={{cursor: 'pointer', width:'50px'}} onClick={history.back}>《返回</div>
            demo1：
            <CheckboxDemo />
            demo2：
            <CheckboxGupDemo/>
        </div>
    )
}

export default DemoPage;
