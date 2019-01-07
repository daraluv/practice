import Splash from './pages/Splash';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Detail from './pages/Detail';

const routers = [
  {
    path: '/',
    exact: true,
    component: Splash
  },
  {
    path: '/home',
    exact: false,
    component: Home
  },
  {
    path: '/auth',
    exact: true,
    component: Auth
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/detail/:id',
    exact: true,
    component: Detail
  }
] 

export default routers;