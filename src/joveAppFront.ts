
import {loadPlanets} from "./DataLoad";

import {AppCore} from "@tremho/jove-common";

/* Render-process application start module */
        
export async function appStart(appContext:AppCore) {
    console.log("planet-facts app has started")

    await appContext.setupMenu('menuDef.txt')

    // add your startup code here
    return loadPlanets(appContext)
}        
