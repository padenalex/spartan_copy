/**
 * @description Creates the object with mirror key and values and prefixes values.
 * @param {Array<string>} arr Array of strings.
 * @param {string} prefix prefix.
 * @returns {Object} object with mirror keys generated from the array of strings.
 */
const reflect = (arr = [], prefix) =>
  arr.reduce((object, key) => {
    const value = prefix ? `${ prefix } ${ key }` : key
    object[key] = value

    return object
  }, {})

export { reflect }
