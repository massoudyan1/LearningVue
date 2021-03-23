<template>
  <p class="rank">Reaction time: {{ score }} ms</p>
  <p class="rank">Ranking: {{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 250)
            this.rank = 'Goku Fingers'
        else if(this.score < 400)
            this.rank = 'Vegeta Reflexes'
        else
            this.rank = 'Hercule Pace'
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: rgb(70,150,120);
    }
</style>