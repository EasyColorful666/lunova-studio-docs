<template>
    <div class="mt-16">
        <div class="mb-6 flex w-full items-center justify-between">
            <!-- Left: Edit Link -->
            <LayoutEditLink />
            <!-- Right: Back to Top Button -->
            <LayoutBackToTop />
        </div>
        <LayoutPrevNext />

        <!-- 内部评论系统-可专用审核-有专属标识 -->
        <Waline serverURL="https://pl.mcols.cn" path="path" login="force" noCopyright="true"/>

        <!-- giscus 
        <Giscus repo="Lunova-Studio/lunova-studio.github.io" repo-id="R_kgDOKAu7Mw" category="Comments" category-id="DIC_kwDOKAu7M84Cvrch"
            mapping="og:title" strict="1" reactions-enabled="1" emit-metadata="0" input-position="top"
            :theme="themeMode" :lang="locale === 'zh' ? 'zh-CN' : 'en'" loading="lazy" />-->

        <div class="flex">
            <LayoutCarbonAds v-if="!isDesktop && carbonAdsEnabled" class="mx-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Giscus from '@giscus/vue'
    import 'giscus';

    const { carbonAds } = useConfig().value.toc;
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const colorMode = useColorMode();
    const { locale } = useI18n();

    const themeMode = computed(() => {
        return colorMode.value === "dark" ? "dark_tritanopia" : "light_tritanopia";
    });

    const carbonAdsEnabled = computed(
        () =>
            carbonAds.enable &&
            !carbonAds.disableInMobile &&
            !(import.meta.dev && carbonAds.disableInDev)
    );
    import { Waline } from '@waline/client/component';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    import '@waline/client/style';

    const serverURL = 'https://pl.mcols.cn';
    const path = computed(() => useRoute().path);
</script>
<style lang="css">
:root {
  /* 字体大小 */
  --waline-font-size: 18px;

  /* 常规颜色 */
  --waline-white: #fff;
  --waline-light-grey: #999;
  --waline-dark-grey: #666;

  /* 主题色 */
  --waline-theme-color: #0070f8;
  --waline-active-color: #2ecc71;

  /* 布局颜色 */
  --waline-color: #444;
  --waline-bg-color: #fff;
  --waline-bg-color-light: #f8f8f8;
  --waline-bg-color-hover: #f0f0f0;
  --waline-border-color: #ddd;
  --waline-disable-bg-color: #f8f8f8;
  --waline-disable-color: #bbb;
  --waline-code-bg-color: #282c34;

  /* 特殊颜色 */
  --waline-bq-color: #f0f0f0;

  /* 头像 */
  --waline-avatar-size: 3.25rem;
  --waline-m-avatar-size: calc(var(--waline-avatar-size) * 9 / 13);

  /* 徽章 */
  --waline-badge-color: #3498db;
  --waline-badge-font-size: 0.775em;

  /* 信息 */
  --waline-info-bg-color: #f8f8f8;
  --waline-info-color: #999;
  --waline-info-font-size: 0.625em;

  /* 渲染选择 */
  --waline-border: 1px solid var(--waline-border-color);
  --waline-avatar-radius: 50%;
  --waline-box-shadow: none;
}

/* 根据用户设置 ↓ */
darkmode-selector {
  /* 常规颜色 */
  --waline-white: #000;
  --waline-light-grey: #666;
  --waline-dark-grey: #999;

  /* 布局颜色 */
  --waline-color: #888;
  --waline-bg-color: #1e1e1e;
  --waline-bg-color-light: #272727;
  --waline-border-color: #333;
  --waline-disable-bg-color: #444;
  --waline-disable-color: #272727;

  /* 特殊颜色 */
  --waline-bq-color: #272727;

  /* 其他颜色 */
  --waline-info-bg-color: #272727;
  --waline-info-color: #666;
}
</style>