const React = require('react')
const ReactDOM = require('react-dom')

let data = [
  {id: 0, title: 'todo 1', completed: false},
  {id: 1, title: 'todo 2', completed: true}
]

const Todo = React.createClass({
  render: function () {
    return (
        <li key={this.props.data.id}>
        <label>{this.props.data.title}</label>
        <input type="text" defaultValue={this.props.data.title} onKeyUp={this.keyUp}/>
        </li>
    )
  },
  keyUp: function (e) {
    if(e.keyCode !== 13)
      return
    data[this.props.data.id].title = e.target.value
    this.setState({data: data})
  }
})

const Todos = React.createClass({
  getInitialState: function () {
    return {data: data}
  },
  render: function () {
    let todoNodes = data.map(function(todo) {
      return (
          <Todo data={todo} key={todo.id}/>
      )
    })
    return (
        <div>
          <input type="text" placeholder="input todo" onKeyUp={this.keyUp}/>
          <ul>
            {todoNodes}
          </ul>
        </div>
    )
  },
  keyUp: function (e) {
    if(e.keyCode !== 13)
      return
    data.push({id: data.length, title: e.target.value, completed: false})
    e.target.value = ''
    this.setState({data: data})
  }
})


ReactDOM.render(
    <div>
      <h1>Hello, world!</h1>
      <Todos data={data}/>
    </div>,
  document.getElementById('example')
)
