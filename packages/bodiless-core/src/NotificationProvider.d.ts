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
import { FC } from 'react';
declare type Notification = {
    id: string;
    message: string;
};
declare type NotificationProviderItem = Notification & {
    owner: string;
};
declare type NotificationsContextType = {
    notifications: Notification[];
};
declare const useNotifications: () => NotificationsContextType;
/**
 * A component used to provide notifications.
 *
 * @param children
 * @constructor
 */
declare const NotificationProvider: FC;
/**
 * The useNotify() hook allows you to register notifications which should be
 * displayed to the user upon clicking the "Notifications" button on the main
 * menu.
 *
 * Note that you are responsible for maintaining and persisting the notifications
 * you want to display. Every time your component re-renders, all the notifications
 * it owns will be regenerated from the list provided to this hook.
 *
 * @param notifications An array of Notification objects which should be displayed.
 */
declare const useNotify: (notifications: Notification[]) => void;
export { NotificationProvider, NotificationProviderItem, useNotify, useNotifications, };
//# sourceMappingURL=NotificationProvider.d.ts.map