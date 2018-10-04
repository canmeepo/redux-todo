import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, done} from './actions';

const initialState = {
  input: ''
}

class App extends Component {

  state = {
    input: ''
  }

  handleChangeInput = (e) => {
    this.setState({input: e.target.value })
  }

  handleSubmit = () => {
    this.props.addTodo(this.state.input, false);
    this.setState(initialState);
  }
  render() {
    return (
      <div className="App">
          <input type="text" placeholder="todo" onChange={this.handleChangeInput} value={this.state.input} />
          <button onClick={this.handleSubmit}>add task</button>
        {this.props.todos.map((x,i) => 
          <div className="item" key={x.id}>
            <div style={{width: '100%', textAlign: 'left'}} className={x.done ? 'done' : ''}onClick={() => this.props.done(x.id)}>{i+1}. {x.todo}</div>
            <div style={{display: 'flex'}}>
            <button onClick={() => this.props.done(x.id)}>{x.done ? 'undone' : 'done'}</button>
            <button onClick={() => this.props.deleteTodo(x.id)}>delete</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {return {todos: state.items}}

const mapDispetchToProps = dispatch => ({
  addTodo: (a, b) => dispatch(addTodo(a, b)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  done: (id) => dispatch(done(id))
})

export default  connect(mapStateToProps, mapDispetchToProps)(App);
