import React from 'react'
import InputContainer from './InputContainer'
// import TodoListItem from './TodoListItem'

class Container extends React.Component {
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
        this.setState({list:[...this.state.list].map(item=>{
          if(item.id===id){
            item.isCompleted=true;
          } 
          return item
        })});
      }
      
      handleAll(){
          
          this.setState({
              list:[...this.state.list].map(item=>{
                  if(item.isCompleted===true){
                      item.isCompleted=false;
                  }
                  return item
              })
          });
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
            <div className="container">
                <InputContainer onUpdateList={this.updateInput} list={this.state.list} newItem={this.state.newItem}/>
                
            </div>
        )
    }
}

export default Container