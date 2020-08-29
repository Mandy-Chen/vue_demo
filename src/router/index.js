import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GetAllEmployees from '../components/Employee/GetAllEmployees'
import IndexMain from '../components/Layout/IndexMain';
import App from '../App'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: IndexMain,
      // children: [
      //   {
      //     path: '/getAllEmployees',
      //     name: 'getAllEmployees',
      //     component: GetAllEmployees
      //   }
      // ]
    },
    {
      path: '/getAllEmployees',
      name: 'getAllEmployees',
      component: GetAllEmployees
    }
   
  ]
})
