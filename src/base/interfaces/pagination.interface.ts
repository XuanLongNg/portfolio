export class IPagination {
    page?: number = 1;
    pageSize?: number = 20;
}

export class IFilter extends IPagination {
    k?: string;
    filterBy?: string[];
    orderBy?: string[];
}
