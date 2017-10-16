<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Select contest</v-card-title>
        <v-card-text v-for="(contest, id) in contests" :key="id">
          <v-btn color="primary" flat to="/contest">{{ contest.name }}</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch ({ store }) {
    await store.dispatch('contest/FETCH_ALL')
  },
  computed: {
    ...mapState({
      contests: state => state.contest.all
    })
  }
}
</script>