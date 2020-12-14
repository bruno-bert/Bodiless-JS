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
import React from 'react';
import { ContentNode } from './ContentNode';
export declare type NodeMap<D> = {
    activeCollection: string;
    collections: {
        [collection: string]: ContentNode<any>;
    };
};
declare const NodeContext: React.Context<NodeMap<any>>;
declare const useNode: <D extends object>(collection?: string | undefined) => {
    node: ContentNode<D>;
};
declare const useNodeDataHandlers: <D extends object>(collection?: string | undefined, defaultValue?: D) => {
    setComponentData: (data: D) => void;
    componentData: D;
};
export declare type Props = {
    node: ContentNode<any>;
    collection?: string;
};
declare const NodeProvider: React.FC<Props>;
export default NodeProvider;
export { NodeContext, useNode, useNodeDataHandlers };
//# sourceMappingURL=NodeProvider.d.ts.map