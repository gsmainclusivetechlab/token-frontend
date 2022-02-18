<template>
  <div>
    <h4>Notifications Sucesso</h4>
    <b-table :items="data" :fields="fields">
      <template #cell(message)="row">
        <b-icon
          icon="circle-fill"
          aria-label="Info"
          class="small-circle"
          :class="[successfulNotification(row.item) ? 'text-success' : 'text-danger']"
        ></b-icon>
        {{ row.item.message }}
      </template>
      <template #cell(actions)="row">
        <div class="d-flex justify-content-center">
          <b-icon class="button-custom text-danger" icon="trash" aria-label="Reject" @click="cleanNotification(row.item)"></b-icon>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'AgentNotifications',
  props: {
    data: {
      type: Array,
      required: true,
    },
    sessionId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    fields: [
      {
        key: 'message',
        label: 'Message',
      },
      { key: 'actions', label: 'Actions', thClass: 'text-center', tdClass: 'text-center' },
    ],
  }),
  methods: {
    cleanNotification(data) {
      try {
        this.axios.delete(`${process.env.VUE_APP_PROXY_API_URL}/operations/notification/${data.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            sessionId: this.sessionId,
          },
        });
      } catch (err) {}
    },

    successfulNotification(rowData) {
      if (rowData.message.includes('was successful')) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.button-custom {
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
}
.small-circle {
  width: 0.7em;
  height: 0.7rem;
}
</style>