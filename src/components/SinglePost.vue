<template>
  <div class="post">
    <router-link :to="{ name: 'Post Details', params: { id: post.id }}">
    <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SinglePost',
  props: {
    post: Object
  },
  setup(props) {
    const snippet = computed(() => {
      let bodySnippet = props.post.body.substring(0, 100)
      if (props.post.body.length > 100) bodySnippet += '...'
      return bodySnippet
    })

    return { snippet }
  }
}
</script>

<style>

</style>
