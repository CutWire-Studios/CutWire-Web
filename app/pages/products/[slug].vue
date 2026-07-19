<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: product } = await useAsyncData(
  `product-${slug.value}`,
  () => queryCollection('products').where('slug', '=', slug.value).first(),
)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

const site = useSiteConfig()

useSeoMeta({
  title: `${product.value.name} — CutWire Studios`,
  description: product.value.summary,
  ogTitle: `${product.value.name} — ${product.value.tagline}`,
  ogDescription: product.value.summary,
  ogType: 'website',
  ogUrl: `${site.url}/products/${slug.value}`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}/products/${slug.value}` }] })

defineOgImageComponent('Default', {
  title: product.value.tagline,
  description: product.value.summary,
  eyebrow: product.value.name,
})
</script>

<template>
  <MarketingProductPage
    v-if="product"
    :product="product"
  />
</template>
