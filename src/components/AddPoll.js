import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {handleAddPoll} from '../actions/polls'

class AddPoll extends Component {
    constructor(){
        super()
        this.state = {
            question: '',
            a: '', 
            b: '', 
            c: '', 
            d: '', 
        }
    }

    handleInputChange = event => {
        const {value, name} = event.target;

        this.setState(() => ({
            [name]:value
        }))
    }
    isDisabled = () => {
        const {question, a,b,c,d} = this.state

        return question ===''
        || a === ''
        || b === ''
        || c === ''
        || d === ''
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.history.push('/')
        this.props.dispatch(handleAddPoll(this.state))
       
    }

    render() {
        console.log(this.props)
        const {question, a, b, c, d} = this.state


        return (
            <form className ='add-form' onSubmit={this.handleSubmit}>
            <h3 style ={{marginBottom: 5}}>What is your question?</h3>
            
            <input type="text" onChange={this.handleInputChange} name='question' className = 'input' value={question}/>
            <h4>What are the options?</h4>
            <label htmlFor="a" className='label'>A.</label>
            <input type="text" onChange={this.handleInputChange} name='a' className='input' id='a' value ={a}/>
            <label htmlFor="b" className='label'>B.</label>
            <input type="text" onChange={this.handleInputChange} className = 'input' name ='b'  id = 'b' value ={b}/>
            <label htmlFor="c" className='label'>C.</label>
            <input type="text"onChange={this.handleInputChange} className = 'input' name = 'c' id = 'c' value ={c}/>
            <label htmlFor="d" className='label'>D.</label>
            <input type="text" onChange={this.handleInputChange} className = 'input' name = 'd' id = 'd' value ={d}/>

            <button className = 'btn' type = 'submit' disabled ={this.isDisabled()}>Submit</button>
            </form>
        )
    }
}

export default connect()(AddPoll)