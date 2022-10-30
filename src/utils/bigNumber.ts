/**
 * @name: bigNumber
 * @author: mahuanhuan
 * @date: 2022-10-30 15:59
 * @description：bigNumber
 * @update: 2022-10-30 15:59
 */

import BigNumber from 'bignumber.js';
import {NumType} from '@/types';

BigNumber.config({ MODULO_MODE: BigNumber.ROUND_DOWN });

// BigNumber 初始化处理
export function toBigNumber(val: NumType) {
    return (val = BigNumber.isBigNumber(val) ? val : new BigNumber(val));
}


export function toFixed(
    bigNumber: NumType,
    decimalsToAppear: number = 2,
    isDown = true,
): string {
    return toBigNumber(bigNumber).toFixed(
        decimalsToAppear,
        isDown ? BigNumber.ROUND_DOWN : BigNumber.ROUND_UP,
    );
}
