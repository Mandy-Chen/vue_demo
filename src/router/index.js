import Vue from 'vue';
import Router from 'vue-router';
import GetAllEmployees from '../components/Employee/GetAllEmployees';
import DeleteEmployee from '../components/Employee/DeleteEmployee';
import UpdateEmployee from '../components/Employee/UpdateEmployee';
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
      path: '/deleteEmployee',
      name: 'deleteEmployee',
      component: DeleteEmployee
    },
    {
      path: '/updateEmployee',
      name: 'updateEmployee',
      component: UpdateEmployee
    },
    
  ]
})
