import React, { useState, useEffect } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import axios from 'axios';

function ChatUserSearch({ userLoggedIn, creds }) {
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [query, setQuery] = useState('');

  // console.log(query);

  const fetchPosts = async () => {
    try {
      // Loading Spinner Starts
      setIsPending(true);

      const fetchedPosts = await axios.get('https://api.chatengine.io/users/', {
        headers: { 'Private-Key': '185fb2d8-e5d1-4e14-afe2-32eb8e0ed93a' },
      });
      // console.log('First Page:', fetchedPosts.data);

      setUsers(fetchedPosts.data);

      // Loading Spinner Ends
      setIsPending(false);

      return fetchedPosts;
    } catch (e) {
      // print error
      console.log(e);
      return [];
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userLoggedIn]);

  const makeDirectMessaging = (usr) => {
    console.log('User clicked', usr);
    getOrCreateChat(creds, { is_direct_chat: true, usernames: [usr] }, () =>
      setUsername('')
    );
  };

  return (
    <div>
      <h6 className="text-danger p-2 border border-danger border-3">
        Pick users from below to start DM:...
      </h6>

      {/* CHAT USER SEARCH INPUT */}
      <input
        type="text"
        name="react-search"
        id="react-search"
        placeholder="Find Users to add ..."
        className="form-control m-1"
        onChange={(e) => setQuery(e.target.value)}
      />

      {users &&
        users
          .filter(
            (user) =>
              user.first_name.toLowerCase().includes(query.toLowerCase()) ||
              user.last_name.toLowerCase().includes(query.toLowerCase())
          )
          .map((user) => {
            if (user.username === userLoggedIn) {
              // SKIPPING THE USER WHO'S LOGGED IN
              return null;
            }
            return (
              <button
                key={user.id}
                className="btn btn-outline-danger btn-block "
                onClick={() => makeDirectMessaging(user.username)}
              >
                {`${user.first_name}  ${user.last_name}`}
                {/* {user.username} */}
              </button>
            );
          })}
    </div>
  );
}

export default ChatUserSearch;
