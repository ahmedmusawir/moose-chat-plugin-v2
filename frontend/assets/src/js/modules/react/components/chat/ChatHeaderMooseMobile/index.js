import React, { useContext, useEffect, useState } from 'react';

import { ChatEngineContext, getOrCreateChat } from 'react-chat-engine';

import ChatListDrawer from './ChatListDrawer';
import ChatSettingsDrawer from './ChatSettingsDrawer';

import { getDateTime, formatDateTime } from '../Utilities/timezone';

import { LoadingOutlined } from '@ant-design/icons';

import { Row, Col } from 'react-grid-system';

import { setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

const ChatHeaderMooseMobile = ({ loggedInUser, creds }) => {
  const { conn, chats, activeChat } = useContext(ChatEngineContext);

  const chat = chats ? chats[activeChat] : undefined;
  const otherPerson =
    chat &&
    conn &&
    chat.people.find((person) => person.person.username !== conn.userName);
  const title = chat
    ? chat.is_direct_chat && otherPerson
      ? otherPerson.person.first_name + ' ' + otherPerson.person.last_name
      : chat.title
    : undefined;

  var text = 'Say hello!';
  if (!chat) {
    text = 'Loading...';
  } else if (
    chat.last_message.created &&
    chat.last_message.created.length > 0
  ) {
    const dateTime = getDateTime(
      chat.last_message.created,
      conn ? conn.offset : undefined
    );
    text = `Active ${formatDateTime(dateTime)}`;
  }

  useEffect(() => {
    // console.log('MOOSE CHAT PERSON IN USE EFFECT : ', loggedInUser);
    // console.log('MOOSE CHAT HEADER CREDS : ', creds);
    getOrCreateChat(creds, { is_direct_chat: true, usernames: [loggedInUser] });
  }, []);

  return (
    <Row className="ce-chat-title" style={styles.titleSection}>
      <Col
        xs={2}
        sm={0}
        style={{ ...styles.mobileOptiom, ...{ left: '6px' } }}
        className="ce-chat-list-mobile-option"
      >
        <ChatListDrawer />
      </Col>

      <Col
        xs={8}
        sm={12}
        style={styles.titleContainer}
        className="ce-chat-title-container"
      >
        <div
          style={styles.titleText}
          className="ce-chat-title-text"
          id={`ce-chat-feed-title-${title}`}
        >
          {title ? title : 'SelfLIST Chat'}
          {/* {title ? title : <LoadingOutlined />} */}
        </div>

        <div style={styles.subtitleText} className="ce-chat-subtitle-text">
          {text}
        </div>
      </Col>

      <Col
        xs={2}
        sm={0}
        style={{ ...styles.mobileOptiom, ...{ right: '6px' } }}
        className="ce-chat-settings-mobile-option"
      >
        <ChatSettingsDrawer />
      </Col>
    </Row>
  );
};

export default ChatHeaderMooseMobile;

const styles = {
  titleSection: {
    position: 'absolute',
    top: '0px',
    width: '100%',
    zIndex: '1',
    backgroundColor: 'rgb(256, 256, 256, 0.92)',
  },
  mobileOption: {
    width: '100%',
    top: '32px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflow: 'hidden',
  },
  titleContainer: {
    width: '100%',
    padding: '18px 0px',
    textAlign: 'center',
    color: 'red',
    // color: 'rgb(24, 144, 255)',
    overflowX: 'hidden',
  },
  titleText: {
    fontSize: '24px',
    fontWeight: '600',
  },
  subtitleText: {
    fontSize: '12px',
  },
};
