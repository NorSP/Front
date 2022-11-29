import React from "react";
import axios from "axios";
import {
    check
} from "prettier";

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
            apiDataVehiclesId: {},

            auth: false,
            profile: {}


        },
        actions: {
            signUp: async (name, email, password) => {
                try {
                    const response = await axios.post('https://3000-norsp-rutas-ol1zl0ef20z.ws-us72.gitpod.io/users', {
                        "name": name,
                        "email": email,
                        "password": password,
                        "is_active": "True"
                    })
                    console.log(response)



                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        alert(error.response ?.data.msg)
                    }

                }
            },

            checkValidToken: async () => {
                const accesToken = localStorage.getItem("token");
                console.log(accesToken);
                try {
                    const response = await axios.get('https://3000-norsp-rutas-ol1zl0ef20z.ws-us72.gitpod.io/valid-token', {
                        headers: {
                            Authorization: "Berrer " + accesToken,
                        }
                    })

                    console.log(response);
                    setStore({
                        auth: response.data.status
                    })


                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        setStore({
                            auth: false
                        })
                    }
                    console.log(error);
                    return false;
                }
            },
            getProfile: async () =>{
               let accessToken = localStorage.getItem("Token")
                try {
                    const response = await axios.get('https://3000-norsp-rutas-ol1zl0ef20z.ws-us72.gitpod.io/profile', {
                       headers:{
                       Authorization: "Barrer " + accessToken
                       }
                    })
                    setStore({profile: response?.data?.user})
                    console.log(response);



                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        alert(error.response?.data.msg)
                    }

                }
            },

            logOut: () => {
                localStorage.removeItem("token")
                setStore({
                    auth: false
                })
            },



            login: async (email, password) => {
                console.log(email, password);
                try {
                    const response = await fetch('https://3000-norsp-rutas-ol1zl0ef20z.ws-us72.gitpod.io/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            "Content-Type": 'application/json'
                        }
                    })
                    if (response.status === 200) {
                        const data = await response.json()
                        console.log(data);
                        localStorage.setItem("token", data.access_token)
                        setStore({
                            auth: true
                        })
                    } else {
                        alert("Wrong email or password")
                    }


                } catch (err) {
                    console.log(err);


                }
            },

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