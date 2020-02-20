import React, {Component} from 'react';
import Card from './Card';

const robohash = "https://robohash.org/";
const options = "?size=200x200";

class CardList extends Component {
  constructor(props) {
    super(props);
    // console.log("card_components", props.card_components);
    this.robots = props.card_components;
  }
  render() {

    let card_list = this.robots.map((robot)=>{return new Card(robot, robohash, options).render()});

    return (
      <div>
        {card_list}
      </div>
    );
  }
}

// const CardList = (props) => {
//   let card_list = props.card_components.map((robot)=>{return new Card(robot, robohash, options).render()});
//
//   return (
//     <div>
//       {card_list}
//     </div>
//   );
// }

export default CardList;
