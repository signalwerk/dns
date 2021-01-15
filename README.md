[![Build Status](https://ci.signalwerk.ch/api/badges/signalwerk/dns/status.svg)](https://ci.signalwerk.ch/signalwerk/dns)

# DNS Sync
Synchronize all my DNS-Records with [DNSControl](https://github.com/StackExchange/dnscontrol)

## ⚠️ ATTENTION! This Repo is watched by CI and all pushes to master get synced!
If you push to `develop` you just see the preview of the changes [here](https://ci.signalwerk.ch/signalwerk/dns)

## Test
```sh
export CLOUDFLARE_EMAIL=xxx
export CLOUDFLARE_API_KEY=xxx
dnscontrol preview
```

## Test in Docker
```sh
docker run --rm -it \
-e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
-e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
dnscontrol preview

```

## Convert Zone-File in Docker
```sh
docker run --rm -it \
-e CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
convertzone signalwerk.ch signalwerk.ch.txt > signalwerk.js

```
