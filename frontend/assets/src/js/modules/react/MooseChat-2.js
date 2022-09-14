import React, { useEffect } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import axios from 'axios';
import ChatUserSearch from './components/chat/ChatUserSearch';
import DirectMessageSearch from './components/chat/DirectMessageSearch';
import ChatHeaderMoose from './components/chat/ChatHeaderMoose';
import ChatCardMoose from './components/chat/ChatCardMoose';

const MooseChat = (props) => {
  //COLLECTING CURRENT USER FROM GLOBAL
  // This is the current WP users email address
  const currentUser = mooseData.currentWPUserName;

  // COLLECTING DM USER FROM URL PARAM FROM THE LISTING INDEX PAGE
  const params = new URLSearchParams(window.location.search);
  const listingMember = params.get('username');

  // THIS IS IMPORTANT IN CASE THE LOGGED IN USER IS NOT CREATED IN CHAT ENGINE
  // Used under the useEffect axios catch to create the user on the fly
  const loggedInWPUser = {
    username: currentUser,
    secret: 'pass1234',
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
        console.log('User found and Chat started... [Moose Chat Plugin]');
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
      getOrCreateChat(creds, {
        is_direct_chat: true,
        usernames: [listingMember],
      });
    }

    return <DirectMessageSearch />;
  }

  return (
    <ChatEngine
      height="60vh"
      projectID="4ca132ec-0f15-4b96-9cb4-a62d31066802"
      userName={currentUser}
      userSecret="pass1234"
      renderNewChatForm={(creds) => createDirectChat(creds)} // Starts DMs on page load [left column]
      renderChatCard={(chat, index) => (
        <ChatCardMoose key={`${index}`} chat={chat} /> // Custom Chat Card Module
      )}
      renderChatHeader={(chat) => <ChatHeaderMoose />} //Custom Chat Header Module
      renderChatSettings={(chatAppState) => (
        <ChatUserSearch userLoggedIn={currentUser} creds={chatAppState} /> //Custom Chat Settings Moldule [right column]
      )}
    />
  );
};

export default MooseChat;
