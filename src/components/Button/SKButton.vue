<template>
    <button class="button">{{ label }}</button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: false,
        default: undefined,
      },
    },
  };
  </script>
  
  <style>
  .button {
    background-color: #FF0090;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>