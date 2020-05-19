import { getStore } from './configureStore';

export default async function registerServiceWorker() {
  const swUrl = `${PUBLIC_URL}/serviceWorker.js`;
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const subscribeForPushNotifications = reg => {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey:
        'BM221uCcUB6tJBektDBpuhrFtvECNs7mcShfG6NUnUUR1lV7vGWmWMm7eNZ0ztW4IjDPsGOAG9sQOkjP1hC_23A'
    };
    reg.pushManager.subscribe(subscribeOptions).then(pushSubscription => {
      const store = getStore();

      fetch(`http://localhost:9990/subscribe/${store.getState().chatt.login.userName}`, {
        method: 'POST',
        body: JSON.stringify(pushSubscription),
        headers: {
          'content-type': 'application/json'
        }
      });
    });
  };

  navigator.serviceWorker.register(swUrl, { scope: '/' }).then(
    // eslint-disable-next-line func-names
    function(reg) {
      let serviceWorker;
      if (reg.installing) {
        serviceWorker = reg.installing;
      } else if (reg.waiting) {
        serviceWorker = reg.waiting;
      } else if (reg.active) {
        serviceWorker = reg.active;
      }

      if (serviceWorker) {
        if (serviceWorker.state === 'activated') {
          subscribeForPushNotifications(reg);
        }
        serviceWorker.addEventListener('statechange', e => {
          console.log('sw statechange : ', e.target.state);
          if (e.target.state === 'activated') {
            subscribeForPushNotifications(reg);
          }
        });
      }
    },
    // eslint-disable-next-line func-names
    function(err) {
      console.error('unsuccessful registration with ', err);
    }
  );
}
