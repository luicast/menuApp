import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useInitialState = () => {
  const { item, saveItem, loading, error } = useLocalStorage('Plates', [])
  const [searchValue, setSearchValue] = useState('')

  const addPlate = (plate) => {
    const newPlates = [...item]
    newPlates.push(plate)
    saveItem(newPlates)
  }

  const removePlate = (id) => {
    const plateIndex = item.findIndex(plate => plate.id === id)
    const newPlates = [...item]
    newPlates.splice(plateIndex, 1)
    saveItem(newPlates)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const plateCompleted = (id) => {
    const plateIndex = item.findIndex(Plate => Plate.id === id)
    const newPlates = [...item]
    if (newPlates[plateIndex].completed === false) {
      newPlates[plateIndex].completed = true
    } else {
      newPlates[plateIndex].completed = false
    }
    saveItem(newPlates)
  }

  const completedPlates = item.filter(Plate => Plate.completed).length
  const totalPlates = item.length

  return {
    item,
    addPlate,
    removePlate,
    completedPlates,
    totalPlates,
    searchValue,
    handleSearch,
    setSearchValue,
    loading,
    error,
    plateCompleted
  }
}

export default useInitialState
