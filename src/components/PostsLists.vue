<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
         <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
  name: 'PostsList',
  components: {
    SinglePost
  },
  props: {
    posts: Array
  },
  setup(props) {
    onMounted(() => {
      console.log('I was mounted!', props)
    })
    onUnmounted(() => {
      console.log('I was UNMOUNTED!', props)
    })
    onUpdated(() => {
      console.log('I was UPDATED!', props)
    })
  },
}
</script>

<style>

</style>
