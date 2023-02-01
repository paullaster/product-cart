
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
      <span @click="toggleCart">Cart({{ itemsInCart }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" :icon="productIcon"/>

  <SidebarComponent v-if="showSidebar" :toggle="toggleCart" :cart="cart" :inventory="inventory"
    :remove="removeItem" />
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';
import food from './food.json';

export default {
  methods: {
    productIcon(icon) {
      return `icofont-10x icofont-${icon}`;
    },
    addToCart(name, itemID) {
      if (!this.cart[name]) this.cart[name] = 0;
      this.cart[name] += this.inventory[itemID].quantity;
      this.inventory[itemID].quantity = 0;
      console.log(this.cart);
    },
    toggleCart() {
      this.showSidebar = !this.showSidebar;
    },
    randomIndex() {
      const startIndex = Math.floor(
        Math.random() * (this.inventory.length / 2)
      );
      const endIndex = Math.floor(Math.random() * this.inventory.length);
      return [startIndex, endIndex];
    },
    removeItem(key, object) {
      delete object[key];
    },
  },
  computed: {
    itemsInCart() {
      const items = Object.values(this.cart).reduce(
        (acc, curr) => {
          return acc + curr;
        }, 0
      );
      return items;
    },
  },
  data() {
    return {
      showSidebar: true,
      inventory: food,
      cart: {}
    }
  }
  , components: {
    SidebarComponent
  },
}
</script>
