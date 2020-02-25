import React from 'react';
import Card from './Card';

const robohash = "https://robohash.org/";
const options = "?size=200x200";


const CardList = ({card_components})=>{
  let card_list = card_components.map((robot)=>{return new Card(robot, robohash, options).render()});

  return (
    <div>
      {card_list}
    </div>
  );
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
