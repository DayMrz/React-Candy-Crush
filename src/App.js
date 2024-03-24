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

  
  const checkForColumnOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
      const decidedColor = currentColorArrangement[i]

      if ( columnOfFour.every(square =>
        currentColorArrangement[square] === decidedColor)) {
        columnOfFour.forEach(square =>
          currentColorArrangement[square] = '')
      }
    }
  }

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

  const checkForRowOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const rowOfFour = [i, i + 1, i + 1 * 2, i + 1 * 3]
      const decidedColor = currentColorArrangement[i]

      if ( rowOfFour.every(square =>
        currentColorArrangement[square] === decidedColor)) {
        rowOfFour.forEach(square =>
          currentColorArrangement[square] = '')
      }
    }
  }

  const checkForRowOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const rowOfThree = [i, i + 1, i + 1 * 2]
      const decidedColor = currentColorArrangement[i]

      if ( rowOfThree.every(square =>
        currentColorArrangement[square] === decidedColor)) {
        rowOfThree.forEach(square =>
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
      checkForColumnOfFour()
      checkForColumnOfThree()
      checkForRowOfFour()
      checkForRowOfThree()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    return () => clearInterval(timer)

  }, [checkForColumnOfFour, checkForColumnOfThree, currentColorArrangement])

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
