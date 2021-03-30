var app = new Vue({
    el:'#app',
    data: {
        open: false,
        col1: [
            'menu',
            'locations',
            'hours'
            ],
        col2: [
            'extras',
            'shop',
            'FAQ'
        ],
    }
})

Vue.component('todo', {
    props: ['todo'],
    template:`<p class="p-5 hover:bg-pine-dark w-1/2">{{todo}}</p>`
})