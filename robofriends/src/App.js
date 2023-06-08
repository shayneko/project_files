import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox'
import Scroll from './Scroll';




class App extends Component  {
  constructor () {
    super ()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }
onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })
 }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
   })
   return !robots.length ? 
  <h1 className='tc f1'>Please Wait loading your request</h1> :
   (
      <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <Cardlist robots={filteredRobots}/>
      </Scroll>
    </div>
    );
   }
}


export default App;