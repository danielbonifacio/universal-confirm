process.client &&
  (function() {
    const actual = document.getElementById('bc_custom-box')
    if (actual) {
      actual.remove()
    }

    // container do confirm personalizado
    const container = document.createElement('div')
    container.id = 'bc_custom-box'

    // wrapper (caixa branca ao redor)
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    // texto que vai ser dinâmico
    const text = document.createElement('div')
    text.id = 'bc_custom-box-text'
    text.innerText = 'Você tem certeza?'

    // caixa de ações
    const actionsWrapper = document.createElement('div')
    actionsWrapper.classList.add('mt-2')
    actionsWrapper.classList.add('pt-2')
    actionsWrapper.classList.add('text-right')
    actionsWrapper.style.borderTop = '1px solid #eee'

    // botão de confirmação
    const confirmButton = document.createElement('button')
    confirmButton.id = 'bc_custom-box-confirm'
    confirmButton.innerText = 'Sim'
    confirmButton.classList.add('btn')
    confirmButton.classList.add('btn-primary')

    // botão de discartar
    const discartButton = document.createElement('button')
    discartButton.id = 'bc_custom-box-discart'
    discartButton.innerText = 'Não'
    discartButton.classList.add('btn')
    discartButton.classList.add('btn-default')
    discartButton.classList.add('mr-2')

    // instaladores
    actionsWrapper.appendChild(discartButton)
    actionsWrapper.appendChild(confirmButton)
    wrapper.appendChild(text)
    wrapper.appendChild(actionsWrapper)
    container.appendChild(wrapper)

    // transitions
    container.classList.add('start')
    wrapper.classList.add('start')

    module.exports = container
  })()
