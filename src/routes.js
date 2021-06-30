import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Bills = () => import('./pages/admin/Bills.vue');
const Settings = () => import('./pages/admin/Settings.vue');
const Analytics = () => import('./pages/admin/Analytics.vue');
const Monitoring = () => import('./pages/admin/Monitoring.vue');
const Demographics = () => import('./pages/admin/Demographics.vue');
const Applications = () => import('./pages/admin/Applications.vue');
const Documentation = () => import('./pages/admin/Documentation.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Analytics',
    path: '/admin/analytics',
    component: Analytics,
  },
  {
    name: 'Applications',
    path: '/admin/applications',
    component: Applications,
  },
  {
    name: 'Documentation',
    path: '/admin/documentation',
    component: Documentation,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    component: Settings,
  },
  {
    name: 'Bills',
    path: '/admin/bills',
    component: Bills,
  },
  {
    name: 'Monitoring',
    path: '/admin/monitoring',
    component: Monitoring,
  },
  {
    name: 'Demographics',
    path: '/admin/demographics',
    component: Demographics,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
