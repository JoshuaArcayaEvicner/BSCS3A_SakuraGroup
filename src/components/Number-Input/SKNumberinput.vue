<template>
  <input
    type="number"
    class="number-input"
    :min="min"
    :max="max"
    :step="step"
    :class="colorClass"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    step: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'dark', 'light', 'pink1', 'pink2'].includes(value);
      },
    },
  },
  computed: {
    colorClass() {
      return `number-input-${this.color}`;
    },
  },
};
</script>

<style>
.number-input {
  padding: 5px;
  border: 1px solid #FF0090;
  border-radius: 5px;
}

.number-input-primary {
  border: 1px solid black;
  background-color: #FF0090;
}

.number-input-dark {
  border: 1px solid black;
  background-color: #DB005B;
}

.number-input-light {
  border: 1px solid black;
  background-color: #BE5A83;
}

.number-input-pink1 {
  border: 1px solid black;
  background-color: #FEA1A1;
}

.number-input-pink2 {
  border: 1px solid black;
  background-color: #D14D72;
}
</style>
