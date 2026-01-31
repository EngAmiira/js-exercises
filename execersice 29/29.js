const simulateFetch = () => 
  new Promise(resolve => 
    setTimeout(() => resolve('{"id": 1, "name": "John"}'), 2000)
  );

async function getData() {
  try {
    const raw = await simulateFetch();
    const user = JSON.parse(raw); // Parse JSON to Object
    console.log("Data:", user);
  } catch (err) {
    console.error(err);
  }
}

getData();
console.log("Running in background..."); 