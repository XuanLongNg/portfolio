export interface IFilterResponse {
    k?: string;
    sortBy?: string[];
    sortDes?: boolean[];
    filterBy?: string[];
}

export interface IPaginationResponse {
    total: number;
    totalPage: number;
    currentPage: number;
    pageSize: number;
}


export interface IResponse<T> {
    data: T;
    metadata: {
        pagination?: IPaginationResponse,
        filters?: IFilterResponse;
    },
    statusCode: number;
}