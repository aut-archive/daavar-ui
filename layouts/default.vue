<template>
  <v-app dark>
    <the-drawer />
    <the-nav />
    <main>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </main>
    <the-footer />
  </v-app>
</template>

<script>
import theDrawer from '~/components/the-drawer'
import theFooter from '~/components/the-footer'
import theNav from '~/components/the-nav'

export default {
  components: {
    theDrawer,
    theFooter,
    theNav
  }
}
</script>
