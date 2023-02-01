<template>
    <div class="splash-container">
        <div class="splash">
            <h1>Splendid Food</h1>
        </div>
    </div>

    <main class="wrapper">
        <h2>Recommended</h2>

        <div class="recommended">
            
        </div>
    </main>
</template>

<script>
export default {
  props: ["inventory", "addToCart", "icon"],
  name: "HomePage",
}
</script>