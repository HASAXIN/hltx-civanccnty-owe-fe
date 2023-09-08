// import {httpGET, httpPOST} from './request';

import service from "../request/internalBeReq";

export function getEveryDayWord() {
  return service.get('/api/api-wenan-anwei/index.php?type=json');
}
export function getEveryDayNews(datas:any) {
  console.log(datas,"datas")
  return service.get('/api/api-tplist/go.php/api/News/local_news?'+datas);
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

