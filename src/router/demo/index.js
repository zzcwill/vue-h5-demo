const demo = () => import('@/views/demo/index');

const chart = () => import('@/views/demo/chart/chart');
const chart2 = () => import('@/views/demo/chart/chart2');
const chart3 = () => import('@/views/demo/chart/chart3');
const chart4 = () => import('@/views/demo/chart/chart4');

const ajax = () => import('@/views/demo/ajax');
const store = () => import('@/views/demo/store');
const store2 = () => import('@/views/demo/store2');

const filter = () => import('@/views/demo/filter');

const img = () => import('@/views/demo/img');

const ref = () => import('@/views/demo/ref');

const sync = () => import('@/views/demo/sync');

const popup = () => import('@/views/demo/popup');

const demoRoute = [
  {
    path: '/demo',
    name: 'demo',
    component: demo
  },

  {
    path: '/demo/chart',
    name: 'chart',
    component: chart
  },
  {
    path: '/demo/chart2',
    name: 'chart2',
    component: chart2
  },
  {
    path: '/demo/chart3',
    name: 'chart3',
    component: chart3
  },
  {
    path: '/demo/chart4',
    name: 'chart4',
    component: chart4
  },
  {
    path: '/demo/ajax',
    name: 'ajax',
    component: ajax
  },
  {
    path: '/demo/store',
    name: 'store',
    component: store
  },
  {
    path: '/demo/store2',
    name: 'store2',
    component: store2
  },
  {
    path: '/demo/filter',
    name: 'filter',
    component: filter
  },
  {
    path: '/demo/img',
    name: 'img',
    component: img
  },
  {
    path: '/demo/ref',
    name: 'ref',
    component: ref
  },
  {
    path: '/demo/sync',
    name: 'sync',
    component: sync
  },
  {
    path: '/demo/popup',
    name: 'popup',
    component: popup
  }
];

export default demoRoute;
