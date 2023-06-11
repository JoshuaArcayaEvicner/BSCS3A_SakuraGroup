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
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.color-primary {
  background-color: #FFA6C1;
  color: white;
}

.color-dark {
  background-color: #FF5D8F;
  color: white;
}

.color-light {
  background-color: #FFACC5;
  color: black;
}

.color-pink1 {
  background-color: #FF87AB;
  color: white;
}

.color-pink2 {
  background-color: #FF97B7;
  color: white;
}
</style>