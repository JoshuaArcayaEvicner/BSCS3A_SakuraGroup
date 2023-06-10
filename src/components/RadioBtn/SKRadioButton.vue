<template>
    <div class="radio-group">
      <label v-for="option in options" :key="option.value" class="radio-label">
        <input type="radio" v-model="selectedOption" :value="option.value" class="radio-input">
        <span class="radio-text">{{ option.label }}</span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedOption: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .radio-group {
    display: flex;
    flex-direction: column;
  }
  
  .radio-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .radio-input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 50%;
    outline: none;
    margin-right: 8px;
    cursor: pointer;
  }
  
  .radio-input:checked {
    border-color: #7F5539;
  }
  
  .radio-text {
    color: #9C6644;
  }
  </style>
  