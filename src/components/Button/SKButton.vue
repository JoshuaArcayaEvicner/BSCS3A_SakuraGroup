<template>
  <button :class="computedClasses" @click="$emit('click')">
    <slot v-if="!label"></slot>
    <span v-else>{{ label }}</span>
  </button>
</template>
  
<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (value) => {
        return ["primary", "dark", "light", "pink1", "pink2"].includes(value);
      },
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedClasses() {
      return {
        button: true,
        [`color-${this.color}`]: true,
      };
    },
  },
};
</script>
  
<style>
.button {
  background-color: #FF0090;
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  border-color: black;
  cursor: pointer;
}

.color-primary {
  background-color: #FFA6C1;
  color: rgb(0, 0, 0);
}

.color-dark {
  background-color: #d40f4e;
  color: rgb(0, 0, 0);
}

.color-light {
  background-color: #e78fa9;
  color: rgb(0, 0, 0);
}

.color-pink1 {
  background-color: #ab546e;
  color: rgb(0, 0, 0);
}

.color-pink2 {
  background-color: #ffc4d6;
  color: rgb(0, 0, 0);
}

.button:hover {
  background-color: #a96db9; /* Change to the desired hover color */
}
</style>