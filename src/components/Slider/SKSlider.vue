<template>
    <input type="range" class="slider" v-model="value" :min="min" :max="max" :step="step">
  </template>
  
  <script>
  export default {
    name: 'Slider',
    props: {
      value: {
        type: Number,
        required: true,
      },
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
      step: {
        type: Number,
        default: 1,
      },
    },
  };
  </script>
  
  <style>
  .slider {
    width: 100%;
  }
  </style>