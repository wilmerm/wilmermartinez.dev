<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ 
  msg: string,
  description: string,
}>()
</script>

<template>
  <div class="text-center">
    <main class="container py-5 fs-5">
      <div class="mb-3">
        <img src="../assets/images/logo.jpg" alt="" class="logo">
      </div>
      <div class="mb-3">
        <h1 class="display-2 fw-bold">{{ msg }}</h1>
        <p class="fs-3 fw-bold">{{ description }}</p>
      </div>
      <div class="mb-3">
        <a href="mailto:wilmermorelmartinez@gmail.com" class="btn btn-link text-secondary btn-lg fs-3 bi-envelope" rel="external"></a>
        <a href="https://github.com/wilmerm/" class="btn btn-link text-secondary btn-lg fs-3 bi-github" rel="external"></a>
        <a href="https://www.linkedin.com/in/wilmermartinez/" class="btn btn-link text-secondary btn-lg fs-3 bi-linkedin" rel="external"></a>
      </div>
      <div class="container my-5">
        <div class="row">
          <div class="col">
            <div class="card2 me-3 w-100 card-languages">
              <h2 class="card-header">Languages</h2>
              <div class="card-body">
                <div class="ms-2"><a href="https://www.python.org/" target="_blank" class="text-decoration-none">Python</a></div>
                <div class="ms-2"><a href="https://www.typescriptlang.org/" target="_blank" class="text-decoration-none">TypeScript</a></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card2 me-3 w-100 card-framework">
              <h2 class="card-header">Frameworks</h2>
              <div class="card-body">
                <div class="ms-2"><a href="https://www.djangoproject.com/" target="_blank" class="text-decoration-none">Django</a></div>
                <div class="ms-2"><a href="https://vuejs.org/" target="_blank" class="text-decoration-none">Vue.js</a></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card2 w-100 card-services">
              <h2 class="card-header">Services</h2>
              <div class="card-body">
                <div class="ms-2"><a href="https://vercel.com/" target="_blank" class="text-decoration-none">Vercel</a></div>
                <div class="ms-2"><a href="https://www.pythonanywhere.com" target="_blank" class="text-decoration-none">PythonAnywhere</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mb-3 px-md-5">
        <h2 class="fs-2 fw-bold">About me</h2>
        <div class="fs-4">
          <p>Hi! I'm Wilmer Martinez, web developer for almost a decade. I currently live in Punta Cana, on a small Caribbean island 🏝, with my wife and son.</p>
          <p>I started in software development with <strong>Python</strong>, developing tools to automate my own tasks and desktop applications with wxPython. Then I got to know the <strong>Django</strong> and since then I became a Full-Stack web developer when I also learned <strong>JavasScript</strong> and then <strong>Vue.js</strong>. 💪</p>
          <p>Besides programming, I like things like electronics, movies (especially dramas, science fiction and horror) and reading ❤. My favorite book character is Beremiz Samir, and three of my favorite writers are Jules Verne, Edgard Alan Poe, and Isaac Asimov.</p>
        </div>
      </div>
      <div class="sheet">
        <div class="line" v-for="(n, i) in 'nnnnnnnnnnnnn'" :key="i"></div>
        <div style="padding: 150px 0"></div>
        <div class="hole hole-1 d-none d-md-block"></div>
        <div class="hole hole-2 d-none d-md-block"></div>
        <div class="hole hole-3 d-none d-md-block"></div>
        <div class="line-vertical-1 d-none d-md-block"></div>
        <div class="line-vertical-2 d-none d-md-block"></div>
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </main>
    <footer>
      <div class="container-fluid bg-dark text-light py-5">
        <div class="text-center">
          <div>
            <a href="mailto:wilmermorelmartinez@gmail.com" class="btn btn-link text-white btn-lg fs-3 bi-envelope-fill" rel="external"></a>
            <a href="https://github.com/wilmerm/" class="btn btn-link text-white btn-lg fs-3 bi-github" rel="external"></a>
            <a href="https://www.linkedin.com/in/wilmermartinez/" class="btn btn-link text-white btn-lg fs-3 bi-linkedin" rel="external"></a>
          </div>
          <div>
            <a href="https://www.wilmermartinez.dev" class="text-decoration-none text-light">@ 2022 - Wilmer Martinez</a>
          </div>
        </div>
      </div>    
    </footer>
  </div>
</template>


<style scoped>
  .card2 a {
    color: inherit;
  }
  .card2 a:hover {
    font-weight: bold;
  }
  h2.card-header {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card2 {
    transition: all;
    transition-duration: .5s;
    margin-bottom: 12px;
    padding: 8px;
  }
  .card2:hover  {
    text-shadow: 20px 20px 5px rgba(85, 85, 85, 0.26);
  }
  .card-languages {
    transform: rotateZ(5deg);
  }
  .card-framework {
    transform: rotateZ(-3deg);
  }
  .card-services {
    transform: rotateZ(3deg);
  }
  .card-languages:hover {
    transform: rotateZ(5deg) scale(150%);
    z-index: 999;
  }
  .card-framework:hover {
    transform: rotateZ(-3deg) scale(150%);
    z-index: 999;
  }
  .card-services:hover {
    transform: rotateZ(3deg) scale(150%);
    z-index: 999;
  }
  .logo {
    transition: all;
    transition-duration: .5s;
    border: 2px solid #666666;
  }
  .logo:hover {
    transform: rotateZ(5deg) scale(120%);
    box-shadow: 10px 20px 5px #00000020 !important;
  }
  .sheet {
    padding: 30px;
    padding-top:100px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(238, 233, 211, 0.61) 50%);
  }
  .sheet .line {
    border-bottom: 1px dashed #004a863b;
    margin-bottom: 2rem;
  }
  .sheet .hole {
    background-color: rgba(85, 85, 85, 0.349);
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: absolute;
    box-shadow: inset 5px 5px #00000056;
  }
  .sheet .hole-1 {
    top: 100px;
    left: 20px;
  }
  .sheet .hole-2 {
    top: 400px;
    left: 20px;
  }
  .sheet .hole-3 {
    top: 700px;
    left: 20px;
  }
  .sheet .line-vertical-1 {
    position: absolute;
    border-right: 1px solid var(--bs-warning);
    height: 80%;
    top: 10px;
    left: 70px;
  }
  .sheet .line-vertical-2 {
    position: absolute;
    border-right: 1px solid var(--bs-info);
    height: 80%;
    top: 10px;
    right: 70px;
  }
  .circle {
    position: absolute;
    background-color: #ffffff6e;
    border-radius: 100%;
    overflow: hidden;
  }
  .sheet .circle-1 {
    opacity: .4;
    width: 200px;
    height: 200px;
    top: 20px;
    left: 70px;
  }
  .sheet .circle-2 {
    opacity: .4;
    width: 400px;
    height: 400px;
    top: 200px;
    left: 200px;
  }
  .sheet .circle-3 {
    opacity: .5;
    width: 400px;
    height: 400px;
    top: 300px;
    right: 20px;
  }
</style>