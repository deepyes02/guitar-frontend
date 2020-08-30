<template>
  <div class="hello">
    <h1>{{ msg }} now, did we?</h1>
    <p>
      For guides and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: bottom;
}
  li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #230968;
  font-weight: 600;
  font-size: 1.1em;
  font-style:italic;
}
</style>
