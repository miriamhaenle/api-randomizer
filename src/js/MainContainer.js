import createElement from './lib/createElement'
import Button from './Button'
import APIContainer from './APIContainer'
import Teaser from './Teaser'

export default function MainContainer() {
  const main = createElement({ type: 'div', className: 'mainContainer' })
  Teaser({ target: main })
  Button(main, fetchData)
  document.body.appendChild(main)

  return main

  function fetchData() {
    fetch('https://api.publicapis.org/random?auth=null')
      .then((response) => response.json())
      .then((data) =>
        APIContainer({
          className: 'randomizer',
          id: 'randomApiEl',
          apiData: data,
          target: main,
        })
      )
      .catch((error) =>
        console.error('There has been an error fetching the data', error)
      )
  }
}
