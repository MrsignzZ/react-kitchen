import { TRANSMIT } from "./action-types";

export const transmit = (data) => {
  return { type: TRANSMIT, data: data }
}