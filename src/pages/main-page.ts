
import {AppCore, MenuEvent} from "@tremho/jove-common";

/* application code for main-page */

export function pageStart(app:AppCore) {
    console.log('main page started')

}

export function onMenuAction(menuEvent:MenuEvent) {
    console.log('main sees a menu action for ',menuEvent.id)
    const app = menuEvent.app;
    const menuApi = app.MenuApi
    let fact = ''
    let title = ''
    let unit = ''
    switch(menuEvent.id) {
        case 'INFO_DIAMETER':
            fact = 'diameter'
            title = 'Planet Diameter'
            unit = 'kilometers'
            break;
        case 'INFO_DISTANCE':
            fact = 'distance'
            title = 'Distance from Sun'
            unit = 'million kilometers'
            break;
        case 'INFO_ORBIT':
            fact = 'orbit'
            title = 'Orbital period (year)'
            unit = 'Earth days'
            break;
        case 'INFO_MOONS':
            fact = 'moons'
            title = 'Number of Moons'
            unit = ''
            break;
    }
    app.model.setAtPath("planet.fact", fact)
    app.model.setAtPath("planet.title", title)
    app.model.setAtPath("planet.unit", unit)
}

