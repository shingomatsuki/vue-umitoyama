<script>
import Card from "~/components/Card"

export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="card-list flex">
    <card
      class="card"
      v-for="post in posts"
      :title="post.title"
      :category="post.category"
      :tags="post.tags"
      :date="post.date"
      :slug="post.slug"
      :key="post.id"
    />
  </div>
</template>

<style lang="scss" scoped></style>
