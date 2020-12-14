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
import React, { ComponentType as CT } from 'react';
export declare type HasDataProp<D> = {
    componentData: D;
};
declare const withData: <P extends object, D extends Object>(Component: string | React.ComponentClass<P | D, any> | React.FunctionComponent<P | D>) => ({ componentData, ...rest }: P & HasDataProp<D>) => JSX.Element;
export default withData;
//# sourceMappingURL=withData.d.ts.map