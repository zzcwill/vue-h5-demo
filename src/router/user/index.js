const login = () => import('@/views/user/login');

const userRoute = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
];

export default userRoute;
