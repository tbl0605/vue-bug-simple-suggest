<template>
  <ValidationProvider
    v-slot="{ errors }"
    :tag="tag"
    :mode="mode"
    :rules="rules"
    :name="name"
    :vid="vid"
  >
    <b-form-input
      ref="input"
      v-model="localMutableValue"
      :autofocus="!!$attrs['autofocus'] || inputFocus"
      v-bind="$attrs"
      :class="inputClass"
      :style="inputStyle"
      :type="type"
      :placeholder="placeholder"
      v-on="inputListenersDynamic"
    />
    <small
      v-if="helpText != null && helpText !== ''"
      :class="helpClass"
      :style="helpStyle"
      >{{ helpText }}</small
    >
    <div
      v-if="showAnyErrorMsg && errors.length > 0"
      :class="errorClass"
      :style="errorStyle"
    >
      {{ errorText || errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'VeeInput',
  inject: {
    VeeInputMode: { default: undefined }
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    mode: {
      type: [String, Function],
      default: undefined
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    vid: {
      type: String,
      default: undefined
    },
    inputClass: {
      type: String,
      default: undefined
    },
    inputStyle: {
      type: String,
      default: undefined
    },
    inputFocus: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: undefined
    },
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: [String, Number]
    },
    showAnyErrorMsg: {
      type: Boolean,
      default: true
    },
    helpText: {
      type: String,
      default: undefined
    },
    helpClass: {
      type: String,
      default: 'form-text text-muted'
    },
    helpStyle: {
      type: String,
      default: undefined
    },
    errorText: {
      type: String,
      default: undefined
    },
    errorClass: {
      type: String,
      default: undefined
    },
    errorStyle: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    }
  },
  computed: {
    localMutableValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', this.formatValue(newValue));
      }
    },
    inputListenersDynamic: function () {
      // eslint-disable-next-line no-unused-vars
      const newListeners = (({ input, change, ...o }) => o)(this.$listeners);
      return newListeners;
    }
  },
  methods: {
    formatValue(val) {
      return val.toUpperCase();
    }
  }
};
</script>
