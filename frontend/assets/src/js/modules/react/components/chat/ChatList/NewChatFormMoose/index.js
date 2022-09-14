import React, { useState, useContext } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { ChatEngineContext } from 'react-chat-engine';
import DirectMessageSearch from '../../DirectMessageSearch';

const NewChatFormMoose = (props) => {
  const { conn } = useContext(ChatEngineContext);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(false);

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

      <div
        className="ce-chat-form-container"
        style={{
          ...styles.newChatContainer,
          ...{ marginLeft: props.onClose ? '40px' : '0px' },
          // border: '2px dotted blue',
        }}
      >
        <div
          className="chat-list-header"
          style={{
            fontWeight: '700',
            fontSize: '24px',
            position: 'relative',
            top: '4px',
            width: '100%',
            color: 'red',
            marginTop: '5px',
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            // marginLeft: '8px',
            // width: 'calc(100% - 48px)',
            // border: '2px dotted green',
          }}
        >
          Start Messaging
        </div>
      </div>
      <hr className="bg-danger" />
      <DirectMessageSearch />
      <hr className="bg-danger" />
    </>
  );
};

export default NewChatFormMoose;

const styles = {
  closeIcon: {
    position: 'relative',
    top: '26px',
    left: '18px',
    fontSize: '20px',
    border: '1px solid black',
    padding: '5px',
    borderRadius: '50px',
    backgroundColor: '#36454F',
    color: 'white',
  },
  newChatContainer: {
    padding: '16px 14px',
    backgroundColor: 'white',
    height: '60px',
    // height: '70px',
  },
};
