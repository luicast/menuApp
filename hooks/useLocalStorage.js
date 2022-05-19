/* eslint-disable no-undef */
import { useState, useEffect } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(!loading)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  }, [])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  return {
    item, saveItem, loading, error
  }
}

export default useLocalStorage
