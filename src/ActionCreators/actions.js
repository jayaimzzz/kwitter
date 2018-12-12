import axios from "axios";
// import FormData from 'form-data';
import { API_DOMAIN } from "../Constants";

export const ADD_KWEET = "ADD_KWEET";
export const ADD_USER = "ADD_USER";
export const DELETE_KWEET = "DELETE_KWEET";
export const DELETE_USER = "DELETE_USER";
export const ADD_LIKE = "ADD_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const LOGIN_USER = "LOGIN_USER";
export const REFRESH_USERS = "REFRESH_USERS";
export const GET_MESSAGES = "GET_MESSAGES";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT = "LOGOUT";
export const USER_IMAGE = 'USER_IMAGE';

export const addKweet = ({ message, token }) => dispatch => {
  axios({
    method: "POST",
    url: API_DOMAIN + "/messages",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      charset: "utf-8"
    },
    data: { text: message }
  })
    .then(() => {
      dispatch(getMessages());
    })
    .catch(err => console.log(err));
};

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const deleteKweet = messageId => (dispatch, getState) => {
  let token = getState().loggedInUser.token;
  console.log(token);
  axios({
    method: "DELETE",
    url: API_DOMAIN + "/messages/" + messageId,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      charset: "utf-8"
    }
  })
    .then(responce => {
      if (responce) {
        dispatch({
          type: DELETE_KWEET,
          payload: messageId
        });
      } else {
        console.log("delete kweet error");
      }
    })
    .catch(err => console.log(err));
};

export const deleteUser = () => (dispatch, getState) => {
  axios
    .delete(API_DOMAIN + "/users", {
      headers: { Authorization: "Bearer " + getState().loggedInUser.token }
    })
    .then(res => {
      if (res.status == 200) {
        dispatch({
          type: LOGOUT
        });
      } else {
        console.log("delete user request unsuccessful");
      }
    })
    .catch(err => console.log(err));
};

export const updateUser = (token, userInfo) => dispatch => {
  console.log("token", token);
  console.log("userInfo", userInfo);
  axios
    .patch(API_DOMAIN + "/users", userInfo, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log("dispatching update user");
      dispatch({
        type: UPDATE_USER
      });
    })
    .catch(err => console.log(err));
};

export const addLike = (kweet, user) => {
  return {
    type: ADD_LIKE,
    payload: { kweet, user }
  };
};

export const deleteLike = kweet => {
  return {
    type: DELETE_LIKE,
    payload: kweet
  };
};

export function getUsers() {
  return function(dispatch) {
    axios
      .get(API_DOMAIN + "/users?limit=10000&offset=0")
      .then(response => {
        if (response.data.users) {
          dispatch({
            type: REFRESH_USERS,
            payload: response.data.users
          });
        } else {
          console.log(response.data.error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function logInUser({ username, password }) {
  return function(dispatch) {
    let userId = null;
    axios
      .post(API_DOMAIN + "/auth/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.success) {
          userId = response.data.id;
          dispatch({
            type: LOGIN_USER,
            payload: {
              id: response.data.id,
              token: response.data.token
            }
          });

          renderImage(dispatch, userId);

        } else {
          console.log("Access Denied");
        }
      }).catch(err => console.log(err));
  };

}

function renderImage(dispatch, userId) {
  axios.get(API_DOMAIN + `/users/${userId}/picture`).then(res => {
    if (res.status == 200 && res.headers["content-type"].includes('image')){
      dispatch({
        type: USER_IMAGE,
        payload: Math.floor(Math.random() * 10000) + 1
      })
    }}).catch((err) => null); 
}

export function logout({ token }) {
  return function(dispatch) {
    axios
      .get(API_DOMAIN + "/auth/logout", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      })
      .then(res =>
        res.data.success
          ? dispatch({
              type: LOGOUT
            })
          : console.log("logout failed")
      )
      .catch(err => console.log(err));
  };
}

export function getMessages(offset = 0) {
  return function(dispatch) {
    axios
      .get(API_DOMAIN + "/messages?limit=20&offset=" + offset)
      .then(res => {
        if (res.statusText === "OK") {
          dispatch({
            type: GET_MESSAGES,
            payload: {
              messages: res.data.messages
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const getUserMessages = id => dispatch => {
  axios
    .get(API_DOMAIN + "/users/" + id)
    .then(res => {
      if (res.data.messages) {
        dispatch({
          type: GET_MESSAGES,
          payload: {
            messages: res.data.messages
          }
        });
      } else {
        console.log(res);
      }
    })
    .catch(err => console.log(err));
};

export const uploadImage = ({ token, image }) => (dispatch, getState) => {
  let formData = new FormData();
  formData.append("picture", image);

  axios
    .put(API_DOMAIN + "/users/picture", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      if (res.status == 200) {
        renderImage(dispatch, getState().loggedInUser.id);
      }
    })
    .catch(err => console.log(err));
};
