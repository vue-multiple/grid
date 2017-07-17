export default {
  name: 'VmRow',

  componentName: 'VmRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    direction: {
      type: String,
      default: 'row'
    },
    wrap: {
      type: String,
      default: 'wrap'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    content: {
      type: String,
      default: 'start'
    },
    className: String
  },

  computed: {
    style () {
      var ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    }
  },

  render (h) {
    return h(this.tag, {
      class: [
        'vm-row',
        { 'vm-row-flex': this.type === 'flex' },
        this.direction !== 'row' ? `is-direction-${this.direction}` : '',
        this.wrap !== 'wrap' ? `is-wrap-${this.wrap}` : '',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !=='top' ? `is-align-${this.align}` : '',
        `is-content-${this.content}`,
        this.className
      ],
      style: this.style
    }, this.$slots.default)
  }
}