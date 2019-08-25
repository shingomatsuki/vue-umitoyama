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
  <nuxt-link class="post-link flex-1 m-2" :to="{ name: 'posts-slug', params: { slug: slug } }">
    <article class="card rounded-lg shadow-lg px-4 py-4">
      <si-category-icon class="category" :category="category"/>
        <time class="date" :datetime="date">{{ date }}</time>
        <h2 class="title text-lg">{{ title }}</h2>
      <div class="tags">
        <span class="tag" v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
      </div>
    </article>
  </nuxt-link>
</template>

<style lang="scss" scoped></style>