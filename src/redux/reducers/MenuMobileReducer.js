import { DRAWERCLOSE, DRAWEROPEN } from '../actions/MenuMobileActions';

const initialState = {
  aberto: false,
};

export default function MenuMobileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DRAWEROPEN:
      return {
        aberto: true,
      };
    case DRAWERCLOSE:
      return {
        aberto: false,
      };
    default: {
      return state;
    }
  }
}
