<template>
    <div>
      <input type="text" :class="[inputStyle, inputClass]" v-model="inputText" placeholder="Enter text">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      inputStyle: {
        type: String,
        default: "input-field"
      }
    },
    data() {
      return {
        inputText: '',
      };
    },
    computed: {
      inputClass() {
        return this.inputStyle;
      }
    }
  };
  </script>
  
  <style>
  .input-field-light {
    background-color: #E6CCB2;
    padding: 10px;
    border: 1px solid #7F5539;
    border-radius: 4px;
    outline: #7F5539;
  }
  
  .input-field-dark {
    background-color: #7F5539;
    padding: 10px;
    border: 1px solid #E6CCB2;
    border-radius: 4px;
    outline: #E6CCB2;
    color: white;
  }
  
  .underlined-light {
    border: none;
    border-bottom: 1px solid #E6CCB2;
    outline: none;
  }
  
  .underlined-dark {
    border: none;
    border-bottom: 1px solid #7F5539;
    outline: none;
  }
  
  .outlined-light {
    outline: 1px solid #E6CCB2;
  }
  
  .outlined-dark {
    outline: 1px solid #7F5539;
  }
  
  .solo {
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  .solo-filled {
    background-color: #E6CCB2;
    border: none;
    outline: none;
  }
  
  .solo-inverted {
    background-color: #7F5539;
    color: #E6CCB2;
    border: none;
    outline: none;
  }
  </style>
  