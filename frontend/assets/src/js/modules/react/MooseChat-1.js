import React, { useState, useEffect } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import axios from 'axios';
import ChatUserSearch from './components/chat/ChatUserSearch';

const MooseChat = (props) => {
  const params = new URLSearchParams(window.location.search);
  console.log('URL UserName: ', params.get('username'));
  const listingMember = params.get('username');

  //COLLECTING CURRENT USER FROM GLOBAL
  const currentUser = mooseData.currentWPUserName; // This is the current WP users email address
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [loading, setLoading] = useState(true);

  const loggedInWPUser = {
    username: currentUser,
  };

  console.log('Logged in as: ', loggedInWPUser);

  useEffect(() => {
    axios
      .get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': '4ca132ec-0f15-4b96-9cb4-a62d31066802',
          'user-name': currentUser,
          'user-secret': 'pass1234',
        },
      })
      .then(() => {
        console.log('User found and Chat started...');
        setLoading(false);
      })
      .catch(() => {
        axios
          .post('https://api.chatengine.io/users', loggedInWPUser, {
            headers: {
              'private-key': '37d9cc64-75a2-41e0-94d9-61a0c9c29750',
            },
          })
          .then(() => {
            setLoading(false);
            window.location.reload();
          })
          .catch((error) =>
            console.log('Cannot Create Chat User in API', error)
          );
      });
  }, [currentUser]);

  function createDirectChat(creds) {
    if (listingMember) {
      getOrCreateChat(
        creds,
        { is_direct_chat: true, usernames: [listingMember] }
        // () => setUsername(listingMember)
      );
    }
  }

  return (
    <ChatEngine
      height="60vh"
      projectID="4ca132ec-0f15-4b96-9cb4-a62d31066802"
      userName={currentUser}
      userSecret="pass1234"
      renderNewChatForm={(creds) => createDirectChat(creds)} // This is for starting DM on page load
      renderChatSettings={(chatAppState) => <ChatUserSearch />}
    />
  );
};

export default MooseChat;
