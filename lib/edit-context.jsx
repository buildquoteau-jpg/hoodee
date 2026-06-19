'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const EditContext = createContext({
  isEditMode: false,
  editToken: null,
  setEditMode: () => {},
})

export function EditProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editToken, setEditToken] = useState(null)

  useEffect(() => {
    const token = sessionStorage.getItem('hoodee-edit-token')
    if (token) {
      setEditToken(token)
      setIsEditMode(true)
    }
  }, [])

  const setEditMode = (active, token) => {
    if (active && token) {
      sessionStorage.setItem('hoodee-edit-token', token)
      setEditToken(token)
      setIsEditMode(true)
    } else {
      sessionStorage.removeItem('hoodee-edit-token')
      setEditToken(null)
      setIsEditMode(false)
    }
  }

  return (
    <EditContext.Provider value={{ isEditMode, editToken, setEditMode }}>
      {children}
    </EditContext.Provider>
  )
}

export const useEdit = () => useContext(EditContext)
