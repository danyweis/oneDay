var vm = new Vue({
    el: ".app",
    data: {
        urlList: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all",
        urlPokemon: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=",
        urlImages: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/",
        // urlImages: "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/images/",
        list: [],
        placeholder: [],
        pokemonInfo: [],
        images: [],
        theInfo: "",
        theImages: "",
        ext: ".png",
        sortedList: [],
    },
    methods: {
        callList: function () {
            fetch(this.urlList)
                .then((res) => res.text())
                .then((data) => this.getList(data));
        },

        getList: function (data) {
            this.list = data.split(/\n/);
            this.splitNames(this.list);
        },

        splitNames: function (names) {
            for (let i = 0; i < names.length; i++) {
                this.placeholder = names[i].split(":");
                this.list[i] = this.placeholder;
                this.placeholder = [];
            }
            this.callPokemon();
        },

        callPokemon: function () {
            this.list.map((element) => {
                fetch(this.urlPokemon + element[1])
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
