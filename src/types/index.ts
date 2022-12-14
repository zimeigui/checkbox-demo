/**
 * @name: index
 * @author: mahuanhuan
 * @date: 2022-10-26 18:22
 * @description：index
 * @update: 2022-10-26 18:22
 */

import BigNumber from 'bignumber.js';

// 订单类型 买|卖
export enum ColumnsTypeEnum {
    Add = 1,
    Minus,
}

export type NumType = string | number | BigNumber;
