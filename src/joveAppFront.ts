
import {loadPlanets} from "./DataLoad";

import {AppCore} from "@tremho/jove-common";

/* Render-process application start module */
        
export function appStart(appContext:AppCore) {
    console.log("planet-facts app has started")
    
    // add your startup code here
    return loadPlanets(appContext)
}        
