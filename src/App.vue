<template>
  <SKButton label="HELLO SAKURA!" color="primary"></SKButton>
  <SKButton label="HELLO SAKURA!" color="light"></SKButton>
  <SKButton label="HELLO SAKURA!" color="dark"></SKButton>
  <SKButton label="HELLO SAKURA!" color="pink1"></SKButton>
  <SKButton label="HELLO SAKURA!" color="pink2"></SKButton>

  <SKNumberinput :min="0" :max="100" :step="1" color="primary" />
  <SKNumberinput :min="0" :max="100" :step="2" color="dark" />
  <SKNumberinput :min="0" :max="100" :step="3" color="light" />
  <SKNumberinput :min="0" :max="100" :step="4" color="pink1" />
  <SKNumberinput :min="0" :max="100" :step="5" color="pink2" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
