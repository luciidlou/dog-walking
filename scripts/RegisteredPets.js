import { getPets, getWalkers, getCities } from "./database.js"

const pets = getPets()
const walkers = getWalkers()
const cities = getCities()
// USE AN EVENT LISTENER TO DISPLAY A window.alert() MESSAGE THAT SAYS ${pet.name} is being walked by ${walker.name}
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pet")) {
//             const [,petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petId)) {
//                     for (const walker of walkers) {
//                         if (walker.id === pet.walkerId) {
//                             window.alert(`${pet.name} is being walked by ${walker.name} `)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// )
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    const walker = walkers.find( walker => walker.id === pet.walkerId)
                    const cityArr = cities.find( city => city.id === walker.cityId)
                    window.alert(`${pet.name} is being walked by ${walker.name} in ${cityArr.name}`)
                }
            }
        }
    }
)




export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

