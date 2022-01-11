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
