const TOKEN = {
  HEAD: "Authorization",
  VALUE:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ2aWJsMnVIT1lnVnNWa3RlaEVvVFVvbkMwZGFyMUZ0N0hxdjN1cVl6TGZEeVNJVHB6YSIsImp0aSI6ImNmZWMyODU2ZmZkYzdlYjBmZjdkOTFlNmY4YTJhZTE5MzY3Mzk0ZmFmNDUzYTNlNDYwMzNiZmFhZGRhMDRmZGVhZDg5MzlkZjhmMTMzOWJiIiwiaWF0IjoxNjY5MjY0MTk2LCJuYmYiOjE2NjkyNjQxOTYsImV4cCI6MTY2OTI2Nzc5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.pfvWJNWUnLmpxigUnNKjhy1D3EcrIzNsXISrn1I7p6teLyk5G9wfjGR09S7R1Sne_uQe-WDPNBvHOTuo0Y89206h8SDwppynnHdYLsj49s-jATG70ljrY7pQAlZopWkvfNiTHuMe9QaD-wd9kfbYZuYp5U1U6PwJUGiTnXUUkRsWaDZ0gP7308sva28fZr2i7ZHytPazZHNra_M8kzHlQcrg2hB8L9GX6WJrAPH7o7qD9BJLTSo7u2c8EiKOD_QY9yYuakmNYgj8GyP0i68vmWTHmhISRHA7sFWkiQCDGYmvXa9NHxYyXn7jldi7PhcUdYCmk7uqabsv7hcgSzV7gw",
};

const COOKIE = {
  HEAD: "Cookie",
  VALUE: "PFSESSION=f22d02fa84e7b034ef9fd95aa730b2b1",
};

let myHeaders = new Headers();
myHeaders.append(TOKEN.HEAD, TOKEN.VALUE);
myHeaders.append(COOKIE.HEAD, COOKIE.VALUE);

let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getPetfinderInfo = () => {
  fetch(
    "https://api.petfinder.com/v2/animals?organization=AK81&limit=50",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
