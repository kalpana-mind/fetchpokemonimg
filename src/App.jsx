import './App.css';
import Slots from './Slots';
import RandomPokemon from './RandomPokemon';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Toggler from './Toggler';
import TogglerCounter from './TogglerCounter';
import ColorBoxes from './ColorBoxes';

const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 2, completed: true },
  { id: 3, item: 'tofu', quantity: 1, completed: false },
  { id: 4, item: 'tea', quantity: 24, completed: true },
];

const properties = [
  { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
  { id: 129331, name: 'Lone Mountain Cabin', rating: 4.8, price: 250 },
  { id: 129032, name: 'Cactus Retreat', rating: 4.75, price: 300 },
  { id: 129033, name: 'Redwood Treehouse Escape', rating: 4.9, price: 120 },
  { id: 129034, name: 'Oceanview Condo', rating: 4.7, price: 140 },
  { id: 129035, name: 'Gold Miner Campground', rating: 4.69, price: 96 },
];

const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
];

function App() {
  return (
    <div>
      <ColorBoxes colors={colors} />
      {/* <TogglerCounter /> */}
      {/* <Toggler /> */}
      {/* <Clicker message="Hi!!!" buttonText="Click Me" />
      <Clicker message="Stop Clicking Me" buttonText="Do Not Click Me" /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <RandomPokemon /> */}
      {/* <Slots val1="1" val2="1" val3="1" />
      <Slots val1="1" val2="2" val3="3" /> */}
    </div>
  );
}

export default App;
