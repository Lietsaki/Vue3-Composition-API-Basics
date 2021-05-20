<template>
  <div class="home">
    <!-- <p ref="pRef">My name is {{ name }} and my age is {{ age }}</p> -->

    <!-- <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button> -->

    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in fNames" :key="name">{{ name }}</div>
    <button @click="stopWatching">Stop watching</button>
  </div>
  <!-- <button @click="handleClick">Click me</button>
  <button @click="age++">Add age</button> -->
  <!-- <input type="text" v-model="name" /> -->
</template>

<script>
import {
  ref, computed, watch, watchEffect
} from 'vue'

export default {
  name: 'HomeSandbox',
  setup() {
    // REFS AND REACTIVES
    // const name = ref('Mario')
    // const age = ref(30)
    // const pRef = ref(null)
    // const handleClick = () => {
    //   name.value = 'Luiyi'
    // }
    // const ninjaOne = ref({ name: 'Mario', age: 30 })
    // const ninjaTwo = reactive({ name: 'Luigi', age: 31 })

    // const nameOne = ref('mario')
    // const nameTwo = reactive('luigi')

    // // Refs must always be accessed through their value property.
    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 21
    // }

    // //  Reactive objects can be accesed directly, but if we use primitives inside them,
    // // like a string,  we won't be able to modify them.
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 25
    // }

    // WATCHERS AND COMPUTED PROPERTIES
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'bowser', 'toad', 'koopa', 'peach'])

    const myWatcher = watch(search, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    // Runs when the referenced variables inside it change (ex. search.value)
    // but not for search (the whole search object) and computed properties
    const myWatchEffect = watchEffect(() => {
      console.log('watch effect ran', search.value)
    })

    // To stop the watchers, simply store them in a variable and then execute it as a function.
    const stopWatching = () => {
      myWatcher()
      myWatchEffect()
    }

    const fNames = computed(() => {
      const filteredNames = names.value.filter((name) => name.includes(search.value))
      return filteredNames
    })

    return { fNames, search, stopWatching }
  }
}
</script>
