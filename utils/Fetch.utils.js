export default {
  multipleFetch: (urls) => {
    const allRequests = urls.map((url) => fetch(url).then((response) => response.json()));
    return Promise.all(allRequests);
  },
};
