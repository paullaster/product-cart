<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
          <ProductCard 
          
          />
        </div>
      </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';


export default {
    name: "ProductPage",
    components: { ProductCard }
}
</script>