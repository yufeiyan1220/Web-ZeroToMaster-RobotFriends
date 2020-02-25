import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(
      users => {
        this.setState({robots: users});
      }
    );
  }

  onSearch = (event) => {
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if(this.state.robots.length === 0) {
      return (
        <div className = "tc">
          <h1 className = 'f1'> Loading.... </h1>
        </div>
      );
    }
    else {
      return (
        <div className = "tc">
          <h1 className = 'f1'> Robot Friends </h1>
          <SearchBox searchChange = {this.onSearch}/>
          <Scroll>
            <ErrorBoundry>
              <CardList card_components={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }

  }

}


export default App;
