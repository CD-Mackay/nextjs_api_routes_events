import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: function(notificationData) {},
  hideNotification: function() {}
});

export function NotificationContextProvider(props) {

  const [activeNotification, setActiveNotification] = useState();
  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  };
  function hideNotificationHandler() {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  };

  return <NotificationContextProvider value={context}>
    {props.children}
  </NotificationContextProvider>
};
 

export default NotificationContext;
