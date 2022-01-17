import {Authors} from "../../utils/constants";

export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";
export const DELETE_MESSAGE = "CHATS::DELETE_MESSAGE";

export const addMessage = (chatId, message)=> ({
  type: ADD_MESSAGE ,
  payload: { chatId, message },
});
export const deleteMessage = (chatId, idToDelete)=> ({
  type: DELETE_MESSAGE,
  payload: { chatId, idToDelete },
});
let timeout;

export const addMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));
  if (message.author !== Authors.bot) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      const botMessage = {
        author: Authors.bot,
        text: "Hi! The droid listen and record...",
        id: ` mess-${Date.now()}`
      };
      dispatch(addMessage(chatId, botMessage));
    }, 1000);
  }
};
