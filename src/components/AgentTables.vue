<template>
  <div>
    <h2 class="text-center">Notifications</h2>
    <div class="mb-4">
      <AgentOperationList :data="operationList" :sessionId="sessionId" />
      <AgentNotifications :data="notificationList" :sessionId="sessionId" />
    </div>
  </div>
</template>

<script>
import AgentOperationList from './AgentOperationList.vue';
import AgentNotifications from './AgentNotifications.vue';
export default {
  name: 'AgentTables',
  components: { AgentOperationList, AgentNotifications },
  props: {
    sessionId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    operationList: [],
    notificationList: [],
    pollInterval: null,
  }),
  mounted() {
    this.pollInterval = setInterval(this.getData, 1000); //save reference to the interval
  },
  beforeDestroy() {
    clearInterval(this.pollInterval);
  },
  methods: {
    async getData() {
      try {
        let response = await this.axios.get(`${process.env.VUE_APP_PROXY_API_URL}/operations`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            sessionId: this.sessionId,
          },
        });

        if (response && response.data) {
          this.operationList = response.data.operations;
          this.notificationList = response.data.notifications;
        }
      } catch (err) {}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>