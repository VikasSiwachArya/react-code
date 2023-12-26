import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';


class CardList extends Component {
    render(){
        console.log('render');
        const {monsters} = this.props;
           return (
                monsters.map((monster)=>{
                    return (
                        <Card monster={monster} ></Card>
                    )
                })
            )
        }
    }

export default CardList;