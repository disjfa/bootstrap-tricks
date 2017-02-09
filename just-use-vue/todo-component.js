Vue.component('todo-component', {
    template: '#todo-component',
    data: function () {
        return {
            items: [{
                id: 'item-1',
                title: 'Checkout vue',
                completed: false
            }, {
                id: 'item-2',
                title: 'Use this stuff!!',
                completed: false
            }],
            newItem: ''
        };
    },
    methods: {
        addItem: function () {
            if (this.newItem) {
                var item = {
                    id: Math.random(0, 10000),
                    title: this.newItem,
                    completed: false
                };

                this.items.push(item);
                this.newItem = '';
            }
        }
    }
});
