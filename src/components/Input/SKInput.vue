<template>
    <div class="input-container">
      <label :for="name">{{ label }}</label>
      <input
        :type="type"
        :id="name"
        :value="value"
        @input="updateValue"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Input',
    props: {
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: [String, Number],
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value);
      },
    },
  };
  </script>
  
  <style>
  .input-container {
    margin-bottom: 10px;
  }
  
  .input-container label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input-container input {
    padding: 8px;
    border: 1px solid #df3c90;
    border-radius: 4px;
    width: 100%;
  }
  </style>
  