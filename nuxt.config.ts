// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "normalize.css",
    "@/assets/css/global.scss",
    "@/assets/cus-font/iconfont.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/variables.scss" as *;`,
        },
      },
    },
  },
  app: {
    // 给所有页面的head添加seo信息
    head: {
      title: "Nuxt3-OPPO",
      meta: [
        //安全政策，需要ssl证书
        // {"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"},
        //<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        {
          name: "description",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // { rel: "stylesheet", href: "https://liujun.css" }
      ],
      // add head
      // script: [{ src: "https://liujun.js" }],
      noscript: [{ children: "Javascript is required" }],
      //   bodyAttrs:{style:"margin:0"}
    },
  },
});
