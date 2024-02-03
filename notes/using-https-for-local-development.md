# Using HTTPS for local development

## Generate certificates

```shell
brew install mkcert
```

```shell
# Create and install a local trusted CA
mkcert -install

# Generate certificates
mkcert 127.0.0.1
```



## Start server with certificates
Use [http-server](https://github.com/http-party/http-server) as an example:

```shell
npx http-server --tls \
                --cert 127.0.0.1.pem \
                --key 127.0.0.1-key.pem \
                -o
```
By using `-o`, http-server will open `https://127.0.0.1:8080` in browser automatically.

<br />

## Advanced

### Local DNS mapping
Add the following line into `/etc/hosts`

```
127.0.0.1 example.dev
```



### Reverse proxy
> Let's say there's a service running at `http://localhost:3000`, we don't have control for its tls config. So we are going to start another server to reverse proxy the previous one.

Here we use [mitmproxy](https://mitmproxy.org/) to reverse proxy

```shell
brew install mitmproxy
```

> 📌 Since mitmproxy requires the certs file to contain the certificate and its corresponding key, when using mkcert to generate the certificate, the two need to be generated in the same file.

```shell
mkcert -cert-file ./example.dev.pem \
       -key-file ./example.dev.pem \
       example.dev
```

Run reverse proxy at `443` port

```shell
mitmproxy --listen-port 443 \
          --mode reverse:http://localhost:3000 \
          --certs example.dev.pem
```

`https://example.dev` is working now
