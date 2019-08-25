<script>
//import Container from "~/components/Container.vue"
//import PageTitle from "~/components/PageTitle.vue"
import CardList from "~/components/CardList.vue"

import Posts from "~/assets/recipe/posts.json"

export default {
  components: { Posts, CardList },
  data() {
    return {
      posts: Posts
    }
  }
}
</script>

<template>
  <section>
      <!-- <page-title title="posts"/> -->
      <card-list :posts="posts"/>
  </section>
</template>