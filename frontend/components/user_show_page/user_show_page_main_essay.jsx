import React from 'react'

class UserShowPageMainEssay extends React.Component {

  render() {

    return (
      <div className="profile-main-essay">
        <h2 className="profile-main-essay-title">My self summary</h2>
        <div className="profile-main-essay-summary">
          {this.props.profile}
        </div>
        <div className="profile-main-essay-summary">
          {this.props.profile2}
        </div>
      </div>
    )
  }

}

export default UserShowPageMainEssay;
