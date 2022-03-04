
import {AppCore, MenuEvent} from "@tremho/jove-common";

/* application code for main-page */

export async function pageEnter(app:AppCore) {
    console.log('main page started')

    let date = new Date()
    let lat = 47.5
    let lon = -122.3
    let info = await app.callExtension('lunarCalc', 'getMoonInfo', date, lat, lon)
    console.log('moon info', info)
    setIndicatorPhase(app, info.phaseIndex)
}

function commonFactAction(app:AppCore, factId:string) {
    let fact = ''
    let title = ''
    let unit = ''
    switch (factId) {
        case 'DIAMETER':
            fact = 'diameter'
            title = 'Planet Diameter'
            unit = 'kilometers'
            break;
        case 'DISTANCE':
            fact = 'distance'
            title = 'Distance from Sun'
            unit = 'million kilometers'
            break;
        case 'ORBIT':
            fact = 'orbit'
            title = 'Orbital period (year)'
            unit = 'Earth days'
            break;
        case 'MOONS':
            fact = 'moons'
            title = 'Number of Moons'
            unit = ''
            break;
        default:
            return; // do nothing if we don't recognize the factId
    }
    app.model.setAtPath("planet.fact", fact)
    app.model.setAtPath("planet.title", title)
    app.model.setAtPath("planet.unit", unit)
}
export function onToolAction(toolEvent:MenuEvent) {
    if(toolEvent.id === 'IN_MOONPHASE') {
        return onMoonIndicatorPressed(toolEvent.app)
    }
    const factId = toolEvent.id.split("_")[1]
    commonFactAction(toolEvent.app, factId)

    const app = toolEvent.app;
    app.toggleToolState(toolEvent.id, 'active', 'default')
}

function onMoonIndicatorPressed(app:AppCore) {
    app.navigateToPage('moon')
}

function setIndicatorPhase(app:AppCore, phaseIndex:number) {
    app.setIndicatorState('IN_MOONPHASE', ''+phaseIndex)
}

export function onMenuAction(menuEvent:MenuEvent) {
    if(menuEvent.id.split("_")[0] === "PLANETS") {
        const app = menuEvent.app
        app.model.forceUpdate('planet.fact')
        return
    }
    const factId = menuEvent.id.split("_")[1]
    commonFactAction(menuEvent.app, factId)
}

// filter according to current planet options
export function planetFilter(item:any) {
    // @ts-ignore
    const app = this.app // we are called with the current activity as the "this" pointer

    const innerSelected = app.menuApi.getMenuItem("PLANETS_INNER").checked
    const outerSelected = app.menuApi.getMenuItem("PLANETS_OUTER").checked
    const asteroidSelected = app.menuApi.getMenuItem("PLANETS_ASTEROID").checked
    const plutoSelected = app.menuApi.getMenuItem("PLANETS_PLUTO").checked

    if(item.group === 'inner') {
        return innerSelected;
    }
    if(item.group === 'outer') {
        return outerSelected;
    }
    if(item.group === 'asteroid') {
        return asteroidSelected
    }
    if(item.group === 'dwarf') {
        return plutoSelected
    }
}