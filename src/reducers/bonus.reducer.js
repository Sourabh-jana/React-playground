import { BONUS_INCREMENT } from "../actions";

export default function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case BONUS_INCREMENT:
      return { points: state.points + 1 };

    default:
      return state;
  }
}
