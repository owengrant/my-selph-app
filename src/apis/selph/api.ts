/* tslint:disable */
/* eslint-disable */
/**
 * Generated API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface SelphieGet
 */
export interface SelphieGet {
    /**
     * 
     * @type {number}
     * @memberof SelphieGet
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SelphieGet
     */
    question?: string;
    /**
     * 
     * @type {string}
     * @memberof SelphieGet
     */
    response?: string;
}

/**
 * FileControllerApi - axios parameter creator
 * @export
 */
export const FileControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} filename 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResponse: async (filename: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'filename' is not null or undefined
            assertParamExists('getResponse', 'filename', filename)
            const localVarPath = `/files/{filename}`
                .replace(`{${"filename"}}`, encodeURIComponent(String(filename)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FileControllerApi - functional programming interface
 * @export
 */
export const FileControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FileControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} filename 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResponse(filename: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResponse(filename, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FileControllerApi - factory interface
 * @export
 */
export const FileControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FileControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} filename 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResponse(filename: string, options?: any): AxiosPromise<void> {
            return localVarFp.getResponse(filename, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FileControllerApi - interface
 * @export
 * @interface FileControllerApi
 */
export interface FileControllerApiInterface {
    /**
     * 
     * @param {string} filename 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileControllerApiInterface
     */
    getResponse(filename: string, options?: any): AxiosPromise<void>;

}

/**
 * FileControllerApi - object-oriented interface
 * @export
 * @class FileControllerApi
 * @extends {BaseAPI}
 */
export class FileControllerApi extends BaseAPI implements FileControllerApiInterface {
    /**
     * 
     * @param {string} filename 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileControllerApi
     */
    public getResponse(filename: string, options?: any) {
        return FileControllerApiFp(this.configuration).getResponse(filename, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SelphieControllerApi - axios parameter creator
 * @export
 */
export const SelphieControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [q] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        askSelph: async (q?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/selphies/{ask}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {any} response 
         * @param {string} [question] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSelphie: async (response: any, question?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'response' is not null or undefined
            assertParamExists('createSelphie', 'response', response)
            const localVarPath = `/api/v1/selphies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (question !== undefined) { 
                localVarFormParams.append('question', question as any);
            }
    
            if (response !== undefined) { 
                localVarFormParams.append('response', new Blob([JSON.stringify(response)], { type: "application/json", }));
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSelphie: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSelphie', 'id', id)
            const localVarPath = `/api/v1/selphies/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllSelphies: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/selphies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SelphieControllerApi - functional programming interface
 * @export
 */
export const SelphieControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SelphieControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [q] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async askSelph(q?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SelphieGet>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.askSelph(q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {any} response 
         * @param {string} [question] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSelphie(response: any, question?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SelphieGet>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSelphie(response, question, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSelphie(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSelphie(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllSelphies(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SelphieGet>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAllSelphies(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SelphieControllerApi - factory interface
 * @export
 */
export const SelphieControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SelphieControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [q] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        askSelph(q?: string, options?: any): AxiosPromise<Array<SelphieGet>> {
            return localVarFp.askSelph(q, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {any} response 
         * @param {string} [question] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSelphie(response: any, question?: string, options?: any): AxiosPromise<SelphieGet> {
            return localVarFp.createSelphie(response, question, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSelphie(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSelphie(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllSelphies(options?: any): AxiosPromise<Array<SelphieGet>> {
            return localVarFp.findAllSelphies(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SelphieControllerApi - interface
 * @export
 * @interface SelphieControllerApi
 */
export interface SelphieControllerApiInterface {
    /**
     * 
     * @param {string} [q] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApiInterface
     */
    askSelph(q?: string, options?: any): AxiosPromise<Array<SelphieGet>>;

    /**
     * 
     * @param {any} response 
     * @param {string} [question] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApiInterface
     */
    createSelphie(response: any, question?: string, options?: any): AxiosPromise<SelphieGet>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApiInterface
     */
    deleteSelphie(id: number, options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApiInterface
     */
    findAllSelphies(options?: any): AxiosPromise<Array<SelphieGet>>;

}

/**
 * SelphieControllerApi - object-oriented interface
 * @export
 * @class SelphieControllerApi
 * @extends {BaseAPI}
 */
export class SelphieControllerApi extends BaseAPI implements SelphieControllerApiInterface {
    /**
     * 
     * @param {string} [q] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApi
     */
    public askSelph(q?: string, options?: any) {
        return SelphieControllerApiFp(this.configuration).askSelph(q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {any} response 
     * @param {string} [question] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApi
     */
    public createSelphie(response: any, question?: string, options?: any) {
        return SelphieControllerApiFp(this.configuration).createSelphie(response, question, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApi
     */
    public deleteSelphie(id: number, options?: any) {
        return SelphieControllerApiFp(this.configuration).deleteSelphie(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SelphieControllerApi
     */
    public findAllSelphies(options?: any) {
        return SelphieControllerApiFp(this.configuration).findAllSelphies(options).then((request) => request(this.axios, this.basePath));
    }
}


