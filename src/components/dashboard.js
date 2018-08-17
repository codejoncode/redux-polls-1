import React, {Component} from 'react'
import {connect} from 'react-redux'


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            showAnswered: false
        }
        // component state is useful when only the component we are using cares about the state. 
        //use component state as the default if the app grows out of component state and it would beneficial to have it in the redux state tree then use
        //redux state tree. 
    }

    showUnaswered = () => {
        this.setState(() => ({
            showAnswered: false
        }))
    }
    showAnswered = () => {
        this.setState(() => ({
            showAnswered: true
        }))
    }



    render() {
        const {showAnswered} = this.state 
        const {answered, unanswered} = this.props 


        return (
            <div>
                <div className = 'dashboard-toggle'>
                  <button 
                  style = {{textDecoration: showAnswered === false ? 'underline' : null}}
                  onClick ={this.showUnaswered}>
                  Unanswered
                  </button>
                <span>|</span>
                <button 
                  style = {{textDecoration: showAnswered === true ? 'underline' : null}}
                  onClick ={this.showAnswered}>
                  Answered
                  </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, polls, users}){
    const answers = users[authedUser].answers

    const answered = answers.map((id) => polls[id])
      .sort((a,b) => b.timestamp - a.timestamp)
    
    const unanswered = Object.keys(polls)
      .filter((id) => !answers.includes(id))
      .map((id) => polls[id])
      .sort((a,b) => b.timestamp - a.timestamp)


    return {
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Dashboard)