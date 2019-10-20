<template>
  <div>
    <transition name="fade">
      <div v-if="isActive" class="c-modal-wrapper" :class="{'is-active' : isActive}">
        <div class="c-modal">
          <p class="modal-text">{{text}}</p>
          <button v-on:click="closeModal()">Change state</button>
          <slot></slot>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="c-modal-overlay" v-if="isActive" v-on:click="closeModal()"></div>
    </transition>
  </div>
</template>

<script src="./ModalBoxComponent.ts">
</script>
