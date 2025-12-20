// import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
// import {jwtDecode} from 'jwt-decode';
// import {IParams} from "@/base/common/@types/service.type";
// import {EHttpMethod, EToken} from "@/base/common/enums/app.enum";
// import LocalStorageService from "@/base/services/LocalStorageService";
// import localStorageService from "@/base/services/LocalStorageService";
// import {toast} from "sonner";
//
// const isTokenExpired = (token: string) => {
//     if (!token) return true;
//     try {
//         const decodedToken = jwtDecode(token);
//         const currentTime = Date.now() / 1000;
//         return decodedToken.exp! < currentTime;
//     } catch (error) {
//         console.error('Error decoding token:', error);
//         return true;
//     }
// };
//
// class HttpService {
//     private readonly http: AxiosInstance;
//     private baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
//
//     constructor(customBaseUrl?: string) {
//         this.http =
//             axios.create({
//                 baseURL: customBaseUrl || this.baseURL,
//                 withCredentials: false,
//                 timeout: 5000,
//             });
//
//
//         this.injectInterceptors();
//     }
//
//     // Initialize service configuration
//     public service() {
//         this.injectInterceptors();
//
//         return this;
//     }
//
//     // Perform GET request
//     public async get<T>(
//         url: string,
//         params?: IParams,
//         isPublicApi = false,
//     ): Promise<T> {
//         return this.request<T>(EHttpMethod.GET, url, {
//             params,
//             headers: await this.setupHeaders(false, isPublicApi),
//         });
//     }
//
//     // Perform POST request
//     public async post<T, P>(url: string, payload: P, params?: IParams, isPublicApi = false): Promise<T> {
//         return this.request<T>(EHttpMethod.POST, url, {
//             params,
//             data: payload,
//             headers: await this.setupHeaders(payload instanceof FormData, isPublicApi),
//         });
//     }
//
//     // Perform UPDATE request
//     public async patch<T, P>(url: string, payload: P, params?: IParams, isPublicApi = false): Promise<T> {
//         return this.request<T>(EHttpMethod.PATCH, url, {
//             params,
//             data: payload,
//             headers: await this.setupHeaders(payload instanceof FormData, isPublicApi),
//         });
//     }
//
//     // Perform DELETE request
//     public async delete<T>(url: string, params?: IParams, isPublicApi = false): Promise<T> {
//         return this.request<T>(EHttpMethod.DELETE, url, {
//             params,
//             headers: await this.setupHeaders(false, isPublicApi),
//         });
//     }
//
//     // Get authorization token for requests
//     private async getAuthorization() {
//         let accessToken;
//
//         try {
//             accessToken = LocalStorageService.get(EToken.ACCESS_TOKEN) || '';
//         } catch (e) {
//             // get token on client side
//             accessToken = LocalStorageService.get(EToken.ACCESS_TOKEN) || '';
//             console.log('Error getting token:', e);
//         }
//
//         return accessToken ? {Authorization: `Bearer ${accessToken}`} : {};
//     }
//
//     // Set up request headers
//     private async setupHeaders(
//         hasAttachment = false,
//         isPublicApi = false,
//     ): Promise<AxiosRequestConfig['headers']> {
//         const headers: AxiosRequestConfig['headers'] = {
//             'Content-Type': hasAttachment ? 'multipart/form-data' : 'application/json',
//         };
//
//         if (!isPublicApi) {
//             const auth = await this.getAuthorization();
//             Object.assign(headers, auth);
//         }
//
//         return headers;
//     }
//
//     // Handle HTTP requests
//     private async request<T>(
//         method: EHttpMethod,
//         url: string,
//         options: AxiosRequestConfig,
//     ): Promise<T> {
//         const response: AxiosResponse<T> = await this.http.request<T>({
//             method,
//             url,
//             ...options,
//         });
//         return response?.data || ({} as T);
//     }
//
//     // Inject interceptors for request and response
//     private injectInterceptors() {
//         // Set up request interceptor
//         this.http.interceptors.request.use(async (request) => {
//             // @TODO: implement an NProgress
//             const accessToken = LocalStorageService.get(EToken.ACCESS_TOKEN) || '';
//             if (accessToken && isTokenExpired(accessToken as string)) {
//                 LocalStorageService.remove(EToken.ACCESS_TOKEN);
//                 // await authService.refreshToken();
//             }
//
//             return request;
//         });
//
//         // Retry logic with axios-retry
//         // axiosRetry(this.http, {
//         //     retries: 1,
//         //     retryCondition: (error) => {
//         //         return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED';
//         //     },
//         //     retryDelay: (retryCount) => {
//         //         console.log(`Retry attempt: ${retryCount}`);
//         //         return retryCount * 5000; // delay 1S
//         //     },
//         // });
//
//         // Set up response interceptor
//         this.http.interceptors.response.use(
//             (response) => {
//                 return response;
//             },
//             (error) => {
//                 if (error.code === 'ECONNABORTED') {
//                     console.error('Request timed out');
//                 }
//                 if (!error.response) return;
//                 const statusCode = error.response.status;
//                 if (statusCode === 401) {
//                     toast("Phiên đã hết hạn, vui lòng đăng nhập lại");
//                     localStorageService.remove(EToken.ACCESS_TOKEN);
//                     console.warn('Unauthorized. Redirecting to home page...');
//                     window.location.href = '/';
//                 }
//
//                 if (statusCode === 403) {
//                     toast("Bạn không có quyền truy cập vào trang này");
//                     console.warn('Forbidden access');
//                 }
//
//                 if (statusCode === 500) {
//                     console.error('Internal Server Error');
//                     toast("Có lỗi xảy ra, vui lòng thử lại sau");
//                     LocalStorageService.remove(EToken.ACCESS_TOKEN);
//                     LocalStorageService.remove(EToken.REFRESH_TOKEN);
//                 }
//                 return this.normalizeError(error);
//             },
//         );
//     }
//
//     // Normalize errors
//     private normalizeError(error: any) {
//         // toast("Có lỗi xảy ra, vui lòng thử lại sau");
//         if (axios.isAxiosError(error)) {
//             console.error('Axios error:', error.response?.data || error.message);
//         } else {
//             console.error('Unexpected error:', error);
//         }
//         return Promise.reject(error);
//     }
// }
//
// export {HttpService as default};
