import { post, get, deleteReq } from "../../api";

const API_URL = "https://62697df2aa65b5d23e85bf2d.mockapi.io/contacts/";

export const ACTION_FETCH_CONTACTS = "ACTION_FETCH_CONTACTS";
export function fetchContacts() {
  return function (dispatch) {
    get(API_URL).then((data) => {
      dispatch({ type: ACTION_FETCH_CONTACTS, payload: data });
    });
  };
}

export const ACTION_ADD_CONTACT = "ACTION_ADD_CONTACT";
export function add(payload) {
  return function (dispatch) {
    post(API_URL, {
      name: payload.name,
      surname: payload.surname,
      phone: payload.phone,
    }).then((date) => {
      dispatch({
        type: ACTION_ADD_CONTACT,
        payload: date,
      });
    });
  };
}

export const ACTION_REMOVE_CONTACT = "ACTION_REMOVE_CONTACT";
export function remove(payload) {
  return function (dispatch) {
    deleteReq(API_URL + payload).then((date) => {
      dispatch({
        type: ACTION_REMOVE_CONTACT,
        payload: date.id,
      });
    });
  };
}
