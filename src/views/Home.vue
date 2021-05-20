<template>
  <div class="home">
      <h1>Home</h1>
      <div v-if="error">
        {{ error }}
      </div>
      <div v-if="posts.length">
        <PostsList v-if="showPosts" :posts="posts" />
      </div>
      <div v-else>Loading...</div>

      <button @click="showPosts = !showPosts">Toggle Posts</button>
      <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostsList from '@/components/PostsLists.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: {
    PostsList
  },
  setup() {
    const { posts, error, load } = getPosts()
    const showPosts = ref(true)
    load()

    return { posts, showPosts, error }
  },
}
</script>

<style>

</style>
