<template>
    <div>
        <SlotProperty>
            <template #card-header>
                <div>
                    <img src="https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" width="400" alt="">
                </div>
            </template>
            <template #card-body>
                <h1 class="title">Black Coffee</h1>
                <p class="currentprice">
                    <span class="bdtsign">&#2547;</span> <span class="price">200</span>
                </p>
                <s class="previousprice">
                    <span class="bdtsign">&#2547;</span> <span class="price">250</span>
                </s>

                <p class="stock">In Stock</p>
            </template>
            <template #card-footer>
                <div>
                    <button class="btn-buy">Buy Now</button>
                    <button class="btn-cart">Add to Cart</button>
                </div>
            </template>
        </SlotProperty>
    </div>
</template>

<script>
    export default {
        name: 'Slot'
    }
</script>

<style lang="scss" scoped>

</style>