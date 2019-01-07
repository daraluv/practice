import React from 'react';
import routers from './router';
import { Route } from 'react-router';
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom';

/**
 * 在构思如何设计App的路由时，需要注意以下几点
 * 1. 在何时判断是否已经登录
 * 和其他普通的app业务页面不同，登录逻辑独立于其他页面，大多数时候不会访问到。在不考虑登录的情况下，App首页必定
 * 是Home页，通常为一个Tab nav页面。
 * 但是通常情况下，未登陆时必定需要再某个场景下让页面跳转到登陆页面。那么这个时候就需要我们思考路由的设计
 * 通常情况下有两种方案
 * 
 *   + App首次访问时首先进入一个Auth页面，用于判断App是否已经获得登陆权限，已经登陆 -> Home，未登陆 -> Login
 *   + App首次访问直接进入Home，在Home页判断是否已经登陆，如果未登陆 -> Login， 已经登陆 -> 保持不变
 * 
 * 2. 引入启动页，广告页，或者新功能特性介绍页时，需要将这样的页面前置，因此第一个访问的路由则应该是这个页面
 * 
 * 3. 在路由层面，App页面之间不应该存在层级关系，有层级关系的路由不应该当成一个完整的页面来考虑，而只是一个简单的组件元素
 */

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {routers.map((router, key) => (
        <Route path={router.path} exact={router.exact} component={router.component} key={key} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default AppRouter;