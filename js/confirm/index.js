/**
 * Universal Confirm Component
 * @author Daniel Bonifacio <danielbonifacio@outlook.com>
 */

const template = require('./template')
/**
 * querySelectorAll + getElementById helper
 * @param {string} query query or element id to find
 */
const getNode = query =>
  document.getElementById(query) || document.querySelectorAll(query)

// Append the component template on DOM
const appendTemplate = () => {
  document.body.appendChild(template)
}

// Hides the container from DOM (do not remove it)
const hideContainer = container => container.classList.remove('show')

// Library exportation
const confirm = {
  install() {
    appendTemplate()
  },
  ask(message) {
    return new Promise((resolve, reject) => {
      // nodes
      const text = getNode('bc_custom-box-text')
      const confirm = getNode('bc_custom-box-confirm')
      const discart = getNode('bc_custom-box-discart')
      const container = getNode('bc_custom-box')

      // confirm message
      text.innerText = message || 'Are you sure?'

      // show
      container.classList.add('show')

      // on ok click
      confirm.addEventListener('click', event => {
        resolve(true)
        hideContainer(container)
      })

      // on cancel click
      discart.addEventListener('click', event => {
        resolve(false)
        hideContainer(container)
      })
    })
  }
}

// autoinstall (works on nuxt)
if (process.client) {
  confirm.install()
}

export default confirm
