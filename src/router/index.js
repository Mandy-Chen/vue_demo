import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GetAllEmployees from '../components/Employee/GetAllEmployees'
import DeleteEmployee from '../components/Employee/DeleteEmployee'
import IndexMain from '../components/Layout/IndexMain';
Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: IndexMain,
    },
    {
      path: '/getAllEmployees',
      name: 'getAllEmployees',
      component: GetAllEmployees
    },
    {
      path: '/DeleteEmployee',
      name: 'DeleteEmployee',
      component: DeleteEmployee
    }
  ]
})
