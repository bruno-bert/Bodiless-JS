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
declare global {
    namespace NodeJS {
        interface Global {
            BODILESS_GATSBY_LOGS: string[];
        }
    }
}
declare const log: (message: string) => void;
/**
 * flush logs to a file and clear global object
 * @param message that will be prepended to the logs
 */
declare const flush: (message: string) => void;
declare const validate: () => void;
declare const clear: () => void;
declare const hasLogs: () => boolean;
export { log, flush, hasLogs, validate, clear, };
//# sourceMappingURL=fsLogHandler.d.ts.map