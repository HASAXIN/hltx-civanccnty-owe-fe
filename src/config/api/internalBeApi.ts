// import {httpGET, httpPOST} from './request';

import service from "../request/internalBeReq";

export function getEveryDayWord() {
  return service.get('/api/api-wenan-anwei/index.php?type=json');
}
export function getCrazyThursday1() {
  return service.post('/basics/resources/queryResourcesPageBean');
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

