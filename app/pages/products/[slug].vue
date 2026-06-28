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

useSeoMeta({
  title: `${product.value.name} — CutWire Studios`,
  description: product.value.summary,
})
</script>

<template>
  <MarketingProductPage
    v-if="product"
    :product="product"
  />
</template>
