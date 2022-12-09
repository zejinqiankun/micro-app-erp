<template>
  <div>
    I am userManage
    globle token: {{ this.$store.state.globeData.token || 'none' }}
    <!-- 主应用下发的loading -->
    <Loading></Loading>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  created() {
    console.log(this.$store.state)
  },
  methods: {},
}
</script>
