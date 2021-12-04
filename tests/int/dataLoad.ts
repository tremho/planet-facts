
import {
    testRemote,
    callRemote,
    runRemoteTest,
    compare,
    remoteTitle,
    screenshot
} from '@tremho/jove-test'

import {loadPlanets} from "../../src/DataLoad";

export async function dataLoadTest(t: any) {
    await remoteTitle(t, 'Data Load')

    // loadPlanets has been called from startApp, so we should find the data in our model at the start
    let planets:any = await callRemote('readModelValue planets.data')
    t.ok(Array.isArray(planets), "Planet data is an array")

}
