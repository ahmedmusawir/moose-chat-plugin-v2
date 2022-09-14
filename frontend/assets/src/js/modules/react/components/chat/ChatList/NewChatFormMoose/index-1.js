import React, { useState, useContext, useEffect } from 'react';
import $ from 'jquery';

import { CloseOutlined } from '@ant-design/icons';

import { ChatEngineContext } from 'react-chat-engine';
// import { ChatEngineContext } from '../../Context';
// import { newChat, Button, TextInput } from 'react-chat-engine';
import DirectMessageSearch from '../../DirectMessageSearch';

const NewChatFormMoose = (props) => {
  const { conn } = useContext(ChatEngineContext);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(false);

  // console.log('ON CLOSE PROP [NewChatFormMoose]', props);

  useEffect(() => {
    // const closeChatListBtn = $('.ce-chat-form-container');
    // const closeChatListBtn = $('#close-chat-list'); DIDN'T WORK
    const closeChatListBtn = $('.close-btn');
    closeChatListBtn.on('click', handleCloseChatBtnClick);

    console.log('Chat Close Btn', closeChatListBtn);
  }, []);

  const handleCloseChatBtnClick = () => {
    console.log('Mobile Chat List Btn clicked');
    window.location.reload();
  };

  return (
    <>
      {props.onClose && (
        <div style={{ height: '0px' }}>
          <CloseOutlined
            style={styles.closeIcon}
            onClick={() => props.onClose()}
          />
        </div>
      )}

      <button
        id="close-chat-list // id didn't work"
        className="close-btn font-weight-bold text-light border border-danger p-2 bg-dark float-right"
      >
        X
      </button>

      <div
        className="ce-chat-form-container"
        style={{
          ...styles.newChatContainer,
          ...{ marginLeft: props.onClose ? '40px' : '0px' },
          border: '2px dotted blue',
        }}
      >
        <div
          style={{
            fontWeight: '600',
            fontSize: '24px',
            position: 'relative',
            top: '4px',
            width: 'calc(100% - 48px)',
            border: '2px dotted green',
          }}
        >
          New Bibo Chats
        </div>
      </div>
      <hr />
      <DirectMessageSearch />
      <hr />
    </>
  );
};

export default NewChatFormMoose;

const styles = {
  closeIcon: {
    position: 'relative',
    top: '26px',
    left: '18px',
    fontSize: '16px',
    color: 'red',
  },
  newChatContainer: {
    padding: '16px 14px',
    backgroundColor: 'white',
    border: '2px dotted pink',
    height: '70px',
  },
};
