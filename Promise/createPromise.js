function createPromise() {
  console.log('createPromise FIRED');
  const completeButton = document.getElementById('complete');
  const cancelButton = document.getElementById('cancel');

  const resolver = (resolve, reject) => {
    console.log('Resolver fn FIRED');
    completeButton.addEventListener('click', () => {
      resolve('Nice');
    });
    cancelButton.addEventListener('click', () => {
      reject('Bad');
    });
  };

  return new Promise(resolver);
}

setTimeout(() => {
  console.log('___START___');
}, 150);

const promise = createPromise();
console.log(promise);

promise
  .then((result) => console.log('Success is ', result))
  .catch((error) => {
    console.log('Failure is', error);
  });

console.log('___DONE___');
