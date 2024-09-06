// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchBox.component';

import './App.css';

const App = () => {

  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const updatedFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    setFilteredMonsters(updatedFilteredMonsters);
  }, [monsters, searchString])

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchString(searchField);
  }

  return (
    <div className="App">
      <h1 className='title'>Monsters List</h1>

      < SearchBox 
        className='search-box'
        placeholder='search monsters'
        onChangeHandler={ onSearchChange }
      />

      < CardList monsters={ filteredMonsters }/>
    </div>
  )
}




// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => 
//         this.setState(
//           () => { 
//             return { monsters: users }
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchString };
//     });
//   }

//   render() {

//     const { monsters, searchString} = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//               return monster.name.toLocaleLowerCase().includes(searchString);
//             })

//     return (
//       <div className="App">
//         <h1 className='title'>Monsters List</h1>

//         < SearchBox 
//           className='search-box'
//           placeholder='search monsters'
//           onChangeHandler={ onSearchChange }
//         />

//         < CardList monsters={ filteredMonsters }/>
//       </div>
//     );
//   }
// }

export default App;
