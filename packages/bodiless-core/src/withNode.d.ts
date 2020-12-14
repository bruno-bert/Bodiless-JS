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
import { WithNodeProps } from './Types/NodeTypes';
declare const withNode: <P extends object, D extends object>(Component: React.ComponentType<P>) => ({ nodeKey, nodeCollection, ...rest }: P & WithNodeProps) => JSX.Element;
declare const withNodeKey: <P extends object>(nodeKeys?: string | Partial<WithNodeProps>) => (Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => React.FC<P & Partial<WithNodeProps>>;
export default withNode;
export { withNodeKey };
//# sourceMappingURL=withNode.d.ts.map