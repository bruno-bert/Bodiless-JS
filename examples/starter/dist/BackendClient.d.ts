/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
declare type BackendClientConf = {
    baseUrl?: string;
    prefix?: string;
};
export default class BackendClient {
    private root;
    private prefix;
    constructor(backendClientConf?: BackendClientConf);
    get(resourcePath: string): Promise<import("axios").AxiosResponse<any>>;
    post(resourcePath: string, data: any): Promise<import("axios").AxiosResponse<any>>;
    delete(resourcePath: string): Promise<import("axios").AxiosResponse<any>>;
    savePath(resourcePath: string, data: any): Promise<import("axios").AxiosResponse<any>>;
    deletePath(resourcePath: string): Promise<import("axios").AxiosResponse<any>>;
    log(data: any): Promise<import("axios").AxiosResponse<any>>;
    getPath(resourcePath: string): Promise<import("axios").AxiosResponse<any>>;
    saveFile(file: string): Promise<import("axios").AxiosResponse<any>>;
    savePage(path$: string, template?: string): Promise<import("axios").AxiosResponse<any>>;
    commit(message: string, directories: string[], paths: string[], files: string[], author?: string): Promise<import("axios").AxiosResponse<any>>;
    getLatestCommits(): Promise<import("axios").AxiosResponse<any>>;
    pull(): Promise<import("axios").AxiosResponse<any>>;
    reset(): Promise<import("axios").AxiosResponse<any>>;
    amend(paths: string[], files: string[]): Promise<import("axios").AxiosResponse<any>>;
    setCurrent(name: string): Promise<import("axios").AxiosResponse<any>>;
    getSetList(): Promise<import("axios").AxiosResponse<any>>;
    getChanges(): Promise<import("axios").AxiosResponse<any>>;
    getConflicts(target?: string): Promise<import("axios").AxiosResponse<any>>;
    mergeMaster(): Promise<import("axios").AxiosResponse<any>>;
}
export {};
//# sourceMappingURL=BackendClient.d.ts.map