export default function registerServiceWorker() {
  const swUrl = `${PUBLIC_URL}/serviceWorker.js`;
  if ('serviceWorker' in navigator) {
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
