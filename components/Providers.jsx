'use client'
import { EditProvider } from '../lib/edit-context'
import EditLock from './EditLock'
import ContentEditor from './ContentEditor'

export default function Providers({ children }) {
  return (
    <EditProvider>
      {children}
      <EditLock />
      <ContentEditor />
    </EditProvider>
  )
}
