import createElement from './lib/createElement'

export default function Header() {
  const header = createElement({ type: 'header', className: 'header' })
  header.innerHTML = `<h1>API randomizer</h1>`
  document.body.appendChild(header)
  return header
}
