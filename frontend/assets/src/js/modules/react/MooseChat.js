import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import axios from 'axios';
import ChatUserSearch from './components/chat/ChatUserSearch';
import DirectMessageSearch from './components/chat/DirectMessageSearch';
import ChatHeaderMoose from './components/chat/ChatHeaderMoose';
import ChatCardMoose from './components/chat/ChatCardMoose';
import ChatHeaderMooseMobile from '../react/components/chat/ChatHeaderMooseMobile';
import NewChatFormMoose from './components/chat/ChatList/NewChatFormMoose';

const MooseChat = (props) => {
  //COLLECTING CURRENT USER FROM GLOBAL
  // This is the current WP users email address
  const currentUser = selflistData.currentWPUserEmail;
  const userSecret = 'pass1234';
  const userFirstName = selflistData.currentWPUserFirstName;
  const userLastName = selflistData.currentWPUserLastName;

  //COLLECTING SCREEN WIDTH
  const [screenWidth, setScreenWidth] = useState('');

  // COLLECTING DM USER FROM URL PARAM FROM THE LISTING INDEX PAGE
  const params = new URLSearchParams(window.location.search);
  const listingMember = params.get('username');

  // THIS IS IMPORTANT IN CASE THE LOGGED IN USER IS NOT CREATED IN CHAT ENGINE
  // Used under the useEffect axios catch to create the user on the fly
  const loggedInWPUser = {
    username: currentUser,
    secret: userSecret,
    first_name: userFirstName,
    last_name: userLastName,
  };

  console.log('Logged in as: ', loggedInWPUser);

  useEffect(() => {
    let winWidth = $(window).width();
    setScreenWidth(winWidth);

    if (currentUser) {
      axios
        .get('https://api.chatengine.io/users/me', {
          headers: {
            'project-id': '4ca132ec-0f15-4b96-9cb4-a62d31066802',
            'user-name': currentUser,
            'user-secret': userSecret,
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
    }
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

  function renderChatForm(creds) {
    if (listingMember) {
      getOrCreateChat(creds, {
        is_direct_chat: true,
        usernames: [listingMember],
      });
    }
    return <NewChatFormMoose creds={creds} />;
  }

  const credentials = {
    userName: currentUser,
    userSecret: 'pass1234',
    projectID: '4ca132ec-0f15-4b96-9cb4-a62d31066802',
  };

  if (screenWidth > 575) {
    return (
      <ChatEngine
        height="70vh"
        projectID="4ca132ec-0f15-4b96-9cb4-a62d31066802"
        userName={currentUser}
        userSecret={userSecret}
        renderChatCard={(chat, index) => (
          <ChatCardMoose key={`${index}`} chat={chat} /> // Localized and works!
        )}
        renderChatHeader={(chat) => (
          <ChatHeaderMooseMobile
            loggedInUser={currentUser}
            creds={credentials}
          />
        )}
        renderNewChatForm={(creds) => renderChatForm(creds)} // This is for DM from the Chat page
        renderChatSettings={(chatAppState) => (
          <ChatUserSearch userLoggedIn={currentUser} creds={chatAppState} />
        )}
      />
    );
  } else {
    return (
      <ChatEngine
        height="100vh"
        projectID="4ca132ec-0f15-4b96-9cb4-a62d31066802"
        userName={currentUser}
        userSecret={userSecret}
        renderChatCard={(chat, index) => (
          <ChatCardMoose key={`${index}`} chat={chat} /> // Localized and works!
        )}
        renderChatHeader={(chat) => (
          <ChatHeaderMooseMobile
            loggedInUser={currentUser}
            creds={credentials}
          />
        )}
        renderChatSettings={(chatAppState) => (
          <ChatUserSearch
            userLoggedIn={currentUser}
            creds={chatAppState.creds}
          />
        )}
      />
    );
  }
};

export default MooseChat;
