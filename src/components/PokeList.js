import React from 'react';
import pokemons from '../data/data.json';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        const item = this.props.pokemons.map((pokemons, i) => {
            return (
                <li key={i} id={i}>
                    <Pokemon pokemons={pokemons} />
                </li>
            )
        });
        return (
            <div className="body">
                <h1 className="title">Mi Lista De Pokemon</h1>
                <ul className="main">{item}</ul>
            </div>
        )
    }
}

export default PokeList;