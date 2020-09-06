import axios from "axios";
const base = axios.create({
    baseURL: "http://localhost:8088",
  });
  export const getAllEmployee = () => {
    return base.get('/employee');
  };
  export const addEmployee = (name,departmentId) => {
    return base.post('/employee',{name:name,departmentId:departmentId});
  };
  export const updateEmployee = (id,name) => {
    return base.put(`/employee/${id}`,{name:name});
  };
  export const deleteEmployee = (id) => {
    return base.delete(`/employee/${id}`);
  };
  export const getAllDepartments=()=>{
    return base.get('/department');
  }
  export const addDepartment=(name)=>{
    return base.post('/department',{name:name});
  }
  export const updateDepartment=(id,name)=>{
    return base.put(`/department/${id}`,{name:name});
  }
  export const deleteDepartment = (id) => {
    return base.delete(`/department/${id}`);
  };
  
 