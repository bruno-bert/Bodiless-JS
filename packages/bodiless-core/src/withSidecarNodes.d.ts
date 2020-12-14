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
import React, { ComponentType } from 'react';
/**
 * `startSidecarNodes` is an HOC which records the current ContentNode so that
 * it can later be restored.
 *
 * @see `withSidecarNodes`
 *
 * @param Component Any component which uses the Bodiless ContentNode system.
 */
declare const startSidecarNodes: <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => {
    (props: P): JSX.Element;
    displayName: string;
};
/**
 * `endSidecarNodes` is an HOC which restores the ContentNode preserved
 * by `startSidecarNodes`.
 *
 * @see `withSidecarNodes`
 *
 * @param Component Any component which uses the Bodiless ContentNode system.
 */
declare const endSidecarNodes: <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => {
    (props: P): JSX.Element;
    displayName: string;
};
declare type HOC = (Component: ComponentType<any>) => ComponentType<any>;
/**
 * `withSidecarNodes` allows you to establish a `ContentNode` sub-hierarchiy which should
 * be used by a series of one or more HOC's. Any nodes created by the HOC's enclosed in this
 * wrapper will not affect the hierarchy for subsequent HOC's *outside* the wrapper. For
 * example:
 * ```js
 * flowRight(
 *   ...
 *   withNodeKey('foo'), withNode,  // ...$foo
 *   withSidecarNodes(
 *     withNodeKey('bar'), withNode,  // ...$foo$bar
 *   ),
 *   withNodeKey('baz'); withNode, // ...$foo$baz (otherwise would be ...$foo$bar$baz)
 *   ...
 * )
 * ```
 * This is useful, for example, if you want to apply an enhancment HOC which uses its own
 * content node(s) without affecting the node paths of other children of the wrapped component.
 *
 * @param hocs A list of HOC's to be applied using the parallel node hierarchy.  These will
 *             be composed using lodash `flowRight`
 *
 * @return an HOC which can wrap any Component using the Bodiless `ContentNode` system.
 */
declare const withSidecarNodes: (...hocs: HOC[]) => (...args: any[]) => any;
export default withSidecarNodes;
export { startSidecarNodes, endSidecarNodes };
//# sourceMappingURL=withSidecarNodes.d.ts.map