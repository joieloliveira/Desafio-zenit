import * as types from '../../types'

export function setUserDados(userDados:any) {
    return {
        type: types.SET_USER_DADOS,
        payload: userDados
    }
}