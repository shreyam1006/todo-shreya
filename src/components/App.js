import React from 'react';
import './App.css';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// import ListCom from 'ListCom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted
    }));
  }


  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: new Date(),
      value: this.state.newItem.slice(),
      isCompleted:false
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }


  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>todos</h1>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
             onKeyDown={e=>e.key==="Enter" && this.addItem()}
          />
          
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li style={{ textDecoration: this.state.isCompleted ? 'line-through' : 'none' }} key={item.id}>
                  <button onClick={this.handleClick}>
                    {this.state.isCompleted ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon />}
                  </button>
                  {item.value}
                  <button className="cross" onClick={() => this.deleteItem(item.id)}>x</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
