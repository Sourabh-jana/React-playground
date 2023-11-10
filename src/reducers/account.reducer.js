import {
  BALANCE_DECREMENT,
  BALANCE_INCREMENT,
  BALANCE_INCREMENT_BY_VALUE,
} from "../actions";

export default function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case BALANCE_INCREMENT:
      return { amount: state.amount + 1 };
    case BALANCE_DECREMENT:
      return { amount: state.amount - 1 };
    case BALANCE_INCREMENT_BY_VALUE:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}
