import axios from "axios";
const base = axios.create({
    baseURL: "http://localhost:8088",
  });
  export const getAllEmployee = () => {
    return base.get('/employee');
  };
  export const addEmployee = (name) => {
    return base.post('/employee',{name:name});
  };
  export const updateEmployee = (id,employee) => {
    return base.put(`/employee/${id}`,{employee:employee});
  };
  export const deleteEmployee = (id) => {
    return base.delete(`/employee/${id}`);
  };