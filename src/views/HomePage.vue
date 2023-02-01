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
            v-for="(product, index) in inventory"
            :addToCart="addToCart"
            :icon="icon"
            :index="index"
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