<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <article class="card">
    <si-category-icon class="category" :category="category"/>
    <nuxt-link class="post-link" :to="{ name: 'posts-slug', params: { slug: slug } }">
      <time class="date" :datetime="date">{{ date }}</time>
      <h2 class="title">{{ title }}</h2>
    </nuxt-link>
    <div class="tags">
      <span class="tag" v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>