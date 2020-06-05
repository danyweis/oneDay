var vm = new Vue({
    el: ".app",
    data: {
        urlList: "https://pokeapi.co/api/v2/pokemon?limit=151",
        urlPokemon: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=",
        urlIcon: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/",
        urlImages: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/images/",
        list: [],
        placeholder: [],
        pokemonInfo: [],
        images: [],
        theInfo: "",
        theImages: "",
        ext: ".jpg",
        sortedList: [],
    },
    methods: {
        callList: function () {
            fetch(this.urlList)
                .then((res) => res.json())
                .then((data) => this.callPokemon(data));
        },

        // getList: function (data) {
        //     this.list = data.split(/\n/);
        //     this.splitNames(this.list);
        // },

        // splitNames: function (names) {
        //     for (let i = 0; i < names.length; i++) {
        //         this.placeholder = names[i].split(":");
        //         this.list[i] = this.placeholder;
        //         this.placeholder = [];
        //     }
        //     this.callPokemon();
        // },

        callPokemon: function (data) {
            console.log(data);
            data.results.map((element) => {
                fetch(this.urlPokemon + element.name)
                    .then((res) => res.json())
                    .then((data) => this.pokemonInfo.push(data));
            });
        },

        getInfo: function () {
            console.log(
                this.pokemonInfo.sort(function (a, b) {
                    a.info.id - b.info.id;
                })
            );
        },

        sortList: function () {
            this.sortedList = this.pokemonInfo.sort(function (a, b) {
                a.info.id.value + b.info.id.value;
            });
        },
    },
});
vm.callList();
