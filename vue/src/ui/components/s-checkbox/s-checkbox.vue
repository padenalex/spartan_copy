<script>
import { SIcon } from '../s-icon'
import { SLabel } from '../s-label'

export default {
  name: 's-checkbox',

  components: {
    SIcon,
    SLabel
  },

  model: {
    prop: 'checked',
    event: 'change'
  },

  props: {
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    id: {
      default: '',
      required: false,
      type: String
    },
    unsetIcon: {
      default: 'time-outline',
      required: false,
      type: String
    },
    label: {
      default: '',
      required: false,
      type: String
    },
    name: {
      default: '',
      required: false,
      type: String
    },
    checked: {
      default: false,
      required: false,
      type: Boolean
    }
  },

  data () {
    return {
      lazyChecked: this.checked
    }
  },

  computed: {
    classes () {
      return {
        's-checkbox': true,
        's-checkbox--checked': this.lazyChecked,
        's-chechbox--null': this.lazyChecked === null
      }
    },

    computedId () {
      return this.id || `checkbox-${ this._uid }`
    },

    // @TODO: Setup actual blank icon for unchecked state
    icon () {
      if (this.lazyChecked === null) return this.unsetIcon
      else if (this.lazyChecked) return 'checkmark-outline'
      else return 'blank'
    },

    listeners () {
      const listeners = {
        change: this.onChange,
        click: this.onClick
      }

      return listeners
    }
  },

  watch: {
    checked (val) {
      this.lazyChecked = val
    }
  },

  methods: {
    onClick (e) {
      this.$emit('clicked', e)
    },

    onChange (e) {
      const { checked } = e.target
      this.lazyChecked = checked
      this.$emit('change', this.lazyChecked)
    }
  }
}
</script>

<template>
  <div :class="classes">
    <i class="s-checkbox__icon-wrap">
      <s-icon
        class="s-checkbox__icon"
        :name="icon"
        stroke-width="46px"
        size="14px"
        @click="$refs.checkbox.click()"
      />
    </i>
    <input
      :id="computedId"
      ref="checkbox"
      class="s-checkbox__input"
      :name="name"
      :checked="lazyChecked"
      type="checkbox"
      :label="label"
      v-on="listeners"
    >
    <s-label
      class="s-checkbox__label"
      :html-for="computedId"
      :value="label"
    />
  </div>
</template>

<style lang="scss" scoped>
.s-checkbox {
  display: flex;
  align-items: center;
  position: relative;

  &__icon-wrap {
    color: var(--foreground);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: 1px solid var(--foreground);
    height: 20px;
    left: 0;
    width: 20px;
    cursor: pointer;
    position: absolute;
  }

  &__input {
    margin-right: var(--space);
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    width: 20px;
    height: 20px;
  }

  &__label {
    cursor: pointer;
  }

  &--checked &__icon-wrap {
    background: var(--foreground);
    color: var(--background);
  }
}
</style>
