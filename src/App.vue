
import SidebarComponent from './components/Sidebar-component.vue';

<template>
  <header class="top-bar spread">
        <nav class="top-bar-nav">
          <router-link to="/" class="top-bar-link">
            <i class="icofont-spoon-and-fork"></i>
            <span>Home</span>
          </router-link>
          <router-link to="/products" class="top-bar-link">
            <span>Products</span>
          </router-link>
          <router-link to="/past-orders" class="top-bar-link">
            <span>Past Orders</span>
          </router-link>
        </nav>
        <div class="top-bar-cart-link">
          <i class="icofont-cart-alt icofont-1x"></i>
          <span @click="toggleCart">Cart({{itemsInCart}})</span>
        </div>
      </header>
  <router-view :inventory="inventory"/>

  <SidebarComponent
    v-if="showSidebar" 
    :toggle="toggleCart" 
    :cart="cart"
    :inventory="inventory" 
    :icon="productIcon()" 
    :remove="removeItem"
  />
</template>

<script>
  import SidebarComponent from './components/SidebarComponent.vue';
  import food from './food.json';

  export default {
  methods: {
  },
  computed:{

  },
  data () {
    return {
      showSidebar: true,
      inventory: food,
      cart:{}
    }  
  }
,    components: {
      SidebarComponent
    },
  }
</script>
