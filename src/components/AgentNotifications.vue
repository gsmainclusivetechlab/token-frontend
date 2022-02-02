<template>
  <div>
    <h4>Notifications</h4>
    <b-table :items="data" :fields="fields">
      <template #cell(actions)="row">
        <div
          class="button-custom text-danger"
          @click="cleanNotification(row.item)"
        >
          <b-icon size="lg" icon="x" aria-label="Reject"></b-icon>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "AgentNotifications",
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
        key: "message",
        label: "Message",
      },
      { key: "actions", label: "Actions" },
    ],
  }),
  methods: {
    cleanNotification(data) {
      try {
        this.axios.delete(
          `${process.env.VUE_APP_PROXY_API_URL}/operations/notification/${data.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'sessionId': this.sessionId
            },
          }
        );
      } catch (err) {}
    },
  },
};
</script>

<style lang="scss" scoped>
.button-custom {
  cursor: pointer;
}

.button-custom svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>