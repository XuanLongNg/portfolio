// import {IFilter} from "@/base/interfaces/pagination.interface";
// import {useMutation, useQuery} from "@tanstack/react-query";
// import {CRUDService} from "@/base/services/CRUDService";
// import {EHTTPAction} from "@/base/common/enums/http.enum";
//
// export class BaseCrudHook<T> {
//     protected readonly queryKey: string;
//     protected readonly service: CRUDService<T>;
//
//     constructor(queryKey: string, service: CRUDService<T>) {
//         this.queryKey = queryKey;
//         this.service = service;
//     }
//
//     useGetList(params: IFilter) {
//         return useQuery({
//             queryKey: [this.queryKey, EHTTPAction.GET_LIST],
//             queryFn: async () => await this.service.getList(params),
//             retryDelay: 5000,
//         });
//     }
//
//     useGetDetail(id: string) {
//         return useQuery({
//             queryKey: [this.queryKey, EHTTPAction.GET_ITEM, id],
//             queryFn: async () => await this.service.getDetail(id),
//             retryDelay: 5000,
//         });
//     }
//
//     useCreate() {
//         return useMutation({
//             mutationKey: [this.queryKey, EHTTPAction.CREATE_ITEM],
//             mutationFn: async (data: T) => await this.service.create(data),
//             retryDelay: 5000,
//         });
//     }
//
//     useUpdate(id: string) {
//         return useMutation({
//             mutationKey: [this.queryKey, EHTTPAction.UPDATE_ITEM],
//             mutationFn: async (data: T) => await this.service.update(id, data),
//             retryDelay: 5000,
//         });
//     }
//
//     useDelete() {
//         return useMutation({
//             mutationKey: [this.queryKey, EHTTPAction.DELETE_ITEM],
//             mutationFn: async (id: string) => await this.service.remove(id),
//             retryDelay: 5000,
//         });
//     }
// }