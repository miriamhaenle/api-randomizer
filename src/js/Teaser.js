import createElement from './lib/createElement'

export default function Teaser({ target }) {
  const el = createElement({ type: 'section', className: 'teaser' })
  el.innerText = 'Please push the button below to start the api randomizer'
  target.appendChild(el)

  return el
}
