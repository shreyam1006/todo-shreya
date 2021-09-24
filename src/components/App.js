import React from 'react';
import './App.css';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import ListCom from 'ListCom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  handleClick(id) {
    console.log(id);

    this.setState({list:[...this.state.list].map(item=>{
      if(item.id===id){
        item.isCompleted=true;
      } 
      return item
    })});
  }


  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {

    this.setState({
      list:[...this.state.list, {id: new Date(),
        value: this.state.newItem.slice(),
        isCompleted: false}],
        newItem:""
    });
  }

  deleteItem(id) {
    this.setState({ list: [...this.state.list].filter(item=>item.id!==id) });
  }


  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>todos</h1>
        </div>
        
        <div className="container">
          <div className="inputcontainer">
          <button className="allbutton" onClick={this.handleClick}>
            <KeyboardArrowDownOutlinedIcon />
          </button>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            onKeyDown={e => e.key === "Enter" && this.addItem()}
          />
          </div>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }} key={item.id}>
                  <button onClick={()=>this.handleClick(item.id)}>
                    {item.isCompleted ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon />}
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
