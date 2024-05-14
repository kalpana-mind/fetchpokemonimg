import './RandomPokemon.css';

export default function RandomPokemon() {
  const randomNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;
  return (
    <div className="randompokemon">
      <h1>Pokemon #{randomNum}</h1>
      <img src={url} alt="" />
    </div>
  );
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
