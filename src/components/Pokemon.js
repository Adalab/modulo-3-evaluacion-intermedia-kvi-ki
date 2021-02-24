import React from 'react';
import pokemons from '../data/data.json';

const Pokemon = (props) => {
    const pokemonType = props.pokemons.types.map((type, i) => {
        return (
            <li key={i}>
                {type}
            </li>
        )
    });

    return (
        <section className="card">
            <h3 className="name">{props.pokemons.name}</h3>
            <img src={props.pokemons.url} />
            <ul className="types">
                {pokemonType}
            </ul>
        </section>
    )
}

export default Pokemon;