<template>
    <ul class="list">
      <li v-for="item in items" :key="item.id">{{ item.label }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'SKList',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .list {
    list-style-type: none;
    padding: 0;
  }
  
  .list li {
    margin-bottom: 5px;
    color: #E11299;
  }
  </style>