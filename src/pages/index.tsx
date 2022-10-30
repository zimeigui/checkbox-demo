import Checkbox, {
    CheckboxChangeEvent,
    CheckboxValueType,
    CheckboxProps,
    CheckboxOptionType
} from "@/components/checkbox/";
import {useEffect, useState} from "react";
import styles from './index.less';
import {ColumnsTypeEnum} from '@/types';
import {Link } from 'umi';
import CheckboxAll from './_components/checkboxAll';
import {defaultCheckedList} from "@/constants";
import { getPlainOptionsValue } from '@/utils';
import { toFixed } from '@/utils/bigNumber';



export default function HomePage() {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    // 全选的样式控制
    const [indeterminate, setIndeterminate] = useState<boolean>(true);
    // 是否全选
    const [checkAll, setCheckAll] = useState<boolean>(false);


    // 列表数据
    const [plainOptions, setPlainOptions] = useState<CheckboxOptionType[]>(() => [
        {
            label: 'ddd',
            value: 'ddd',
            disabled: true,
        },
        {
            label: 'ggg',
            value: 'ggg',
            disabled: true,
        },
        {
            label: 'aaa',
            value: 'aaa',
            disabled: true,
        },
        {
            label: 'eee',
            value: 'eee',
        },
        {
            label: 'hhh',
            value: 'hhh',
        },
        {
            label: 'bbb',
            value: 'bbb',
        },
        {
            label: 'fff',
            value: 'fff',
        },
        {
            label: 'iii',
            value: 'iii',
        },
        {
            label: 'ccc',
            value: 'ccc',
        }
    ]);

    // columns 分栏数量
    const [columns, setColumns] = useState<number>(3);

    // 全选
    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? getPlainOptionsValue(plainOptions) : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    }

    // 单个选中操作
    const onChange = (checkedList: CheckboxValueType[]) => {
        setCheckedList(checkedList);
        setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
        setCheckAll(checkedList.length === plainOptions.length);
    };
    //  columns变化时，label width 处理
    useEffect(() => {
        if (columns) {
            const ratio =  toFixed(100 / columns, 2);
            setPlainOptions((prev) => {
                let res = [...prev];
                res.forEach((item) => {
                    item.style = {width: `${ratio}%`}
                })
                return res;
            })
        }
    }, [columns])


    return (
        <div className={styles.project}>
            <div className={styles['project-box']}>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>全选</Checkbox>
                <Checkbox.Group style={{display: 'flex', flexWrap: 'wrap'}} options={plainOptions} onChange={onChange}
                                value={checkedList}>
                </Checkbox.Group>
            </div>
            <CheckboxAll plainOptions={plainOptions} />
            <ColumnsComponent columns={columns} setColumns={setColumns} plainOptions={plainOptions}/>
            <Link to="/demo">查看其他Demo</Link>
        </div>
    );
}

const ColumnsComponent = (props: {
    columns: number,
    setColumns: Function,
    plainOptions: CheckboxProps[]
}) => {
    const {columns, setColumns, plainOptions} = props;

    const handlerClick = (type: ColumnsTypeEnum) => {
        if (type == ColumnsTypeEnum.Add) {
            // 不能大于 最大数据
            setColumns((prev: number) => {
                return prev < plainOptions.length ? prev + 1 : plainOptions.length;
            })
        } else {
            // 限制不能小于1 栏
            setColumns((prev: number) => {
                return prev > 1 ? prev - 1 : 1
            })
        }
    }
    return (
        <div className={styles.columnsComponent}>
            <span>columns: </span>
            <div className={styles['columnsComponent-button']} onClick={() => {
                handlerClick(ColumnsTypeEnum.Minus)
            }}>-
            </div>
            <div> {columns}</div>
            <div className={styles['columnsComponent-button']} onClick={() => {
                handlerClick(ColumnsTypeEnum.Add)
            }}>+
            </div>
        </div>
    )
}

