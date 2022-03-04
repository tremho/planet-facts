
import {loadPlanets} from "./DataLoad";

import {AppCore} from "@tremho/jove-common";

/* Render-process application start module */
        
export async function appStart(appContext:AppCore) {
    console.log("planet-facts app has started")

    await appContext.setupMenu('menuDef.txt')

    appContext.model.addSection('moon', {
        phaseName: 'First Quarter',
        phaseImage: 'images/phase-2.png',
        zodiacImage: "url('zodiac/aries.png')",
        zodiacName: 'aries',
        illumination: 48.23,
        rise: '6:23 pm',
        set : '3:47 am',
        direction: 'SSE',
        altitude: 20
    })

    return  loadPlanets(appContext)
}        
