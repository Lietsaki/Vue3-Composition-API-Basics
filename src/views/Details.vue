<template>
  <p v-if="error">{{error}}</p>
  <div class="post" v-else-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
import getPost from '../composables/getPost'

export default {
  name: 'PostDetails',
  props: {
    id: String
  },
  setup(props) {
    const { post, error, load } = getPost(props.id)

    load()

    return { post, error, load }
  }
}
</script>

<style>

</style>
