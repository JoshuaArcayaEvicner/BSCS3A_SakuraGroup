<template>
  <div class="text-component">
    <span :class="textClass">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'black',
    },
    fontSize: {
      type: String,
      default: '16px',
    },
  },
  computed: {
    textClass() {
      return `text-${this.color}`;
    },
  },
};
</script>

<style>
.text-component {
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 10px;
}

.text-black {
  color: black;
}

.text-pink1 {
  color: rgb(239, 10, 129);
}

.text-pink2 {
  color: rgb(224, 140, 178);
}

.text-component span {
  font-size: inherit;
}
</style>
