<template lang="pug">
  .big-data(v-if='value' @dblclick='toDialog' :class='(options.minimized) ? "mini":""')
    entity-icon.bd-icon(:entity='entity' :value='value' :options='{ hideTooltip:true }')
    .bd-main
      .bd-title(:style='titleStyle') {{entity.title}}
        small.subtitle.gray(v-if='entity.subtitle') {{entity.subtitle}}
      entity-value.bd-data(:entity='entity' :value='value')

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import EntityMixin from '../mixins/Entity'
export default {
  name: 'big-data',
  mixins: [
    EntityMixin
  ],
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default () {
        return {
          minimized: false
        }
      }
    }
  },
  data () {
    return {
      timer: null,
      time: 0,
      seconds: 4
    }
  },
  computed: {
    ...mapGetters('app/', {
      types: 'getTypes'
    }),
    entity () {
      return this.getEntity()(this.name)
    },
    value () {
      return this.getTotalEntity()(this.name)
    },
    dialog () {
      return this.getDialog()(this.types.TOTAL, this.name)
    },
    isMaximized () {
      if (this.dialog) return this.dialog.length
      return 0
    },
    color () {
      return this.entity.color(this.value)
    },
    titleStyle () {
      let style = {}
      let color = this.color
      if (color) style.color = color
      return style
    }
  },
  methods: {
    ...mapGetters('app/entity', [
      'getEntity',
      'getTotalEntity'
    ]),
    ...mapGetters('app/', [
      'getDialog'
    ]),
    ...mapActions('app/', [
      'createDialog'
    ]),
    toDialog () {
      let id = this.name
      let type = this.types.TOTAL
      let width = this.$el.clientWidth
      let height = this.$el.clientHeight
      let rect = this.$el.getBoundingClientRect()
      let left = rect.left + 10
      let top = rect.top + 10
      this.createDialog({ id, type, width, height, left, top })
    }
  }
}
</script>
<style lang="stylus">
  @import '../lib/styl/vars.styl'
  @import '../lib/styl/mixins.styl'

  $icon-size = 3em
  $mini-icon-size = ($icon-size / 2)

  .big-data {
    box()
    display flex
    align-items center
    user-select none
    width 100%
    height auto
    z-index 100
    pointer-events all
    overflow visible

    .bd-icon {
      width $icon-size
      height @width
      opacity 0.6
      box-sizing border-box
      margin-right 0.125rem
      margin-left 1em

      .svg-icon {
        width $icon-size
        height @width
        fill $txt-color
      }
    }

    .bd-main {
      width auto
      display inline-block
      margin-left 1em

      // border blue solid 1px
      .bd-title {
        small-titles()
      }

      .bd-title small {
        &::before {
          content ' '
        }
      }

      .bd-data {
        font-size 2.5rem
        line-height @font-size * 1.2
        min-height @font-size
      }

      .bd-data.big-number {
        font-size 1.25rem
      }
    }
  }

  // minimized
  .big-data.mini {
    min-height auto

    .bd-main {
      display flex
      justify-content center

      .bd-title {
        display flex
        justify-content center
        flex-direction column
        margin 0
        margin-right 0.5em
        font-size 80%
      }
    }

    .bd-data {
      font-size 1.25rem
    }

    .bd-icon {
      margin-right 0
      width $mini-icon-size
      height @width

      .svg-icon {
        width $mini-icon-size
        height @width
      }
    }
  }

  // as dialog
  .totals-dialog {
    background none !important
    box-shadow none !important

    .big-data {
      margin-top 0
      background lighten($bg-color, 3%)
    }

    .buttons, .dialog-header {
      position absolute
      top 1em
      right 0
      height 1em
      margin 0
    }

    button.close {
      position absolute
      z-index 1000
      pointer-events all
      width 1em
      height @width
      right 0
      top -2em
    }

    .dialog-body {
      padding 0
    }
  }
</style>
