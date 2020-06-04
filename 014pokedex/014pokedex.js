var vm = new Vue({
    el: "#app",
    data: {
        pageTitle: "Pokedex",
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokeList: [],
    },
    methods: {
        getPokemon: function () {
            for (let i = 1; i < 151; i++) {
                fetch(`${this.url}${i}/`)
                    .then((res) => res.json())
                    .then((data) => this.pokeList.push(data));
            }
            console.log(this.pokeList);
        },
    },
});
vm.getPokemon();
