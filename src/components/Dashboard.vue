<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer>
      <v-card>
        <v-img
            class="align-center text-white"
            height="100"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
      </v-card>

      <v-list>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
          :lines="false"
          density="compact"
          nav
      >
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-container fluid class="mx-auto align-center d-flex">
        <v-responsive max-width="260">
          <v-text-field
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Search templates"
              variant="outlined"
              hide-details
              single-line
          ></v-text-field>
        </v-responsive>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn
            icon
        >
          <v-avatar
              color="brown"
          >
            <span class="text-h5">CJ</span>
          </v-avatar>
        </v-btn>
      </v-container>

    </v-app-bar>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col
              cols="12"
              sm="3"
          >
            <v-alert
                border="start"
                close-label="Close Alert"
                color="orange-accent-4"
                title="Closable Alert"
                variant="tonal"
            >
              Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
            </v-alert>
          </v-col>
          <v-col
              cols="12"
              sm="3"
          >
            <v-alert
                border="start"
                close-label="Close Alert"
                color="red-accent-4"
                title="Closable Alert"
                variant="tonal"
            >
              Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
            </v-alert>
          </v-col>
          <v-col
              cols="12"
              sm="3"
          >
            <v-alert
                border="start"
                close-label="Close Alert"
                color="green-accent-4"
                title="Closable Alert"
                variant="tonal"
            >
              Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
            </v-alert>
          </v-col>
          <v-col
              cols="12"
              sm="3"
          >
            <v-alert
                border="start"
                close-label="Close Alert"
                color="blue-accent-4"
                title="Closable Alert"
                variant="tonal"
            >
              Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></v-footer>
  </v-app>
</template>

<script setup>
import {ref} from 'vue'

const cards = ['Today', 'Yesterday']
const links = [
  ['mdi-inbox-arrow-down', 'Inbox'],
  ['mdi-send', 'Send'],
  ['mdi-delete', 'Trash'],
  ['mdi-alert-octagon', 'Spam'],
]

const items = [
  { text: 'My Files', icon: 'mdi-folder' },
  { text: 'Shared with me', icon: 'mdi-account-multiple' },
  { text: 'Starred', icon: 'mdi-star' },
  { text: 'Recent', icon: 'mdi-history' },
  { text: 'Offline', icon: 'mdi-check-circle' },
  { text: 'Uploads', icon: 'mdi-upload' },
  { text: 'Backups', icon: 'mdi-cloud-upload' },
]

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
}
</script>