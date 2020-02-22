export default function registerServiceWorker() {
  const swUrl = `${PUBLIC_URL}/serviceWorker.js`;
  if ('serviceWorker' in navigator) {
    console.log('registering service worker');
    navigator.serviceWorker
      .register(swUrl)
      .then(function registrationSuccessful() {
        console.log('Successfully registered serviceworker');
      })
      .catch(function registrationFailed(err) {
        console.log(err);
      });
  }
}
