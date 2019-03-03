import { TRANSMIT } from "./action-types";
export function reducer(state = 1, action) {
  switch (action.type) {
    case TRANSMIT:
      return action.data
    default:
      return state
  }
}