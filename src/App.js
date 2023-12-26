import { Component } from 'react';
import logo from './logo.svg';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state= {
      monsters:[],
      searchField:''
    }
  }

  //code to get data
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users)=>{
        this.setState( ()=> {
          return {monsters:users};
        },
        () =>{
        } )
      })
  }

  onSearchChange = (event)=> { 
    
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState( () => {
      return {searchField}
    } )
  }

  render() {

    const {monsters, searchField} = this.state;
    const { onSearchChange } = this;

    // const searchString = event.target.value.toLocaleLowerCase();
    const filteredMonster = monsters.filter( (monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField)
    } );

      return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholders="Search Monsters" className='monseter-search-box'></SearchBox>
        <div className='card'>
          <CardList monsters={filteredMonster}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
