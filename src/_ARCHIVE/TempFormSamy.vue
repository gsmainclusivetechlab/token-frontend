TEMP CODE SAMY


<div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="sign-up-frame">
                    <h2>New Customer Payment</h2>
                    <form @submit.prevent="processForm" method="post">
                    <div class="form-group">
                        <label for="inputAddress">Amount ($)</label>
                        <input
                        type="number"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Enter amount..."
                        v-model="amount"
                        />
                        <span class="error-msg" v-if="errors.amount.length != 0">
                        {{ errors.amount }}</span
                        >
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Customer Mobile Number</label>
                        <vue-tel-input
                        v-model="phone"
                        mode="international"
                        validCharactersOnly
                        ></vue-tel-input>
                        <span
                        class="error-msg"
                        v-if="errors.phone.length != 0 || errors.format.length != 0"
                        >
                        {{ errors.phone }} {{ errors.format }}
                        </span>
                    </div>

                    <a v-if=" !loading" href="#" class="btn1">
                        <input class="btn" type="submit" value="Submit Invoice Request" />
                    </a>
                    <b-spinner
                        style="margin-left: 45%"
                        v-if="loading"
                        label="Spinning"
                    ></b-spinner>
                    <div class="form-response" v-if="gotResponse">
                        <b-alert
                        variant="primary"
                        show
                        v-if="response.data.ResponseCode == 200"
                        >
                        {{ response.data.msg }}</b-alert
                        >
                        <b-alert
                        variant="danger"
                        show
                        v-if="response.data.ResponseCode == 623"
                        >
                        {{ response.data.msg }}</b-alert
                        >
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
