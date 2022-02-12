// import getLocalStorage from '../../helper/getLocalEstorage';
import { ALTERAR_STADO_DRAWER } from '../actions/MenuMobileActions';

const initialState = {
  aberto: false,
};

export default function MenuMobileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ALTERAR_STADO_DRAWER:
      // console.log('menuReducer', action);
      // console.log('localStorage', getLocalStorage('persist:authType'));
      return {
        aberto: true,
      };
    default: {
      return state;
    }
  }
}
