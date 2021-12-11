
import {runRemoteTest, endTest} from '@tremho/jove-test'

import {dataLoadTest} from "./int/dataLoad";
import {layoutSpy} from "./int/layoutSpy"


async function allTest(t: any) {
    await dataLoadTest(t)
    // await layoutSpy(t)
    await endTest(t)
}
runRemoteTest('Planet-Facts e2e Tests', allTest)