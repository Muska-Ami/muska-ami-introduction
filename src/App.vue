<script setup>
let year = new Date().getFullYear()
</script>

<template>
  <main class="fame">
    <el-card>
      <template #header>
        <h2>Hello, I'm 夏沫花火zzz🌙(Muska_Ami).</h2>
      </template>
      <div>
        <p class="bds">
          <h4>Languages that use</h4>
          <img alt="Static Badge" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-2fb1f3?style=flat-square" />
          <img alt="Static Badge" src="https://img.shields.io/badge/English-2fb1f3?style=flat-square" />
          <img alt="Static Badge" src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-yellow?style=flat-square" />
        </p>
        <p class="bds">
          <h4>Programming lanugages</h4>
          <figure><embed src="https://wakatime.com/share/@018c1993-fbe1-48fd-9551-91e287631e43/64009a7d-144f-47fb-a8b0-bc68d30a656b.svg"></embed></figure>        </p>
        <p>
          <el-avatar :size="60" src="https://blog.1l1.icu/images/avatar.jpg"></el-avatar>
          <img class="desc" src="https://readme-typing-svg.herokuapp.com?font=Poppins&pause=1000&color=55CAF7&background=54DCFF00&center=%E7%9C%9F&vCenter=%E7%9C%9F&repeat=%E7%9C%9F&width=435&lines=Keep+doing%2C+keep+loving%E2%9D%A4.">
        </p>
        <p>
          一名来自中国大陆的高中猫猫，现居广西壮族自治区。
        </p>
        <p>
          喵喵喵？我很可愛い，请给我钱喵！
          <br>才怪，本猫猫不会乱要钱哒qwq
        </p>
        <p>
          <h4>Lab</h4>
          这是花火以及几个朋友的实验室喵，欢迎造访w
          <br><el-link href="https://github.com/k43Lab" target="_blank">k43Lab</el-link>
        </p>
        <p class="bds">
          <h4>Links</h4>
          <el-link href="https://blog.1l1.icu" target="_blank">
            <img alt="Static Badge" src="https://img.shields.io/badge/Muska_Ami%E3%81%AEBLOG-blue?style=flat-square" />
          </el-link>
          <el-link href="https://github.com/Muska-Ami" target="_blank">
            <img alt="Static Badge" src="https://img.shields.io/badge/GitHub-black?style=flat-square" />
          </el-link>
          <el-link href="https://x.com/Muska_Ami" target="_blank">
            <img alt="Static Badge" src="https://img.shields.io/badge/Twitter%2FX-skyblue?style=flat-square" />
          </el-link>
        </p>
      </div>
      <template #footer>
        <span>Copyright © {{ year }} <a class="cr-a" href="https://blog.1l1.icu" target="_blank">夏沫花火zzz🌙</a>. All right reserved.</span>
      </template>
    </el-card>
  </main>
</template>
