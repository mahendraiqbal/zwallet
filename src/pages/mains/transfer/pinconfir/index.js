import React from 'react'
import { connect } from 'react-redux';

function CekPin(props) {
    console.log(props)
  return (
    <>
        <div>cek</div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    pin: state.auth.userData.pin,
    transfer: state.transfer.data,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(CekPin);