import Test from '../pages/test/index.js'
import TestRun from '../pages/testRun/index.js'
import FinishTestPage from '../pages/finishTest/index.js'
import HomePage from '../pages/home/index.js'
import MaterialPage from '../pages/materials/index.js'
import LoginPage from '../pages/login/index.js'
import MaterialSinglePage from '../pages/materialSingle/index.js'
import FlashesPage from '../pages/flashes/index.js'
import FlashesCardPage from '../pages/flashCard/index.js'

export const routes = [
  {
    path: 'test',
    component: Test,
  },
  {
    path: 'main',
    component: HomePage
  },
  {
    path: 'material',
    component: MaterialPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'runTest',
    component: TestRun
  },{
    path: 'finishedTest',
    component: FinishTestPage
  },{
    path: 'materialSingle',
    component: MaterialSinglePage
  },{
    path: 'flashes',
    component: FlashesPage
  },{
    path: 'flashCard',
    component: FlashesCardPage
  },
]