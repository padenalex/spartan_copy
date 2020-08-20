<script>
import { SIcon } from '../s-icon'

export default {
  name: 's-button',

  components: { SIcon },

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
    error: {
      default: false,
      required: false,
      type: Boolean
    },
    icon: {
      default: '',
      required: false,
      type: String
    },
    iconSize: {
      default: 'large',
      required: false,
      type: String
    },
    iconStrokeWidth: {
      default: '32px',
      required: false,
      type: String
    },
    secondary: {
      default: false,
      required: false,
      type: Boolean
    },
    secondaryDark: {
      default: false,
      required: false,
      type: Boolean
    },
    success: {
      default: false,
      required: false,
      type: Boolean
    },
    prependIcon: {
      default: '',
      required: false,
      type: String
    },
    primary: {
      default: false,
      required: false,
      type: Boolean
    },
    to: {
      default: '',
      required: false,
      type: String
    },
    href: {
      default: '',
      required: false,
      type: String
    },
    target: {
      default: '',
      required: false,
      type: String
    },
    warning: {
      default: false,
      required: false,
      type: Boolean
    }
  },

  computed: {
    classes () {
      return {
        's-button': true,
        's-button--disabled': this.disabled,
        's-button--error': this.error,
        's-button--icon': this.icon,
        's-button--primary': this.primary,
        's-button--secondary': this.secondary,
        's-button--secondary-dark': this.secondaryDark,
        's-button--success': this.success,
        's-button--warning': this.warning
      }
    }
  },

  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :class="classes"
  >
    <s-icon
      v-if="prependIcon"
      :name="prependIcon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__prepended-icon"
    />
    <s-icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__icon"
    />
    <span
      v-else
      class="s-button__content"
    >
      <slot />
    </span>
    <s-icon
      v-if="appendIcon"
      :name="appendIcon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__appended-icon"
    />
  </a>

  <router-link
    v-else-if="to"
    :to="to"
    :class="classes"
  >
    <s-icon
      v-if="prependIcon"
      :name="prependIcon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__prepended-icon"
    />
    <s-icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__icon"
    />
    <span
      v-else
      class="s-button__content"
    >
      <slot />
    </span>
    <s-icon
      v-if="appendIcon"
      :name="appendIcon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__appended-icon"
    />
  </router-link>

  <button
    v-else
    :class="classes"
    :disabled="disabled"
    @click="click"
  >
    <s-icon
      v-if="prependIcon"
      :name="prependIcon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__prepended-icon"
    />
    <s-icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__icon"
    />
    <span
      v-else
      class="s-button__content"
    >
      <slot />
    </span>
    <s-icon
      v-if="appendIcon"
      :name="appendIcon"
      :size="iconSize"
      :stroke-width="iconStrokeWidth"
      class="s-button__appended-icon"
    />
  </button>
</template>

<style lang="scss" scoped>

.s-button {
  align-items: center;
  background-color: transparent;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  color: var(--accent-3);
  display: inline-block;
  justify-content: center;
  padding: var(--space) var(--space-2x);
  width: 100%;

  &:hover {
    color: var(--foreground);
    cursor: pointer;
  }

  &__content {
    background-color: inherit;
    border-radius: inherit;
    color: inherit;
    cursor: inherit;
    pointer-events: inherit;
  }

  &__prepended-icon {
    margin-right: var(--space-2x);
  }

  &__appended-icon {
    margin-left: var(--space-2x);
  }

  &--icon {
    padding: 0;

    &:hover {
      padding: 0;
    }
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

  &--error {
    background-color: var(--error);
    border: 1px solid var(--error);
    color: var(--background);

    &:hover {
      background-color: transparent;
      color: var(--error);
    }
  }

  &--icon {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 30px;
    justify-content: center;
    padding: 0;
    width: 30px;
  }

  &--primary {
    background-color: var(--foreground);
    border: 1px solid var(--foreground);
    color: var(--background);

    &:hover {
      background-color: transparent;
      color: var(--foreground);
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

  &--success {
    background-color: var(--success);
    border: 1px solid var(--success);
    color: var(--background);

    &:hover {
      background-color: transparent;
      color: var(--success);
    }
  }

  &--warning {
    background-color: var(--warning);
    border: 1px solid var(--warning);
    color: var(--background);

    &:hover {
      background-color: transparent;
      color: var(--warning);
    }
  }
}
</style>
