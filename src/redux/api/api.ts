import fetch from './base.api';
import { ENV_CONFIG } from '../../common/env-config';

export const getTodoList = (params?: any) => {
  return ENV_CONFIG.REAL_API_FLAG
    ? fetch.post('/todoList', params)
    : fetch.get('/todoList.json', params);
};
