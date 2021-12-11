
import {
    testRemote,
    callRemote,
    runRemoteTest,
    compare,
    remoteTitle,
    screenshot
} from '@tremho/jove-test'

import {loadPlanets} from "../../src/DataLoad";

export async function layoutSpy(t: any) {
    await remoteTitle(t, 'Layout Spy')

    let tree = await callRemote('tree')
    console.log(tree)
}
