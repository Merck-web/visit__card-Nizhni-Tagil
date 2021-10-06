<template>
<div id="app">
  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <Preload />
    <Header />
    <hero />
    <twosection />
    <Cards/>
    <thirdsection />
    <podval />
  </div>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import hero from "./components/hero.vue";
import twosection from "./components/twosection.vue";
import thirdsection from "./components/thirdsection.vue";
import podval from "./components/podval.vue";
import Preload from "./components/Preload.vue";
import Cards from "./components/Cards.vue";

export default {
    components: {
        Header,
        hero,
        twosection,
        thirdsection,
        podval,
        Preload,
        Cards
    },
};
</script>

<style>

.container.y {
  flex-flow: column nowrap;
}
.mandatory-scroll-snapping {
  scroll-snap-type: y proximity;
}
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

body::-webkit-scrollbar {
    width: 5px;
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
    background-color: rgb(224, 37, 37);
    outline: 1px solid slategrey;
}

@font-face {
    font-family: "1";
    font-display: block;
    src: url("/fonts/Helvetica/HelveticaRegular/HelveticaRegular.woff");
}

@font-face {
    font-family: "2";
    font-display: block;
    src: url("/fonts/Helvetica/HelveticaBold/HelveticaBold.woff");
}

body {
    margin: 0;
    padding: 0;
    font-family: "1";
    color: #fff;
    width: 100%;
}

h1 {
    margin: 0;
}
</style>
