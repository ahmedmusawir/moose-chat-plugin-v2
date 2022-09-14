import React, { useState, useContext } from 'react';

import { SettingOutlined, CloseOutlined } from '@ant-design/icons';

import { ChatEngineContext } from 'react-chat-engine';

import ChatSettings from '../ChatSettings';

const ChatSettingsDrawer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ChatEngineContext);
  const allProps = { ...props, ...context.conn };

  return (
    <div>
      <SettingOutlined
        onClick={() => setIsOpen(true)}
        style={{
          color: 'red',
          // color: 'rgb(24, 144, 255)',
          outline: 'none',
          float: 'right',
          fontSize: '1.5rem',
          padding: '1rem',
        }}
      />

      {isOpen && (
        <div style={styles.drawerContainer}>
          <CloseOutlined
            style={styles.closeIcon}
            onClick={() => setIsOpen(false)}
          />

          <div style={styles.titleContainer}>
            <div style={styles.titleText}>Pick Users for DM</div>
          </div>

          {context.conn !== null && context.conn.renderChatSettings ? (
            context.conn.renderChatSettings(context)
          ) : (
            <ChatSettings {...allProps} />
            // <p>
            //   this is not showing up cuz I'm replacing this with ChatUserSearch
            //   component
            // </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatSettingsDrawer;

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
  },
  closeIcon: {
    position: 'absolute',
    left: '28px',
    top: '32px',
    fontSize: '20px',
    border: '1px solid black',
    padding: '5px',
    borderRadius: '50px',
    backgroundColor: '#36454F',
    color: 'white',
  },
  titleContainer: {
    width: '100%',
    padding: '24px 0px',
    textAlign: 'center',
    color: 'red',
    // color: 'rgb(24, 144, 255)',
  },
  titleText: {
    fontSize: '24px',
    fontWeight: '600',
    marginTop: '6px',
  },
};
