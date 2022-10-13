const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {

            apiDataPeople: [],
            apiDataPlanets: [],
            apiDataVehicles: [],
            favorites: [],

            apiDataPeopleId: {},
            apiDataPlanetsId: {},
            apiDataVehiclesId: {}

            // demo: [
            // 	{
            // 		title: "FIRST",
            // 		background: "white",
            // 		initial: "white"
            // 	},
            // 	{
            // 		title: "SECOND",
            // 		background: "white",
            // 		initial: "white"
            // 	}
            // ]
        },
        actions: {

            FunFavorites: (favorite) => {
                const store = getStore()
                const actions = getActions()
                if (store.favorites.includes(favorite)) {
                    //elimina
                    actions.DelFavorite(favorite)


                } else {
                    setStore({
                        favorites: [...store.favorites, favorite]
                    })
                }



            },

            DelFavorite: (favorite) => {
                const store = getStore()
                setStore({
                    favorites: [...store.favorites.filter((item => item !== favorite))]
                })

            },

            apiPeople: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        apiDataPeople: data.results
                    }))


            },
            apiPlanets: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        apiDataPlanets: data.results
                    }))


            },
            apiVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        apiDataVehicles: data.results
                    }))


            },
            apiPeopleId: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        apiDataPeopleId: data.result
                    }))


            },

            apiPlanetsId: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        apiDataPlanetsId: data.result
                    }))


            },

            apiVehiclesId: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        apiDataVehiclesId: data.result
                    }))


            },

        }


        // Use getActions to call a function within a fuction
        // 		exampleFunction: () => {
        // 			getActions().changeColor(0, "green");
        // 		},
        // 		loadSomeData: () => {
        // 			/**
        // 				fetch().then().then(data => setStore({ "foo": data.bar }))
        // 			*/
        // 		},
        // 		changeColor: (index, color) => {
        // 			//get the store
        // 			const store = getStore();

        // 			//we have to loop the entire demo array to look for the respective index
        // 			//and change its color
        // 			const demo = store.demo.map((elm, i) => {
        // 				if (i === index) elm.background = color;
        // 				return elm;
        // 			});

        // 			//reset the global store
        // 			setStore({ demo: demo });
        // 		}
    }
};


export default getState;