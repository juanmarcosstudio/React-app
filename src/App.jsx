import './App.css'

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {animalList}
      </ul>
    </div>
  )
}
export default App
