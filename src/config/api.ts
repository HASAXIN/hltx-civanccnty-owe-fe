import {httpGET, httpPOST} from './request';

interface CommonResponse {
    code: number,
    data?: any,
    message: string
}
export const getUserList = () => httpGET<CommonResponse>(`/api/api-wenan-anwei/index.php `);
