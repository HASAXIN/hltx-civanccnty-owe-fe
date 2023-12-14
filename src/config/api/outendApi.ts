// import {httpGET, httpPOST} from './request';

import service from "../request/outendReq";

export function getAppHotNews(title: string) {
  return service.get('/api/dailyhot/?' + 'title='+title);
  // （哔哩哔哩，百度，知乎，百度贴吧，少数派，IT之家，澎湃新闻，今日头条，微博热搜，36氪，稀土掘金，腾讯新闻）
}

export function getCrazyFriday(command: any) {
  return service.post('/basics/resourcesConcession/saveResourcesConcessions  ', command);
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

