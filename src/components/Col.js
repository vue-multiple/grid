export default {
  name: 'VmCol',

  componentName: 'VmCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    order: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    className: String
  },

  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'VmRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },

  render (h) {
    let classList = []
    let style = {}

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }

    ;['span', 'offset', 'pull', 'push', 'order'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
            ? `vm-col-${prop}-${this[prop]}`
            : `vm-col-${this[prop]}`
        )
      }
    })

    let addProps = []
    ;['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`vm-col-${size}-${this[size]}`)

        addProps.length && addProps.forEach(prop => {
          classList.push(`vm-col-${size}-${prop}-0`)
        })
      } else if (typeof this[size] === 'object') {
        let props = this[size]
        let keys = Object.keys(props)
        keys.forEach(prop => {
          if (
            ['offset', 'pull', 'push', 'order'].indexOf(prop) > -1
            && addProps.indexOf(prop) === -1
          ) {
            addProps.push(prop)
          }
          classList.push(
            prop !== 'span'
              ? `vm-col-${size}-${prop}-${props[prop]}`
              : `vm-col-${size}-${props[prop]}`
          )
        })
        addProps = addProps.filter(prop => {
          if (keys.indexOf(prop) === -1) {
            classList.push(`vm-col-${size}-${prop}-0`)
          }
          return keys.indexOf(prop) > -1
        })
      }
    })

    return h(this.tag, {
      class: ['vm-col', classList, this.className],
      style
    }, this.$slots.default)
  }
}