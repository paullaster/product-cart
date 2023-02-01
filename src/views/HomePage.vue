<template>
    <div class="splash-container">
        <div class="splash">
            <h1>Splendid Food</h1>
        </div>
    </div>

    <main class="wrapper">
        <h2>Recommended</h2>

        <div class="recommended">
            <ProductCard 
            v-for="(product) in inventory.slice(0, 3)"
            :addToCart="addToCart"
            :icon="icon"
            :product="product"
            :key="product.id"
            />
        </div>
    </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
  props: ["inventory", "addToCart", "icon"],
  components:{
    ProductCard
},
  name: "HomePage",
}
</script>