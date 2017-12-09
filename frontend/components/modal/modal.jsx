import React from 'react';

import SessionFormContainer from '../session_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.modalOpen === false) {
      return null
    } else if (this.props.modalType === 'login') {
      return (
        <div className="modal">
          <div className="modal-overlay" onClick={() => this.props.closeModal()}></div>
          <div className="modal-content">
            <SessionFormContainer login={true} />
          </div>
        </div>
      )
    } else if (this.props.modalType === 'signup') {
      return (
        <div className="modal">
          <div className="modal-overlay" onClick={() => this.props.closeModal()}></div>
          <div className="modal-content">
            <SessionFormContainer login={false} />
          </div>
        </div>
      )
    }

  }

}

export default Modal;
