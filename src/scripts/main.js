const React = require('react')
const ReactDOM = require('react-dom')

let data = [
  {id: 0, title: 'todo 1', completed: false},
  {id: 1, title: 'todo 2', completed: true}
]

const TodoInput = React.createClass({
  render: function () {
    return (
        <input type="text" placeholder="input todo" onKeyUp={this.keyUp}/>
    )
  },
  keyUp: function (e){
    if(e.keyCode !== 13)
      return

    data.push({id: data.length, title: e.target.value, completed: false})
  }
})


const Todo = React.createClass({
  render: function () {
    return (
        <li key={data.id}>
        <p>todo {this.props.data.id}</p>
        </li>
    )
  }
})

const Todos = React.createClass({
  getInitialState: function () {
    return {data: data}
  },
  render: function () {
    let todoNodes = data.map(function(todo) {
      console.log(1)
      return (
          <Todo data={todo} key={todo.id}/>
      )
    })
    return (
        <ul>
        {todoNodes}
        </ul>
    )
  }
})



ReactDOM.render(
    <div>
      <h1>Hello, world!</h1>
      <TodoInput />
    <Todos data={data}/>
    </div>,
  document.getElementById('example')
)
