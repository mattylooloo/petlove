import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      compatibility_value: 50,
      id: this.props.id
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputOnClick1 = this.handleInputOnClick1.bind(this)
    this.handleInputOnClick2 = this.handleInputOnClick2.bind(this)
    this.handleInputOnClick3 = this.handleInputOnClick3.bind(this)
    this.handleInputOnClick4 = this.handleInputOnClick4.bind(this)
    this.handleInputOnClick5 = this.handleInputOnClick5.bind(this)

  }

  handleInputOnClick1(event) {
    const compatibility_value = this.state.compatibility
    this.setState({compatibility: compatibility_value+parseInt(event.target.value)})
  }
  handleInputOnClick2(event) {
    const compatibility_value = this.state.compatibility
    this.setState({compatibility: compatibility_value+parseInt(event.target.value)})
  }
  handleInputOnClick3(event) {
    const compatibility_value = this.state.compatibility
    this.setState({compatibility: compatibility_value+parseInt(event.target.value)})
  }
  handleInputOnClick4(event) {
    const compatibility_value = this.state.compatibility
    this.setState({compatibility: compatibility_value+parseInt(event.target.value)})
  }
  handleInputOnClick5(event) {
    const compatibility_value = this.state.compatibility
    this.setState({compatibility: compatibility_value+parseInt(event.target.value)})
  }

  handleSubmit(event) {
    debugger
    event.preventDefault()
    const user = Object.assign({},this.state)
    this.props.update(user)

  }

  // componentWillMount() {
  //   this.props.getUsers()
  // }

  // <select id="ddlViewBy">
  //   <option value="1">test1</option>
  //   <option value="2" selected="selected">test2</option>
  //   <option value="3">test3</option>
  // </select>

  render() {
    return (
      <form className="profile-questions-form" onSubmit={this.handleSubmit}>
        <div className="profile-questions-container">

          <div className="profile-question">
            <span>Are you a morning person? Night person?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick1} type="radio" id="question1" className="radio-button" name="q1" value="10"/>
                <div className="profile-question-answer" htmlFor="question1">&nbsp;&nbsp;Morning</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick1} type="radio" id="question1" className="radio-button" name="q1" value="-10"/>
                <div className="profile-question-answer" htmlFor="question1">&nbsp;&nbsp;Night</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick1} type="radio" id="question1" className="radio-button" name="q1" value="0"/>
                <div className="profile-question-answer" htmlFor="question1">&nbsp;&nbsp;Anytime</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question">
            <span>What would you prefer to do in your free time?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick2} type="radio" id="question2" className="radio-button" name="q2" value="5"/>
                <div className="profile-question-answer" htmlFor="question2">&nbsp;&nbsp;Eat</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick2} type="radio" id="question2" className="radio-button" name="q2" value="-10"/>
                <div className="profile-question-answer" htmlFor="question2">&nbsp;&nbsp;Sleep</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick2} type="radio" id="question2" className="radio-button" name="q2" value="10"/>
                <div className="profile-question-answer" htmlFor="question2">&nbsp;&nbsp;Play</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question profile-question4">
            <span>What do you think of vegetarians?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick4} type="radio" id="question4" className="radio-button" name="q4" value="10"/>
                <div className="profile-question-answer" htmlFor="question4">&nbsp;&nbsp;Love Em</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick4} type="radio" id="question4" className="radio-button" name="q4" value="-5"/>
                <div className="profile-question-answer" htmlFor="question4">&nbsp;&nbsp;Hate Em</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick4} type="radio" id="question4" className="radio-button" name="q4" value="-10"/>
                <div className="profile-question-answer" htmlFor="question4">&nbsp;&nbsp;I eat them</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question profile-question3">
            <span>Are you okay with interspecies dating?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick3} type="radio" id="question3" className="radio-button" name="q3" value="-10"/>
                <div className="profile-question-answer" htmlFor="question3">&nbsp;&nbsp;Yes</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick3} type="radio" id="question3" className="radio-button" name="q3" value="10"/>
                <div className="profile-question-answer" htmlFor="question3">&nbsp;&nbsp;No</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question profile-question5">
            <span>Does size matter?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick5} type="radio" id="question5" className="radio-button" name="q5" value="-10"/>
                <div className="profile-question-answer" htmlFor="question5">&nbsp;&nbsp;Yes</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick5} type="radio" id="question5" className="radio-button" name="q5" value="10"/>
                <div className="profile-question-answer" htmlFor="question5">&nbsp;&nbsp;No</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input onClick={this.handleInputOnClick5} type="radio" id="question5" className="radio-button" name="q5" value="5"/>
                <div className="profile-question-answer" htmlFor="question5">&nbsp;&nbsp;Indifferent</div> <br/>
              </div>
            </div>
          </div>

        </div>
        <button>Save changes</button>
      </form>
    )
  }

}

export default QuestionForm;
