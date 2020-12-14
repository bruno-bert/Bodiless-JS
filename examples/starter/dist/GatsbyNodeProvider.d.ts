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
import { Component } from 'react';
import { DefaultContentNode } from '@bodiless/core';
import GatsbyMobxStore, { DataSource } from './GatsbyMobxStore';
declare type State = {
    store: GatsbyMobxStore;
};
export declare type Props = {
    data: any;
    pageContext: {
        slug: string;
    };
};
declare class GatsbyNodeProvider extends Component<Props, State> implements DataSource {
    constructor(props: Props);
    readonly state: State;
    static getDerivedStateFromProps(props: Props, state: State): null;
    shouldComponentUpdate(): boolean;
    get slug(): string;
    getRootNode(collection?: string): DefaultContentNode<object>;
    render(): JSX.Element;
}
export default GatsbyNodeProvider;
//# sourceMappingURL=GatsbyNodeProvider.d.ts.map