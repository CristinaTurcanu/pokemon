import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render () {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning hand</h1>
        } else {
            title = <h1 className="Pokedex-looser">Loosing hand</h1>
        }

        return (
            <div className='Pokedex'>
                {title}      
                <h4>Total experience: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                {this.props.pokemon.map((p) => {
                    return <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.exp} />
                })}
                </div>
            </div>
        )
    }
}

export default Pokedex;