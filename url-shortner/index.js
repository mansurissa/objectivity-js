// This array acts as a database to store mappings between short and long urls
let urlsStore = [];

const shortUrlCreator = (longUrl) => {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  urlsStore.push({ [`https://shortner.com/${code}`]: longUrl });
  return 'https://shortner.com/' + code;
};

function getLongUrl(shortUrl) {
  let entry = urlsStore.find((item) => item[0] === shortUrl);
  return entry ? entry[1] : null;
}

// ####### TESTS ######

// Generating a short url from long url  which will get stored in the store (our array for this case)
const shortUrl = shortUrlCreator(
  'https://shortner.com/hi/hello/there/long/url/very/long'
);

// Showing all urls in the store
console.log(urlsStore);

// Showing generated short code
console.log('SHORT URL: ', shortUrl);

// Getting a long url given short url
console.log('LONG URL FROM SHORT URL: ', urlsStore[0][shortUrl]);
