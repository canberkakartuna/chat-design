import React from 'react';

import ChatHeader from './ChatHeader';
import AddChat from './AddChat';
import NoChat from './ChatList';

const ChatSection = ({ setAddChatStatus, addChatStatus }) => {

  return(
    <div>
      <ChatHeader setAddChatStatus={setAddChatStatus} addChatStatus={addChatStatus}/>
      {addChatStatus ? (
        <AddChat setAddChatStatus={setAddChatStatus} />
      ) : (
        <NoChat />
      )}
    </div>
  )
}

export default ChatSection;
