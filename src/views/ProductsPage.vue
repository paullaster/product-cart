<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
          <ProductCard 
          v-for="product in inventory"
          :addToCart="addToCart"
          :product="product"
          :key="product.id"
          />
        </div>
      </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';


export default {
    name: "ProductPage",
    props:["inventory", "addToCart"],
    components: { ProductCard }
}
</script>