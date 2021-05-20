import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const data = await fetch(`http://localhost:3000/posts/${id}`)
      if (!data.ok) {
        throw Error('That post does not exist')
      }
      post.value = await data.json()
    } catch (e) {
      console.log('ERROR:', e)
      error.value = e.message
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export default getPost
