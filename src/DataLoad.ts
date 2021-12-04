
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
        console.log('planet JSON text', planetStr)
        planets = JSON.parse(planetStr)
        console.log('planets as Object', planets)
        app.model.addSection('planets', planets)

        const pdata = app.model.getAtPath('planets.data')
        console.log('>> data retrieved as ', pdata)

    } catch(e) {
        console.error('unable to load planets file ', e)
        return false
    }
    return true
}