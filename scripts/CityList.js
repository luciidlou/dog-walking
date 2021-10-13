// import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const cityObj of cities) {
        citiesHTML += `<li>${cityObj.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

