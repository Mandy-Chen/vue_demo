import axios from "axios";
const base = axios.create({
    baseURL: "http://localhost:8088",
  });
  export const getEmployee = () => {
    return base.get('/employee');
  };
  export const addEmployee = (employee) => {
    return base.post('/employee',{employee:employee});
  };
  export const updateEmployee = (id,employee) => {
    return base.put(`/employee/${id}`,{employee:employee});
  };
  export const deleteEmployee = (id) => {
    return base.delete(`/employee/${id}`);
  };