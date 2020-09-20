import createElement from './lib/createElement'

export default function APIContainer({ className, id, apiData, target }) {
  const oldEl = document.querySelector('#randomApiEl')
  if (oldEl) {
    oldEl.remove()
  }

  const el = createElement({
    type: 'section',
    className,
    id,
  })

  const title = apiData.entries[0].API
  const description = apiData.entries[0].Description
  const link = apiData.entries[0].Link

  el.innerHTML = `<h2>${title}</h2>
  <p>${description}</p>
  <a href="${link}" target="_blank">Go to API </a>`
  target.appendChild(el)

  return el
}
