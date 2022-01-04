<template>
  <div>
    <h2>Agent</h2>
    <AgentTables />
    <AgentCreateOperation />
  </div>
</template>

<script>
import AgentCreateOperation from "./AgentCreateOperation.vue";
import AgentTables from "./AgentTables.vue";
export default {
  name: "Agent",
  components: { AgentCreateOperation, AgentTables },
};
</script>

<style lang="scss" scoped>
</style>