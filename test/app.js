const app = Vue.createApp({
    //template: '<h2>I am a template</h2>'

    data(){
        return{
            mouseover1: false,
            mouseleave1: false,
            mouseover2: false,
            mouseleave2: false,
            dblclick: 0,
            x: 0,
            y: 0,
            changeXY: false
        }
    },
    methods: {

        handleMouseover(x){
            if(x)
                this.mouseover1 = true;
            else if(!x)
                this.mouseover1 = false;
        },
        handleMouseleave(x){
            if(x)
                this.mouseover2 = true;
            else if(!x)
                this.mouseover2 = false;
        },
        handleDblckick(){
            this.dblclick++;
        },
        handleMousemove(e, n, p){
            if(!this.changeXY) {
                this.x = e.offsetX;
                this.y = e.offsetY;
            }
            if(p == "pause"){
                this.changeXY = !this.changeXY;
            }
        },

    }
        
});

app.mount('#app');