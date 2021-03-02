class Request {
  static getRequest = async (url) => {
    const request = await fetch(url);
    const result = await request.json();

    return result;
  };
}

export default Request;
