import { create } from 'domain'
import createElement from './lib/createElement'

export default function Button(target, onClick) {
  const button = createElement({
    type: 'button',
    className: 'button',
  })
  button.innerText = 'return random api'
  button.addEventListener('click', onClick)
  target.appendChild(button)
  return button
}
