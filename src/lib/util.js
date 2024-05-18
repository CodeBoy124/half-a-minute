export function isPlural(/** @type {string} */ name) {
  return (
    name.includes('&') ||
    name.includes(' en ') ||
    name.includes('+') ||
    name.includes(' plus ')
  )
}