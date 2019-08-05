<template>
  <section class="container">
    <div>
    <app-logo/>
      <h1>menuのindexページです。</h1>
      <p>count={{count}}</p>
      <button @click="addCount">カウントアップ</button>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'


export default {
  components: {
    AppLogo
  },
  computed: {
    count () { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    }
  }
}
</script>