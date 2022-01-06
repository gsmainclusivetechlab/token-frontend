<template>
  <div>
    <h2>Agent</h2>
    <AgentTables />
    <AgentCreateOperation :selectedSystem="selectedSystem" />
  </div>
</template>

<script>
import AgentCreateOperation from "./AgentCreateOperation.vue";
import AgentTables from "./AgentTables.vue";
export default {
  name: "Agent",
  components: { AgentCreateOperation, AgentTables },
  props: {
    selectedSystem: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>