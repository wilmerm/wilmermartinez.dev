<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ 
  msg: string,
  description: string,
}>()
</script>

<template>
  <div class="text-center">
    <main class="container py-5">
      <div class="mb-3">
        <img src="../assets/images/logo.jpg" alt="" class="logo">
      </div>
      <div>
        <h1 class="fs-1 fw-bold">{{ msg }}</h1>
        <p class="fs-3">{{ description }}</p>
      </div>
      <div>
        <a href="mailto:wilmermorelmartinez@gmail.com" class="btn btn-link text-secondary btn-lg fs-3 bi-envelope" rel="external"></a>
        <a href="https://github.com/wilmerm/" class="btn btn-link text-secondary btn-lg fs-3 bi-github" rel="external"></a>
        <a href="https://www.linkedin.com/in/wilmermartinez/" class="btn btn-link text-secondary btn-lg fs-3 bi-linkedin" rel="external"></a>
      </div>
      <hr>
      <div>
        <div class="about">
          <h2>About me</h2>
          <p class="fs-5">Hi! I'm Wilmer Martinez, web developer for almost a decade. I currently live in Punta Cana, on a small Caribbean island 🏝, with my wife and son.</p>
          <p class="fs-5">I started in software development with <strong>Python</strong>, developing tools to automate my own tasks and desktop applications with wxPython. Then I got to know the <strong>Django</strong> and since then I became a Full-Stack web developer when I also learned <strong>JavasScript</strong> and then <strong>Vue.js</strong>. 💪</p>
          <p class="fs-5">Besides programming, I like things like electronics, movies (especially dramas, science fiction and horror) and reading ❤. My favorite book character is Beremiz Samir, and three of my favorite writers are Jules Verne, Edgard Alan Poe, and Isaac Asimov.</p>
        </div>
      </div>
    </main>
    <footer>
      <div class="container-fluid bg-dark text-light py-5">
        <div class="text-center">
          <div>
            <a href="mailto:wilmermorelmartinez@gmail.com" class="btn btn-link text-white btn-lg fs-3 bi-envelope" rel="external"></a>
            <a href="https://github.com/wilmerm/" class="btn btn-link text-white btn-lg fs-3 bi-github" rel="external"></a>
            <a href="https://www.linkedin.com/in/wilmermartinez/" class="btn btn-link text-white btn-lg fs-3 bi-linkedin" rel="external"></a>
          </div>
          <div>
            @ 2022 - Wilmer Martinez
          </div>
        </div>
      </div>    
    </footer>
  </div>
</template>
