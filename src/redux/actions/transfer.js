import { ACTION_STRING } from './actionString';

export const detailTransfer = (data) => {
    return {
        type: ACTION_STRING.transferData,
        payload: {data},
    }
}