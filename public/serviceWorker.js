/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

let getVersionPort;
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'INIT_PORT') {
    [getVersionPort] = event.ports;
  }
});

self.addEventListener('push', e => {
  if (!e.data) {
    console.log(`recieved a push notification without any message`);
    return;
  }

  const options = {
    body: e.data.text(),
    icon: 'images/notification-flat.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      { action: 'viewMessage', title: 'View  Message', icon: 'images/checkmark.png' },
      { action: 'close', title: 'Ignore', icon: 'images/xmark.png' }
    ]
  };
  e.waitUntil(self.registration.showNotification('Push Notification', options));
});

self.addEventListener('notificationclick', event => {
  if (event.action === 'viewMessage') {
    getVersionPort.postMessage({ payload: event.notification.body });
  }
});
