import { request } from 'http';

function getWithHttpModule() {
  const options = {
    hostname: 'httpbin.org',
    path: '/get',
    method: 'GET',
  };

  const req = request(options, (res) => {
    let data = '';

    // Collect response data
    res.on('data', (chunk) => {
      data += chunk;
    });

    // When the response is complete
    res.on('end', () => {
      console.log('HTTP Module Response:', JSON.parse(data));
    });
  });

  // Handle errors
  req.on('error', (error) => {
    console.error('Error with HTTP request:', error);
  });

  // End the request
  req.end();
}

getWithHttpModule();
