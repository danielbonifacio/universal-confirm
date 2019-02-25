# Universal Confirm

A simple confirm action universal component, made to ease things.

## Why use it

Pure javascript lightweight library, 100% independent and customizable. You can call it programatically, without worry to connect DOM events with your framework.

## How to use

``` js
import 'path/to/universal-confirm/confirm.scss' // needs sass-loader (or use .css version)
import { ask } from 'path/to/universal-confirm'

ask('Do you want to do this?')
  .then(res => {
    if (res === true) {
      alert('I knew you want it!')
    } else {
      alert('Ok. Maybe later!')
    }
  })
```

You can use it with javascript frameworks, like react or vue:

``` js
import Vue from 'vue'
import confirm from 'path/to/universal-confirm'

Vue.prototype.$confirm = confirm.ask
```

``` js
export default {
  methods: {
    async askDeletion({ name, id }) {
      const toDelete = await this.$confirm(`Do you rlly want to remove ${name} from users list?`)

      toDelete
        ? this.deleteUser(id)
        : this.$alert('Ok! It\'ll continue on base.')
    }
  }
  // ...
}
```

*PS: If you're using nuxt or another SSR engine in your project, make sure to only load this on client version, or manually solve conflicts.*

## How to customize it

By default, it uses bootstrap classes and has an container, an wrapper, an text space and actions space, with Ok or Cancel actions.

You can add or remove classes and modify the order directly from `template.js` file. Don't worry, it's just another vanilla way to create components from scratch.

## Credits

- [Daniel Bonifacio](https://danielbonifacio.com.br) Developer
- [Bootstrap](https://getbootstrap.com/) Base UI Framework

