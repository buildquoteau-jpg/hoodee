'use client'
import { useEffect } from 'react'
import { useEdit } from '../lib/edit-context'

// Elements within <main> that become editable in edit mode.
// Ordered from most to least specific so that nested matches don't double-up.
const SELECTORS = [
  'main h1',
  'main h2',
  'main h3',
  'main .section-label',
  'main .stat-block__value',
  'main .stat-block__label',
  'main .product-card__label',
  'main .gallery-item__caption',
  'main p',
  'main li',
].join(', ')

export default function ContentEditor() {
  const { isEditMode, editToken } = useEdit()

  useEffect(() => {
    if (!isEditMode) return

    const page = window.location.pathname
    const handlers = new Map()

    fetch(`/api/content?page=${encodeURIComponent(page)}`)
      .then(r => r.json())
      .then(pageContent => {
        const elements = document.querySelectorAll(SELECTORS)

        elements.forEach((el, i) => {
          // Skip elements that contain block-level children (e.g. a <p> wrapping a <div>)
          if (el.querySelector('h1,h2,h3,h4,p,ul,ol,div,section,article')) return

          const key = `${el.tagName.toLowerCase()}-${i}`

          // Apply any saved override
          if (pageContent[key] !== undefined) {
            el.innerHTML = pageContent[key]
          }

          el.setAttribute('contenteditable', 'true')
          el.setAttribute('spellcheck', 'true')

          const handleBlur = () => {
            fetch('/api/content', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'x-edit-token': editToken || '',
              },
              body: JSON.stringify({ page, key, value: el.innerHTML }),
            }).catch(() => {})
          }

          el.addEventListener('blur', handleBlur)
          handlers.set(el, handleBlur)
        })
      })
      .catch(() => {})

    return () => {
      handlers.forEach((handler, el) => {
        el.removeEventListener('blur', handler)
        el.removeAttribute('contenteditable')
        el.removeAttribute('spellcheck')
      })
    }
  }, [isEditMode, editToken])

  if (!isEditMode) return null

  return (
    <style>{`
      main [contenteditable="true"] {
        outline: 1px dashed rgba(122, 64, 48, 0.4);
        border-radius: 2px;
        cursor: text;
      }
      main [contenteditable="true"]:hover {
        outline: 1px dashed rgba(122, 64, 48, 0.7);
      }
      main [contenteditable="true"]:focus {
        outline: 2px solid #7A4030 !important;
        background: rgba(122, 64, 48, 0.03);
      }
    `}</style>
  )
}
