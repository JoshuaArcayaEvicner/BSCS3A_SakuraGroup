<template>
    <div>
      <label>
        <input
          type="checkbox"
          :checked="isChecked"
          :disabled="isDisabled"
          @change="handleChange"
        />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      }
    },
    computed: {
      isChecked: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit("input", newValue);
        }
      },
      isDisabled() {
        return this.disabled;
      }
    },
    methods: {
      handleChange(event) {
        if (!this.isDisabled) {
          this.isChecked = event.target.checked;
        }
      }
    }
  };
  </script>
  