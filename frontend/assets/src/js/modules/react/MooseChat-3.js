import React, { useState, useEffect } from 'react';
import { ChatEngine, getOrCreateChat, PeopleSettings } from 'react-chat-engine';
import axios from 'axios';
import ChatUserSearch from './components/chat/ChatUserSearch';

const MooseChat = (props) => {
  const params = new URLSearchParams(window.location.search);
  console.log('URL UserName: ', params.get('username'));
  // console.log('URL User Secret: ', params.get('secret'));
  const listingMember = params.get('username');

  //COLLECTING CURRENT USER FROM GLOBAL
  const currentUser = mooseData.currentWPUserName;
  const currentUserEmail = mooseData.currentWPUserEmail;
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [loading, setLoading] = useState(true);

  const loggedInWPUser = {
    username: currentUser,
    secret: currentUserEmail,
  };

  console.log('Logged in as: ', loggedInWPUser);

  useEffect(() => {
    axios
      .get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': '98d9a7a2-3755-4354-a63f-a9165641e131',
          'user-name': currentUser,
          'user-secret': currentUserEmail,
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
  }, [currentUser, currentUserEmail]);

  const createUser = async (user) => {
    // put IS FOR GET OR CREATE ACCORDING TO DOC
    await axios
      .put('https://api.chatengine.io/users/', user, {
        headers: { 'Private-Key': '37d9cc64-75a2-41e0-94d9-61a0c9c29750' },
      })
      .then((r) => console.log('get or create user', r))
      .catch((e) => console.log('get or create error', e));
  };

  function createDirectChat(creds) {
    // const user = {
    //   username: listingMember,
    //   secret: 'pass1234',
    //   first_name: 'Adam',
    //   last_name: 'La Morre',
    //   custom_json: { high_score: 2000 },
    // };
    // createUser(user);

    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [listingMember] },
      () => setUsername('')
    );
    // getOrCreateChat(creds, { is_direct_chat: true, usernames: ['Rico'] }, () =>
    //   setUsername('')
    // );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <p>{params.get('username')}</p>
        <p>{params.get('secret')}</p>
        <input
          placeholder="Username"
          id="dm-search-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="60vh"
      projectID="4ca132ec-0f15-4b96-9cb4-a62d31066802"
      userName={currentUser}
      userSecret="pass1234"
      // userName={currentUser}
      // userSecret={currentUserEmail}
      // renderNewChatForm={(creds) => renderChatForm(creds)} // This is for DM from the Chat page
      // userName="odesk.shourav@gmail.com"
      // userSecret="odesk.shourav@gmail.com"
      renderNewChatForm={(creds) => createDirectChat(creds)} // This is for starting DM on page load
      renderChatSettings={(chatAppState) => <ChatUserSearch />}
    />
  );
};

export default MooseChat;
