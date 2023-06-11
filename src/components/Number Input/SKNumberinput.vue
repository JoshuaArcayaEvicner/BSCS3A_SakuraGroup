<template>
    <input type="number" class="number-input" :min="min" :max="max" :step="step">
</template>
  
  <script>
  export default {
    name: 'NumberInput',
    props: {
      value: {
        type: Number,
        required: true,
      },
      min: {
        type: Number,
        default: undefined,
      },
      max: {
        type: Number,
        default: undefined,
      },
      step: {
        type: Number,
        default: 1,
      },
    },
  };
  </script>
  
  <style>
  .number-input {
    padding: 5px;
    border: 1px solid #FF0090;
    border-radius: 5px;
  }
  </style>