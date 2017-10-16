<template>
  <v-navigation-drawer app persistent clipped enable-resize-watcher v-model="drawer">
    <v-list>
      <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'apps', title: 'Contests', to: '/' }
      ]
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('DRAWER_SET', val)
      }
    }
  }
}
</script>
