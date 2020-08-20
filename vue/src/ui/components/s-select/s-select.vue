<script>
export default {
  name: 's-select',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    name: {
      required: true,
      type: String
    },
    options: {
      required: true,
      type: Array
    },
    secondary: {
      default: false,
      requireD: false,
      type: Boolean
    },
    secondaryDark: {
      default: false,
      requireD: false,
      type: Boolean
    },
    value: {
      default: '',
      required: false,
      type: String
    }
  },

  data () {
    return {
      lazyValue: this.value
    }
  },

  computed: {
    classes () {
      return {
        's-select': true,
        's-select--disabled': this.disabled,
        's-select--secondary': this.secondary,
        's-select--secondary-dark': this.secondaryDark
      }
    },

    listeners () {
      const listeners = {
        change: this.onChange
      }

      return listeners
    }
  },

  watch: {
    value (val) {
      this.lazyValue = val
    }
  },

  methods: {
    onChange (e) {
      const { value } = e.target
      this.lazyValue = value
      this.$emit('change', value)
    }
  }
}
</script>

<template>
  <select
    :class="classes"
    :name="name"
    :value="lazyValue"
    v-on="listeners"
  >
    <s-icon
      v-if="prependIcon"
      :name="prependIcon"
      class="s-button__prepend-icon"
    />
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      class="s-select__option"
    >
      {{ option.content }}
    </option>
    <s-icon
      v-if="appendIcon"
      :name="appendIcon"
      class="s-button__append-icon"
    />
  </select>
</template>

<style lang="scss" scoped>
.s-select {
  box-sizing: border-box;
  align-items: center;
  background-color: transparent;
  border-radius: 2px;
  border: none;
  color: var(--accent-3);
  display: inline-block;
  justify-content: center;
  padding: var(--space) var(--space-2x);

  &:hover {
    color: var(--foreground);
    cursor: pointer;
  }

  &__prepend-icon {
    margin-right: var(--space-2x);
  }

  &__append-icon {
    margin-left: var(--space-2x);
  }

  &--disabled {
    color: transparent;
    background-color: var(--accent-2);
    border: 1px solid var(--acent-2);
    cursor: not-allowed;
    pointer-events: none;

    &:hover {
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  &--secondary {
    background-color: transparent;
    border: 1px solid var(--accent-3);
    color: var(--accent-3);

    &:hover {
      background-color: var(--foreground);
      border: 1px solid var(--foreground);
      color: var(--background);
    }
  }

  &--secondary-dark {
    background-color: transparent;
    border: 1px solid var(--foreground);
    color: var(--foreground);

    &:hover {
      background-color: var(--foreground);
      color: var(--background);
    }
  }
}
</style>
