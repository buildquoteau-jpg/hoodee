'use client'
import { useState } from 'react'
import { useEdit } from '../lib/edit-context'

export default function EditLock() {
  const { isEditMode, setEditMode } = useEdit()
  const [showModal, setShowModal] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLockClick = () => {
    if (isEditMode) {
      setEditMode(false)
    } else {
      setError('')
      setPassword('')
      setShowModal(true)
    }
  }

  const handleUnlock = async () => {
    if (!password || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.success) {
        setEditMode(true, data.token)
        setShowModal(false)
        setPassword('')
      } else {
        setError('Incorrect password.')
      }
    } catch {
      setError('Could not connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Lock / pencil button */}
      <button
        onClick={handleLockClick}
        title={isEditMode ? 'Exit edit mode' : 'Owner login'}
        aria-label={isEditMode ? 'Exit edit mode' : 'Owner login'}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: isEditMode ? '#7A4030' : '#1C1918',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(28,25,24,0.35)',
          zIndex: 9999,
          opacity: 0.82,
          transition: 'opacity 150ms ease, background 250ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.82')}
      >
        {isEditMode ? (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        ) : (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        )}
      </button>

      {/* Editing badge */}
      {isEditMode && (
        <div
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: 30,
            right: 84,
            background: '#7A4030',
            color: 'white',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.06em',
            padding: '5px 11px',
            borderRadius: 20,
            zIndex: 9999,
            pointerEvents: 'none',
            opacity: 0.9,
          }}
        >
          EDITING
        </div>
      )}

      {/* Password modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Owner login"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(28,25,24,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '0 24px',
          }}
          onClick={e => { if (e.target === e.currentTarget) { setShowModal(false) } }}
        >
          <div style={{
            background: '#FFFFFF',
            borderRadius: 8,
            padding: '32px 28px',
            width: '100%',
            maxWidth: 360,
            boxShadow: '0 12px 40px rgba(28,25,24,0.22)',
          }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: '#1C1918', marginBottom: 6 }}>
              Owner Login
            </h2>
            <p style={{ fontSize: 13, color: '#8C7B72', marginBottom: 22 }}>
              Enter your password to enable page editing.
            </p>

            <input
              type="password"
              placeholder="Password"
              value={password}
              autoFocus
              onChange={e => { setPassword(e.target.value); setError('') }}
              onKeyDown={e => e.key === 'Enter' && handleUnlock()}
              style={{
                width: '100%',
                padding: '10px 13px',
                border: `1.5px solid ${error ? '#c0392b' : '#C4BBAF'}`,
                borderRadius: 4,
                fontSize: 15,
                color: '#1C1918',
                outline: 'none',
                marginBottom: error ? 8 : 20,
                fontFamily: 'inherit',
              }}
            />

            {error && (
              <p style={{ fontSize: 13, color: '#c0392b', marginBottom: 16 }}>{error}</p>
            )}

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={handleUnlock}
                disabled={loading || !password}
                style={{
                  flex: 1,
                  padding: '10px 0',
                  background: loading || !password ? '#C4BBAF' : '#7A4030',
                  color: 'white',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: loading || !password ? 'default' : 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 150ms ease',
                }}
              >
                {loading ? 'Unlocking…' : 'Unlock'}
              </button>
              <button
                onClick={() => { setShowModal(false); setPassword(''); setError('') }}
                style={{
                  padding: '10px 16px',
                  background: '#F4F1EE',
                  color: '#1C1918',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
