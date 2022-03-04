
import {MoonPhase, MoonPosition, MoonTimes, moon} from "@modern-dev/daylight"

export class MoonInfo {
    phaseIndex?:number
    illuminated?:number
    direction?:string
    altitude?: number
    moonrise?: Date
    moonset?: Date
    zodiac?: String
}

export function getMoonInfo(date:Date, latitude:number, longitude:number) {
    const info = new MoonInfo()
    const phase = moon.getPhase(date)
    const position = moon.getPosition(date, latitude, longitude)
    const times = moon.getTimes(date, latitude, longitude)

    // put values into terms our app will use
    const radToDeg = 180 / Math.PI
    // convert values 0.0 - 1.0 into indexes 0-7
    info.phaseIndex = Math.round(phase.phase * 100 / 12.5) % 7
    // convert altitude from radians to degrees, as an integer
    info.altitude = Math.floor(position.altitude * radToDeg)
    // convert the azimuth into a cardinal direction string
    let normAz = position.azimuth
    if(normAz < 0) normAz += Math.PI*2
    let azIndex = Math.floor((normAz * radToDeg) / 22.5)
    const carDir = ['S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'W', 'NW', 'NNW', 'N', 'NNE', 'NE', 'E', 'ESE', 'SE', 'SSE']
    info.direction = carDir[azIndex]
    info.moonrise = times.moonrise
    info.moonset = times.moonset
    info.zodiac = position.zodiacSign
    info.illuminated = phase.fraction

    return info
}