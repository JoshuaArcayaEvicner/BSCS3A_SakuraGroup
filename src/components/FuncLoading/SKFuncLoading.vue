<template>
    <div class="loading-container" v-if="loading">
      <div class="loading-spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SKLoading',
    props: {
      loading: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .loading-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .loading-spinner {
    border: 4px solid pink;
    border-left-color: #FF0090;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  </style>
  