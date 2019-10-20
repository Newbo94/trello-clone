<template>
  <div class="card" v-on:click="Open($event)" :class="{'is-open' : isOpen}" :style="styleObject">
    <div v-if="!loading">
      <div class="card__overlay"></div>
      <div v-if="item.img !== null">
        <img :src="item.img" alt />
      </div>
      <div v-else>
        <video autoplay controls loop>
          <source :src="item.video" type="video/mp4" />
        </video>
      </div>

      <div class="card__body">
        <h1>{{item.title}}</h1>
        <p class="card__desc">{{item.description}}</p>
      </div>
      <div class="card__content">
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./CardBoxComponent.ts"></script>