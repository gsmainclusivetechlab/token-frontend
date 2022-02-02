<template>
  <div>
    <h2 class="text-center">Notifications</h2>
    <div>
      <AgentNotifications :data="notificationList" :sessionId="sessionId"/>
      <AgentOperationList :data="operationList" :sessionId="sessionId"/>
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
    pollTimeout: null,
  }),
  mounted() {
    this.pollInterval = setInterval(this.getData, 1000); //save reference to the interval
    this.pollTimeout = setTimeout(() => {
      clearInterval(this.pollInterval);
    }, 1800000); //stop polling after ten minutes
  },
  beforeDestroy() {
    clearInterval(this.pollInterval);
    clearTimeout(this.pollTimeout);
  },
  methods: {
    async getData() {
      try {
        let response = await this.axios.get(`${process.env.VUE_APP_PROXY_API_URL}/operations`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'sessionId': this.sessionId
          },
        });

        if (response && response.data) {
          this.operationList = response.data.operations;
          this.notificationList = response.data.notifications;
        }
      } catch (err) {
        // clearInterval(this.pollInterval);
        // clearTimeout(this.pollTimeout);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>