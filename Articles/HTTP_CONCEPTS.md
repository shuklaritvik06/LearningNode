## HTTP Concepts

- HTTP => Hyper Text Transfer Protocol (protocol responsible for communication between servers and client).
- HTTP is stateless, every request is completely independent
- HTTPS => Data Sent is encrypted by SSL (Secure Socket layer) or TLS(transport security layer)
- Methods are Get,post,put,patch,delete

```
- 1xx => Informational/Processing
- 2xx => Success
- 3xx => Redirect
- 4xx => Client Error
- 5xx => Server Error
```

### DNS (Domain Name System)

DNS allows computers to resolve hostname to an IP address. Our OS asks DNS does it know the IP of website we want to know and then it asks to other DNS does anyone know the address of authorative server which knows ".com" IPs then it is transferred to such server where it asks does it know if not it transfers it to the address where there is a possibility,then it gets and return it to the browser and then browser send the get request to the hosted server.

DNS also caches the IPs for better seamless experience.

