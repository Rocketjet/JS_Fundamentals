// Promise.all ждёт выполнения всех промисов (или первого метода reject()).

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

// [3, 1337, "foo"]

function resolver(promise) {
  return promise.then(
    (v) => {
      return { status: 'fulfilled', value: v };
    },
    (error) => {
      return { status: 'rejected', reason: error };
    },
  );
}

let dataFromPromise;
const promises = [fetch('https://api.sampleapis.com/coffee/hot'), fetch('https://api.sampleapis.com/coffee/hot')];

const results = Promise.all(promises)
  .then((resp) => {
    return resp.map((p) => p.json());
  })
  .then((data) => {
    return Promise.all(data.map(resolver));
  })
  .then((drinks) => {
    dataExtractor(drinks.map((d) => d.value).flat());
  });

function dataExtractor(data) {
  dataFromPromise = data;
}
