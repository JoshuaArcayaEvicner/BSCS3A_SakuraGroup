<template>
  <SKButton label="HELLO SAKURA!" color="primary"></SKButton>
  <SKButton label="HELLO SAKURA!" color="light"></SKButton>
  <SKButton label="HELLO SAKURA!" color="dark"></SKButton>
  <SKButton label="HELLO SAKURA!" color="pink1"></SKButton>
  <SKButton label="HELLO SAKURA!" color="pink2"></SKButton>
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
