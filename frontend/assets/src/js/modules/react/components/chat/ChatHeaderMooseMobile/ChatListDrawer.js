import React, { useState, useContext } from 'react';

import { MenuOutlined } from '@ant-design/icons';

import { ChatEngineContext } from 'react-chat-engine';
// import { ChatEngineContext } from '../Context';

// import { ChatList } from 'react-chat-engine';
import ChatList from '../ChatList';

const ChatListDrawer = (props) => {
  // const [isOpen, setIsOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ChatEngineContext);
  const allProps = { ...props, ...context.conn };

  return (
    <div>
      <MenuOutlined
        onClick={() => setIsOpen(true)}
        style={{
          color: 'red',
          // color: 'rgb(24, 144, 255)',
          outline: 'none',
          fontSize: '1.5rem',
          padding: '1rem',
        }}
      />
      {isOpen && (
        <div style={styles.drawerContainer}>
          {context.conn !== null && context.conn.renderChatList ? (
            context.conn.renderChatList(context)
          ) : (
            <ChatList
              {...allProps}
              onClose={() => setIsOpen(false)}
              onChatClick={() => setIsOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ChatListDrawer;

const styles = {
  drawerContainer: {
    position: 'fixed',
    zIndex: '1',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    textAlign: 'left',
    // border: '.5rem dotted yellow',
  },
  titleContainer: {
    width: '100%',
    padding: '24px 0px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
  },
  titleText: {
    fontSize: '24px',
    fontWeight: '600',
  },
};
