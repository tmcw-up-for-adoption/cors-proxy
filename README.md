## cors-proxy

A proxy that does CORS

    npm install -g cors-proxy
    cors-proxy

Use it with a function like

```js
function proxy(url, headers, auth) {
    return 'http://localhost:3001/' +
        '?url=' + encodeURIComponent(url) +
        (headers ? ('&headers=' + encodeURIComponent(JSON.stringify(headers))) : '') +
        (auth ? ('&auth=' + encodeURIComponent(JSON.stringify(auth))) : '');
}
```

And you can make [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
requests to localhost:3001 from localhost on other ports.
