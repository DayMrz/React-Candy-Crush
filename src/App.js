import { useState } from "react"

const width = 8
const candyColors = [
  'orange',
  'blue',
  'purple',
  'green',
  'red',
  'yellow'
]



const App = () => {

  const [currentColorArrangement, setCurrentColorArrangement] = useState([])
  
  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)]
        randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }
  createBoard()

  console.log(currentColorArrangement)
  return (
    <div> im empty </div>
  );
}

export default App
