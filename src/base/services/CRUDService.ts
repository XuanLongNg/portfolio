// import HttpService from "@/base/services/HttpService";
// import {IFilter} from "@/base/interfaces/pagination.interface";
// import {IResponse} from "@/base/interfaces/reponse.interface";
//
// class CRUDService<T> extends HttpService {
//     private readonly path: string;
//
//     constructor(path: string) {
//         super();
//         this.path = path;
//     }
//
//     async getList(params: IFilter): Promise<IResponse<T[]>> {
//         return await this.get(this.path, params, true);
//     }
//
//     async getDetail(id: string): Promise<IResponse<T>> {
//         return await this.get(`${this.path}/${id}`, {}, true);
//     }
//
//     async create(payload: T): Promise<IResponse<T>> {
//         return await this.post(this.path, payload, {}, true);
//     }
//
//     async update(id: string, payload: T): Promise<IResponse<T>> {
//         return await this.patch(`${this.path}/${id}`, payload, {}, true);
//     }
//
//     async remove(id: string): Promise<IResponse<T>> {
//         return await this.delete(`${this.path}/${id}`, {}, true);
//     }
// }
//
// export {
//     CRUDService
// }