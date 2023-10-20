<template>
  <var-app-bar color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)">
    夏沫花火zzz🌙(Muska_Ami)
    <template #right>
      <var-avatar src="https://blog.1l1.icu/images/avatar.jpg" size="small" />
    </template>
  </var-app-bar>
  <var-card src="https://blog.1l1.icu/images/avatar.jpg" layout="row" title="夏沫花火zzz" subtitle="Muska_Ami"
    description="I'm 夏沫花火zzz(Muska_Ami), a student in full day boarding school."></var-card>

  <var-row :gutter="[10, 10]">
    <!-- Links -->
    <var-col :span="10">
      <var-card class="scx" title="Links">
        <template #description>
          <div class="scard">
            <var-link href="https://blog.1l1.icu" target="_blank" underline="none">
              <var-button type="success">BLOG</var-button>
            </var-link>
            <var-link href="https://github.com/Muska-Ami" target="_blank" underline="none">
              <var-button style="color: white" color="black">GitHub</var-button>
            </var-link>
            <var-link href="https://x.com/Muska_Ami" target="_blank" underline="none">
              <var-button type="info">Twitter / X</var-button>
            </var-link>
            <var-link href="https://space.bilibili.com/372657168" target="_blank" underline="none">
              <var-button color="linear-gradient(120deg, #66ccff, pink)">Bilibili</var-button>
            </var-link>
          </div>
        </template>
      </var-card>
    </var-col>

    <!-- Use Languages -->
    <var-col :span="6">
      <var-card class="scx" title="Use Languages">
        <template #description>
          <div class="scard">
            <var-chip type="primary">简体中文(中国)</var-chip>
            <var-chip type="success">繁體中文 | [只讀]</var-chip>
            <var-chip type="info">English(US/UK mixed)</var-chip>
            <var-chip type="danger">日本語 | [学習]</var-chip>
            <var-chip type="danger">Esperanto | [Lernado]</var-chip>
          </div>
        </template>
      </var-card>
    </var-col>

    <!-- Projects -->
    <var-col :span="8">
      <var-card class="scx" title="Projects">
        <template #description>
          <div class="scard">

            <var-card src="https://spcraft.1l1.icu/favicon.ico" layout="row" title="风雨阁Storm Pavilion">
              <template #description>
                <p style="color: gray;margin: 5px;">一个来自社区，源于社区，运营于社区的Minecraft服务器</p>
                <var-link href="https://spcraft.1l1.icu" underline="none" target="_blank">
                  <var-button style="color: white" color="yellowgreen">View</var-button>
                </var-link>
              </template>
            </var-card>
            <var-link href="https://spcraft.1l1.icu" underline="none" target="_blank">
              <var-button style="color: white" color="black">More on GitHub</var-button>
            </var-link>
          </div>
        </template>
      </var-card>
    </var-col>
  </var-row>
</template>

<script setup>
import "@/asset/style.css"
</script>
