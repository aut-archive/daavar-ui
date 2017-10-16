<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <pre dir="ltr">{{ JSON.stringify(contest, null, 2) }}</pre>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch ({ store }) {
    await store.dispatch('contest/FETCH')
  },
  computed: {
    ...mapState({
      contest: state => state.contest.current
    })
  }
}
</script>