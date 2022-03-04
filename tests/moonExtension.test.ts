
import {MoonInfo, getMoonInfo} from "../src/backExtensions/lunarCalc"
import Tap from "tap"

function test(t:Tap.Tap) {


    // at 4:00 PM 1/16 in Seattle
    let date = new Date('January 16, 2022 4:00 PM PST')
    let latitude = 47.6
    let longitude = -122.3
    let info:MoonInfo = getMoonInfo(date, latitude, longitude)
    t.ok(typeof info === "object", "Computed values for Seattle, "+date.toLocaleString())
    t.ok(info.zodiac === 'Cancer', 'Moon is in Cancer')
    t.ok(info.direction === 'NNE', 'In the NNE')
    t.ok(info.illuminated === 0.9891829745700533, 'nearly fully illuminated ')
    t.ok(info.phaseIndex === 4, 'Full Moon')
    t.ok(info.altitude === 5, '5 degrees above the horizon')
    t.ok(info.moonrise?.toISOString() === '2022-01-16T23:17:28.681Z', 'having risen at '+info.moonrise?.toLocaleTimeString())

    // Valentine's day at 9:00 pm in Denver
    date = new Date('Februrary 14, 2022 9:00 PM MST')
    latitude = 39.7
    longitude = -105
    info = getMoonInfo(date, latitude, longitude)
    t.ok(typeof info === "object", "Computed values for Denver, "+date.toLocaleString())
    t.ok(info.zodiac === 'Cancer', 'Moon is in Cancer')
    t.ok(info.direction === 'E', 'In the East')
    t.ok(info.illuminated === 0.9727375885033228, 'nearly fully illuminated')
    t.ok(info.phaseIndex === 4, 'Full Moon')
    t.ok(info.altitude === 58, '58 degrees above the horizon')
    t.ok(info.moonrise?.toISOString() === '2022-02-14T22:29:07.635Z', 'having risen at '+info.moonrise?.toLocaleTimeString())

    // Midnight April 1 in New York
    date = new Date('April 1, 2022')
    latitude = 40.7
    longitude = -74
    info = getMoonInfo(date, latitude, longitude)
    t.ok(typeof info === "object", "Computed values for New York, "+date.toLocaleString())
    t.ok(info.zodiac === 'Aries', 'Moon is in Aries')
    t.ok(info.direction === 'N', 'In the North')
    t.ok(info.illuminated === 0.0014169472069576194, 'barely illuminated')
    t.ok(info.phaseIndex === 0, 'Very young moon / new moon')
    t.ok(info.altitude === -41, 'Well below the horizon')
    t.ok(info.moonrise?.toISOString() === '2022-04-01T11:10:33.230Z', 'it will rise at '+info.moonrise?.toLocaleTimeString())

    // Midnight April 1 in Tokyo
    date = new Date('April 1, 2022')
    latitude = 35.6
    longitude = 139.6
    info = getMoonInfo(date, latitude, longitude)
    t.ok(typeof info === "object", "Computed values for Tokyo, "+date.toLocaleString())
    t.ok(info.zodiac === 'Aries', 'Moon is in Aries')
    t.ok(info.illuminated === 0.0014169472069576194, 'barely illuminated')
    t.ok(info.phaseIndex === 0, 'Very young moon / new moon')
    t.ok(info.altitude === 25, '25 degrees above the horizon')
    t.ok(info.direction === 'WSW', 'In the WSW')
    t.ok(info.moonrise?.toISOString() === '2022-04-01T21:08:33.168Z', 'having risen at '+info.moonrise?.toLocaleTimeString())

    // Midnight April 1 in Sydney
    date = new Date('April 1, 2022')
    latitude = -33.8
    longitude = 151.2
    info = getMoonInfo(date, latitude, longitude)
    t.ok(typeof info === "object", "Computed values for Sydney, "+date.toLocaleString())
    t.ok(info.zodiac === 'Aries', 'Moon is in Aries')
    t.ok(info.illuminated === 0.0014169472069576194, 'barely illuminated')
    t.ok(info.phaseIndex === 0, 'Very young moon / new moon')
    t.ok(info.altitude === 14, '14 degrees above the horizon')
    t.ok(info.direction === 'W', 'In the West')
    t.ok(info.moonrise?.toISOString() === '2022-04-01T20:49:57.609Z', 'having risen at '+info.moonrise?.toLocaleTimeString())

    t.end()
}
Tap.test('MoonInfo Test', (t:Tap.Tap)=> {
    test(t)
})



