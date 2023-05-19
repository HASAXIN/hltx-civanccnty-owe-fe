// import {httpGET, httpPOST} from './request';

import service from "../request/request";

export function getEveryDayWord() {
  return service.get('/api/api-wenan-anwei/index.php?type=json');
  // return service.get('/api/api-wenan-anwei/index.php?type=json',{ baseURL: process.env.VUE_APP_FIRST_API_URL });
}

export function createTodo() {
  return service.post('/todos');
}

export function updateTodo() {
  return service.put('/todos');
}

export function deleteTodo() {
  return service.delete('/todos');
}

