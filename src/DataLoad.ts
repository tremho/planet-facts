
import {AppCore} from "@tremho/jove-common"

/**
 * Loads planet data from the json file in assets
 * and puts the data into the app Model at path planets.data
 *
 * @param app
 * @return Promise<boolean> resolves true when complete, false if there was an error.
 */
export async function loadPlanets(app:AppCore):Promise<boolean> {

    const planetFile = app.Path.join(app.Path.assetsPath, 'planets.json')
    let planet;
    try {
        let planet= await app.Api.readFileJson(planetFile)
        app.model.addSection('planet', planet)

    } catch(e) {
        console.error('unable to load planet file ', e)
        return false
    }
    return true
}