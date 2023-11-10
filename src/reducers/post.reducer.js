import {
  GET_POST_FULFILLED,
  GET_POST_PENDING,
  GET_POST_REJECTED,
} from "../actions";

export default function postReducer(
  state = { posts: [], error: null, pending: null },
  action,
) {
  switch (action.type) {
    case GET_POST_PENDING:
      return { ...state, pending: true };
    case GET_POST_FULFILLED:
      return { ...state, posts: action.posts, pending: false };
    case GET_POST_REJECTED:
      return { ...state, error: action.error, pending: false };
    default:
      return state;
  }
}
