export default function createElement({ type, className, id } = {}) {
  const el = document.createElement(type)
  el.className = className
  el.id = id

  return el
}
