<template>
  <label :class="computedClasses">
    <input type="radio" :value="value" :name="name" v-model="selectedValue" @change="handleChange" />
    <span class="label-text">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedValue: this.checked ? this.value : null,
    };
  },
  computed: {
    computedClasses() {
      return {
        "radio-button": true,
        checked: this.selectedValue === this.value,
      };
    },
  },
  methods: {
    handleChange() {
      this.$emit("input", this.selectedValue);
    },
  },
};
</script>

<style scoped>
.radio-button {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: rgb(221, 42, 120);
}

.radio {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #000000;
  border-radius: 50%;
  margin-right: 8px;
}

.radio.checked {
  background-color: #e5197b;
}

.label-text {
  font-size: 14px;
  color:#e5197b;
}
</style>