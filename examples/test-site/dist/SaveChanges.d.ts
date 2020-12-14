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
 * Form component for saving local changes.
 *
 * @component
 * @param props Props
 * @constructor
 */
declare const SaveChanges: (props: Props) => JSX.Element;
export default SaveChanges;
//# sourceMappingURL=SaveChanges.d.ts.map