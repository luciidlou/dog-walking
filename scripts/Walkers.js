import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const cityArr = cities.find( city => city.id === walker.cityId)
                    window.alert(`${walker.name} services ${cityArr.name}`)
                }
            }
        }
    }
)
0


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const currentWalker of walkers) {
        // walkerHTML += `<li>${currentWalker.name}</li>`
        walkerHTML += `<li id="walker--${currentWalker.id}">${currentWalker.name}</li>`

    }

    walkerHTML += "</ul>"

    return walkerHTML

}
