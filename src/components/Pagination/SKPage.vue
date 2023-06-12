<template>
  <nav class="pagination">
    <ul>
      <li :class="{ disabled: currentPage === 1 }">
        <a @click="previousPage">&laquo;</a>
      </li>
      <li v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
        <a @click="goToPage(page)">{{ page }}</a>
      </li>
      <li :class="{ disabled: currentPage === totalPages }">
        <a @click="nextPage">&raquo;</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit('update:current-page', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:current-page', this.currentPage + 1);
      }
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.$emit('update:current-page', page);
      }
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin: 20px;
}

.pagination ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.pagination ul li {
  display: inline;
  margin-right: 5px;
}

.pagination ul li.disabled a,
.pagination ul li.active a {
  color: #ec1387;
  cursor: default;
}

.pagination ul li a {
  color: pink;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #000000;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.pagination ul li a:hover {
  background-color: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 600px) {
  .pagination ul {
    flex-direction: column;
    align-items: center;
  }

  .pagination ul li {
    margin-bottom: 5px;
  }
}
</style>
