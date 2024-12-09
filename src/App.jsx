import './App.css'

function List(props) {
  if (!props.animalsList) {
    return <div>Loading...</div>;
  }

  if (props.animalsList.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animalsList.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  )
}

function App() {
  const animals = ["Toger"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animalsList={animals} />
    </div>
  )
}

export default App;