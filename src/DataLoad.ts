
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
    let planets;
    try {
        let planetStr = await app.Api.readFileText(planetFile)
        planets = JSON.parse(app.Api.readFileText(planetStr))
    } catch(e) {
        console.error('unable to read planets file ', e)
        return false
    }
    app.model.addSection('planets', {data: planets})
    return true
}