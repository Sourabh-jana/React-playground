// action name constants
export const BALANCE_INCREMENT = "balance_increment";
export const BALANCE_DECREMENT = "balance_decrement";
export const BALANCE_INCREMENT_BY_VALUE = "balance_increment_by_value";

export const BONUS_INCREMENT = "bonus_increment";

export const GET_POST_PENDING = "getPostPending";
export const GET_POST_FULFILLED = "getPostFulfilled";
export const GET_POST_REJECTED = "getPostRejected";

// action creator
export function balance_increment() {
  return { type: BALANCE_INCREMENT };
}
export function balance_decrement() {
  return { type: BALANCE_DECREMENT };
}
export function balance_increment_by_value(value) {
  return { type: BALANCE_INCREMENT_BY_VALUE, payload: value };
}

export function bonus_increment() {
  return { type: BONUS_INCREMENT };
}

export function getPostFulfilled(posts) {
  return { type: GET_POST_FULFILLED, posts, pending: false };
}
export function getPostPending() {
  return { type: GET_POST_PENDING, pending: true };
}
export function getPostRejected(error) {
  return { type: GET_POST_REJECTED, error, pending: false };
}