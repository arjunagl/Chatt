export default async function registerServiceWorker() {
  const swUrl = `${PUBLIC_URL}/serviceWorker.js`;
  if (!'serviceWorker' in navigator) {
    return;
  }

  navigator.serviceWorker.register(swUrl, { scope: '/' }).then(
    function(reg) {
      var serviceWorker;
      if (reg.installing) {
        serviceWorker = reg.installing;
      } else if (reg.waiting) {
        serviceWorker = reg.waiting;
      } else if (reg.active) {
        serviceWorker = reg.active;
      }

      if (serviceWorker) {
        if (serviceWorker.state == 'activated') {
          //If push subscription wasnt done yet have to do here
          console.log('sw already activated - Do watever needed here');
          const subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey:
              'BM221uCcUB6tJBektDBpuhrFtvECNs7mcShfG6NUnUUR1lV7vGWmWMm7eNZ0ztW4IjDPsGOAG9sQOkjP1hC_23A'
          };
          reg.pushManager.subscribe(subscribeOptions).then(function(pushSubscription) {
            console.log(`pushSubscription = ${pushSubscription}`);
          });
        }
        serviceWorker.addEventListener('statechange', function(e) {
          console.log('sw statechange : ', e.target.state);
          if (e.target.state == 'activated') {
            // use pushManger for subscribing here.
            console.log('Just now activated. now we can subscribe for push notification');
            // subscribeForPushNotification(reg);
          }
        });
      }
    },
    function(err) {
      console.error('unsuccessful registration with ', workerFileName, err);
    }
  );

  // navigator.serviceWorker
  //   .register(swUrl, { scope: '/' })
  //   .then(function(registration) {
  //     const subscribeOptions = {
  //       userVisibleOnly: true,
  //       applicationServerKey:
  //         'BM221uCcUB6tJBektDBpuhrFtvECNs7mcShfG6NUnUUR1lV7vGWmWMm7eNZ0ztW4IjDPsGOAG9sQOkjP1hC_23A'
  //     };

  //     return registration.pushManager.subscribe(subscribeOptions);
  //   })
  //   .then(function(pushSubscription) {
  //     console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
  //     console.log('Sending push');
  //     fetch('http://localhost:9990/subscribe', {
  //       method: 'POST',
  //       body: JSON.stringify(pushSubscription),
  //       headers: {
  //         'content-type': 'application/json'
  //       }
  //     });
  //   });

  // const registration = await navigator.serviceWorker.register(swUrl, { scope: '/' });
  // let serviceWorker = null;
  // if (registration.active) {
  //   serviceWorker = registration.active;
  //   console.log('Service worker active');
  // }

  // if (serviceWorker) {
  //   serviceWorker.addEventListener('activate', function(e) {
  //     console.log(`state = ${serviceWorker.state}`);
  // console.log(`pushManager , ${registration.pushManager}`);
  // const subscription = await registration.pushManager.subscribe({
  //   userVisibleOnly: true,
  //   applicationServerKey:
  //     'BM221uCcUB6tJBektDBpuhrFtvECNs7mcShfG6NUnUUR1lV7vGWmWMm7eNZ0ztW4IjDPsGOAG9sQOkjP1hC_23A'
  // });
  // console.log('Registered push');

  // console.log('Sending push');
  // await fetch('/subscribe', {
  //   method: 'POST',
  //   body: JSON.stringify(subscription),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // });
  // });
  // }
}
