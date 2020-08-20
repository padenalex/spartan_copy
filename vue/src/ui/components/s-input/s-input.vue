<script>
import { SIcon } from '../s-icon'
import { SLabel } from '../s-label'
import { SMessages } from '../s-messages'

export default {
  name: 's-input',

  components: {
    SIcon,
    SLabel,
    SMessages
  },

  props: {
    appendIcon: {
      default: '',
      required: false,
      type: String
    },
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    hideDetails: {
      default: false,
      required: false,
      type: [Boolean, String]
    },
    id: {
      default: '',
      required: false,
      type: String
    },
    label: {
      default: '',
      required: false,
      type: String
    },
    loading: {
      default: false,
      required: false,
      type: Boolean
    },
    messages: {
      default: () => [],
      required: false,
      type: Array
    },
    name: {
      default: '',
      required: false,
      type: String
    },
    placeholder: {
      default: '',
      required: false,
      type: String
    },
    prependIcon: {
      default: '',
      required: false,
      type: String
    },
    readonly: {
      default: false,
      required: false,
      type: Boolean
    },
    required: {
      default: false,
      required: false,
      type: Boolean
    },
    type: {
      default: 'text',
      required: false,
      type: String
    },
    value: {
      default: '',
      required: false,
      type: String
    }
  },

  data () {
    return {
      lazyValue: this.value,
      hasMouseDown: false,
      isFocused: false
    }
  },

  computed: {
    classes () {
      return {
        's-input': true,
        's-input--dirty': this.isDirty,
        's-input--disabled': this.isDisabled,
        's-input--focused': this.isFocused,
        's-input--hide-details': this.hideDetails,
        's-input--label-active': this.isLabelActive,
        's-input--loading': this.loading !== false && this.loading != null,
        's-input--readonly': this.isReadonly
      }
    },

    computedId () {
      return this.id || `input-${ this._uid }`
    },

    showDetails () {
      return this.hideDetails === false || (this.hideDetails === 'auto' && this.hasDetails)
    },

    hasDetails () {
      return this.messages.length > 0
    },

    hasLabel () {
      return !!this.label
    },

    isDirty () {
      return this.lazyValue.toString().length > 0
    },

    isLabelActive () {
      return this.isDirty
    },

    listeners () {
      const listeners = {
        ...this.$listeners,
        click: this.onClick,
        blur: this.onBlur,
        focus: this.onFocus,
        input: this.onInput,
        keydown: this.onKeyDown,
        mousedown: this.onMouseDown,
        mouseup: this.onMouseUp
      }

      delete listeners.change

      return listeners
    }
  },

  watch: {
    value (val) {
      this.lazyValue = val
    }
  },

  methods: {
    focus () {
      this.onFocus()
    },

    blur () {
      this.$refs.input && this.$refs.input.blur()
    },

    onBlur (e) {
      this.isFocused = false
      this.$nextTick(() => this.$emit('blur', e))
    },

    onClick (e) {
      if (this.isDisabled || this.isFocused || !this.$refs.input) return

      this.$emit('click', e)

      this.$refs.input.focus()
    },

    onInput (e) {
      const { value } = e.target
      this.lazyValue = value
      this.$emit('input', value)
    },

    onFocus (e) {
      if (!this.$refs.input) return

      if (!this.isFocused) {
        this.isFocused = true
        this.$emit('focus', e)
      }
    },

    onKeyDown (e) {
      this.$emit('keydown', e)
    },

    onMouseDown (e) {
      if (e.target !== this.$refs.input) {
        e.preventDefault()
        e.stopPropagation()
      }

      this.hasMouseDown = true
      this.$emit('mousedown', e)
    },

    onMouseUp (e) {
      this.hasMouseDown = false
      this.$emit('mouseup', e)
    }
  }
}
</script>

<template>
  <div :class="classes">
    <div
      v-if="$slots.prepend || prependIcon"
      class="s-input__prepend-slot"
    >
      <slot
        v-if="$slots.prepend && !prependIcon"
        name="prepend"
      />
      <s-icon
        v-if="prependIcon && !$slots.prepend"
        class="s-input__icon"
        :name="prependIcon"
        size="22px"
      />
    </div>
    <div class="s-input__control">
      <div class="s-input__wrap">
        <s-label
          v-if="!!label"
          class="s-input__label"
          :value="label"
          :html-for="computedId"
        />
        <input
          :id="computedId"
          ref="input"
          class="s-input__field"
          :name="name"
          :placeholder="placeholder"
          :readonly="readonly"
          :required="required"
          :disabled="disabled"
          :type="type"
          :value="lazyValue"
          v-on="listeners"
        >
      </div>
      <div
        v-if="showDetails"
        class="s-input__details"
      >
        <s-messages :messages="messages" />
      </div>
    </div>
    <div
      v-if="$slots.append || appendIcon"
      class="s-input__append-slot"
    >
      <slot
        v-if="$slots.append && !appendIcon"
        name="append"
      />
      <s-icon
        v-if="appendIcon && !$slots.append"
        class="s-input__icon"
        :name="appendIcon"
        size="22px"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-input {
  display: flex;
  width: 100%;
  margin-top: 6px;
  padding-top: var(--space-2x);
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &__prepend-slot {
    margin-right: var(--space);
    margin: var(--space) var(--space) var(--space) 0;
    height: 20px;
  }

  &__control {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__label {
    color: var(--accent-3);
    cursor: text;
    left: 0;
    line-height: 20px;
    padding: var(--space) 0;
    position: absolute;
    right: auto;
    transform-origin: top left;
    transition: .3s cubic-bezier(.25,.8,.5,1);
  }

  &__field {
    align-items: center;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--accent-3);
    color: var(--foreground);
    display: flex;
    padding: var(--space) 0;
    width: 100%;
    line-height: 20px;

    &:focus {
      background-color: transparent;
      border-bottom: 1px solid var(--foreground);
      color: var(--foreground);
      outline: none;
    }
  }

  &__details {
    align-items: center;
    display: flex;
    font-size: var(--font-sm);
    margin-top: var(--space);
    min-height: var(--space-2x);
    width: 100%;
  }

  &__append-slot {
    margin-left: var(--space);
    margin: var(--space) var(--space) var(--space) 0;
    height: 20px;
  }

  &--focused &__label {
    color: var(--foreground);
    transform: translateY(-17px) scale(.85);
    transition: .3s cubic-bezier(.25,.8,.5,1);
  }

  &--label-active  &__label {
    transform: translateY(-17px) scale(.85);
    transition: .3s cubic-bezier(.25,.8,.5,1);
  }
}
</style>
