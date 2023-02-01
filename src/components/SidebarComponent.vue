<template>
    <aside class="cart-container">
          <div class="cart">
            <h1 class="cart-title spread">
              <span>
                Cart
                <i class="icofont-cart-alt icofont-1x"></i>
              </span>
              <button @click="toggle" class="cart-close">&times;</button>
            </h1>
  
            <div class="cart-body">
              <table class="cart-table">
                <thead>
                  <tr>
                    <th><span class="sr-only">Product Image</span></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th><span class="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(quantity, item, i) in cart" :key="i">
                    <td><i class="icofont-carrot icofont-3x"></i></td>
                    <td>{{item}}</td>
                    <td>\${{getPrice(item, inventory)}}</td>
                    <td class="center">{{quantity}}</td>
                    <td>\${{ (getPrice(item, inventory)* quantity).toFixed(2)}}</td>
                    <td class="center">
                      <button @click="remove(item, cart)" class="btn btn-light cart-remove">
                        &times;
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <p  v-if="checkEmptyCart(cart)" class="center"><em>No items in cart</em></p>
              <div class="spread">
                <span><strong>Total:</strong> \${{
                  calculateTotal (getPrice, cart, inventory)
                }}</span>
                <button class="btn btn-light">Checkout</button>
              </div>
            </div>
          </div>
        </aside>
</template>

<script>
    export default {
        props: ["toggle", "cart", "inventory", "remove"],
        methods: {
          getPrice(name, array) {
            const item = array.find((item) => item.name === name);
            return item.price.USD;
          },
          checkEmptyCart(obj){
            if (Object.keys(obj).length === 0) return true;
            return false;
          },
          calculateTotal(callback, object, array) {
            const total = Object.entries(object).reduce(
              (acc, curr) => {
                return acc + (curr[1] * callback( curr[0], array))
              }, 0
            );
            return total.toFixed(2);
          },
        },
    }
</script>