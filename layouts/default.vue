<template>
  <div class="LayoutMainFlame"></div>
  <LayoutHeader />
  <LayoutPageWrapper><slot /></LayoutPageWrapper>
  <LayoutFooter />
</template>

<script setup lang="ts"></script>

<style lang="scss">
.LayoutMainFlame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: #fedefe;
}
</style>
