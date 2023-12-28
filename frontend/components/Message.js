import React from 'react'
import { connect } from 'react-redux'

const Message = (props) => {
  console.log(props)
  return <div id="message">{props.infoMessage}</div>
}

const mapStateToProps = (state) => {
  return {
    infoMessage: state.infoMessage
  
  }
}

export default connect(mapStateToProps)(Message);