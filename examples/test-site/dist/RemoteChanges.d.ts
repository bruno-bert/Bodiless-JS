/**
 * Copyright © 2020 Johnson & Johnson
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
/// <reference types="react" />
import type { ChangeNotifier } from './useGitButtons';
export declare type BranchUpdateType = {
    branch: string | null;
    commits: string[];
    files: string[];
};
export declare type ResponseData = {
    upstream: BranchUpdateType;
    production: BranchUpdateType;
    local: BranchUpdateType;
};
declare type PropsWithGitClient = {
    client: any;
};
declare type PropsWithFormApi = {
    formApi: any;
};
declare type PropsWithNotify = {
    notifyOfChanges: ChangeNotifier;
};
/**
 * Component for showing and pulling remote changes.
 *
 * @component
 * @param {BackendClient} client
 * @constructor
 */
declare const RemoteChanges: ({ client, notifyOfChanges }: PropsWithGitClient & PropsWithNotify) => JSX.Element;
/**
 * Component for fetching & showing remote changes.
 *
 * @component
 * @param {BackendClient} client
 * @param formApi
 * @constructor
 */
declare const FetchChanges: ({ client, formApi, notifyOfChanges }: PropsWithFormApi & PropsWithGitClient & PropsWithNotify) => JSX.Element;
/**
 * Component for pulling remote changes.
 *
 * @component
 * @param {BackendClient} client
 * @param formApi
 * @constructor
 */
declare const PullChanges: ({ client, formApi, notifyOfChanges }: PropsWithFormApi & PropsWithGitClient & PropsWithNotify) => JSX.Element;
export default RemoteChanges;
export { PullChanges, FetchChanges };
//# sourceMappingURL=RemoteChanges.d.ts.map