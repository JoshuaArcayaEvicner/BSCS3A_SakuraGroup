<template>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100,
      },
    },
  };
  </script>
  
  <style>
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #ebbce2;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #FF0090;
    transition: width 0.3s ease-in-out;
  }
  </style>
  