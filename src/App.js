import { useEffect, useState } from "react"

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

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]

      if ( columnOfThree.every(square =>
        currentColorArrangement[square] === decidedColor)) {
        columnOfThree.forEach(square =>
          currentColorArrangement[square] = '')
      }
    }
  }
  
  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor =
      candyColors[Math.floor(Math.random() * candyColors.length)]
        randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
  }
  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() =>{
      checkForColumnOfThree()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    return () => clearInterval(timer)

  }, [checkForColumnOfThree, currentColorArrangement])

  console.log(currentColorArrangement)
  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
            <img
              key={index}
              style={{backgroundColor: candyColor}}
              alt="{candyColor}"
            />
          ))}
      </div>
    </div>
  )
}

export default App
