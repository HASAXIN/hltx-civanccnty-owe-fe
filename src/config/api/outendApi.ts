// import {httpGET, httpPOST} from './request';

import service from "../request/outendReq";

export function getEveryDayWord1() {
  return service.get('/api/api-wenan-anwei/index.php?type=json');
}
export function getCrazyThursday(command:any) {
  return service.post('/basics/resourcesConcession/queryResourcesConcessionPageBean',command);
}
export function getCrazyFriday(command:any) {
  return service.post('/basics/resourcesConcession/saveResourcesConcessions  ',command);
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

