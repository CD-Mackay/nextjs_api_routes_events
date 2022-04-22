import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { createContext } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: function() {},
  hideNotification: function() {}
});

export function NotificationContextProvider() {
  return <NotificationContextProvider>
    {props.children}
  </NotificationContextProvider>
};
 

export default NotificationContext;
