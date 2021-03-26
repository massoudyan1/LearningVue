<template>

  <nav class="filter-nav">
    <button
        @click="updateFilter('ongoing')"
        :class="{ active: current === 'ongoing' }"
        >View Ongoing</button>
    <button
        @click="updateFilter('completed')"
        :class="{ active: current === 'completed' }"
        >View Completed</button>
    <button
        @click="updateFilter('all')"
        :class="{ active: current === 'all' }"
        >View All</button>
  </nav>

</template>

<script>
export default {
  props: ['current'],
    methods: {
        updateFilter(filterBy){
            console.log(filterBy)
            this.$emit('filterChange', filterBy)
        }
    }
};
</script>

<style>
.filter-nav{
    display: flex;

}
.filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
flex: 1;
}

.filter-nav button.active {
    color: #555;
}
</style>