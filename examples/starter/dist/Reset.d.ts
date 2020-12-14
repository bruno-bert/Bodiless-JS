/// <reference types="react" />
import { FormApi, FormState } from 'informed';
import { GitClient } from './types';
declare type Props = {
    ui: any;
    formState: FormState;
    formApi: FormApi;
    client: GitClient;
};
/**
 * Form component for reverting local changes.
 *
 * @component
 * @param props Props
 * @constructor
 */
declare const Reset: (props: Props) => JSX.Element;
export default Reset;
//# sourceMappingURL=Reset.d.ts.map