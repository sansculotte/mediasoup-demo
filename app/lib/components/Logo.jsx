import React from 'react';
import { connect } from 'react-redux';
import * as appPropTypes from './appPropTypes';
import PropTypes from 'prop-types';
import { withRoomContext } from '../RoomContext';
// import logo from './logo_square_notypo.svg';
// 

const Logo = ({ messages }) =>
{
	return (
	    <div data-component='Logo'>
              Lirpo haba
              <img src="/resources/images/logo_square_notypo.svg" className="App-logo" alt="logo" width="120"/>
              
      {/* 			{ */}
      {/* 				messages.map((message) => */}
      {/*     <div key={message.id}> */}
      {/*       <div>{message.peer}</div> */}
      {/*       <p>{message.text}</p> */}
      {/*     </div> */}
      {/*   ) */}
      {/* } */}
    </div>
  )
}

Logo.propTypes =
{
    messages: PropTypes.arrayOf(appPropTypes.Message).isRequired
}

const mapStateToProps = (state) =>
{
    // const messages = state.messages;
    // console.log(messages)
    // return { messages };
}

const LogoContainer = withRoomContext(connect(
	mapStateToProps,
	undefined
)(Logo))

export default LogoContainer

