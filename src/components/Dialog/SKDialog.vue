<template>
    <div class="dialog" v-if="visible">
      <div class="dialog-overlay" @click="closeDialog"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>{{ title }}</h2>
          <button class="close-button" @click="closeDialog">&times;</button>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <button class="dialog-button" @click="closeDialog">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'Dialog',
    props: {
      title: {
        type: String,
        required: true,
      },
      visible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style>
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
 .dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent; /* Pink color */
}

.dialog-content {
  background-color: #ffffff;
  max-width: 400px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

  
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .dialog-header h2 {
    margin: 0;
  }
  
  .close-button {
    background: none;
    border: none;
    color: #999999;
    cursor: pointer;
    font-size: 18px;
  }
  
  .dialog-body {
    margin-bottom: 10px;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .dialog-button {
    padding: 8px 12px;
    background-color: #dd189f;
    border: none;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  