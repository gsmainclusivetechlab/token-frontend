<template>
  <div>
    <h4>Operations</h4>
    <b-table :items="data" :fields="fields">
      <template #cell(actions)="row">
        <div class="d-flex">
          <div class="button-custom text-success mr-1" @click="acceptOperation(row.item)">
            <b-icon icon="check2" aria-label="Accept"></b-icon>
          </div>
          <div class="button-custom text-danger" @click="rejectOperation(row.item)">
            <b-icon size="lg" icon="x" aria-label="Reject"></b-icon>
          </div>
        </div>
      </template>
    </b-table>
    <b-modal v-model="modalShow" hide-footer title="Error">
      <span>{{ errorMessage }}</span>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AgentOperationList',
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
        key: 'type',
        label: 'Operation Type',
      },
      { key: 'amount', label: 'Amount' },
      { key: 'identifier', label: 'Client Identifier' },
      { key: 'actions', label: 'Actions' },
    ],
    errorMessage: '',
    modalShow: false,
  }),
  methods: {
    async acceptOperation(data) {
      try {
        await this.axios.post(`${process.env.VUE_APP_PROXY_API_URL}/operations/accept/${data.id}`, null, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            sessionId: this.sessionId,
          },
        });
      } catch (err) {
        if (this.axios.isAxiosError(err) && err.response) {
          this.errorMessage = err.response.data.error;
          this.modalShow = true;
        }
      }
    },
    async rejectOperation(data) {
      try {
        await this.axios.post(`${process.env.VUE_APP_PROXY_API_URL}/operations/reject/${data.id}`, null, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            sessionId: this.sessionId,
          },
        });
      } catch (err) {
        if (this.axios.isAxiosError(err) && err.response) {
          this.errorMessage = err.response.data.error;
          this.modalShow = true;
        }
      }
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