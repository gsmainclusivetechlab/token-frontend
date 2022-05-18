<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <!-- OneTrust Cookies List start -->
    <div id="ot-sdk-cookie-policy"></div>
    <!-- OneTrust Cookies List end -->
    </br>
    </br>
    <Footer />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import Footer from "../components/layout/Footer";
export default {
  name: "CookieList",
  components: { AppHeader, Footer },
  data: () => ({
    props: {
      tittle: "",
      content: ``,
      breadCrumb: {
        tittle: "",
        link: "/",
      },
    },
  }),
};
</script>
<style>
#ot-sdk-btn {
    margin: 10px;
}
</style>
