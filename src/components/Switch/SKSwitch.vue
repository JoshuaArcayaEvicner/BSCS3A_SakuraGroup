<template>
    <div class="switch" :class="{ checked: isChecked }" @click="toggleSwitch">
      <div class="switch-handle"></div>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        isChecked: false,
      };
    },
    methods: {
      toggleSwitch() {
        this.isChecked = !this.isChecked;
        this.$emit('change', this.isChecked);
      },
    },
  };
  </script>
  
  <style>
  .switch {
    position: relative;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #fff;
    transition: transform 0.3s;
  }
  
  .switch.checked {
    background-color: #ec2ec3;
  }
  
  .switch.checked .switch-handle {
    transform: translateX(30px);
  }
  </style>
  