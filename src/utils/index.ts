/**
 * @name: index
 * @author: mahuanhuan
 * @date: 2022-10-30 15:19
 * @description：index
 * @update: 2022-10-30 15:19
 */
import {CheckboxOptionType, CheckboxValueType} from "@/components/checkbox";

// 获取plainOptions 的 value 值
export const getPlainOptionsValue = (arr: CheckboxOptionType[]) => {
    let res: CheckboxValueType[] = [];
    arr.forEach((item) => {
        res.push(item.value);
    })
    return res;
}
