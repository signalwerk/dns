[![Build Status](https://github.com/signalwerk/dns/actions/workflows/dns.yml/badge.svg)](https://github.com/signalwerk/dns/actions)

# DNS Sync

Synchronize all my DNS-Records with [DNSControl](https://github.com/StackExchange/dnscontrol)

## ⚠️ ATTENTION! This Repo is watched by CI and all pushes to master get synced!

If you push to `develop` you just see the preview of the changes [here](https://github.com/signalwerk/dns/actions)

## Test

```sh
export CLOUDFLARE_EMAIL=xxx
export CLOUDFLARE_API_KEY=xxx
dnscontrol preview
```

## Preview changes

Run the DNSControl in Docker to see changes.

```sh
docker run --rm -it \
-e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
-e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
-v $(pwd)/:/dns/ \
stackexchange/dnscontrol preview
```

## Apply changes

Run the DNSControl in Docker to apply changes. ⚠️ Be careful!

```sh
docker run --rm -it \
-e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
-e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
-v $(pwd)/:/dns/ \
stackexchange/dnscontrol push
```

## Zonefile

If you need to convert a Zone-File to later use with DNSControl run [convertzone](https://github.com/StackExchange/dnscontrol/blob/master/cmd/convertzone/README.md)

```sh
docker run --rm -it \
-e CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
-v $(pwd)/:/dns/ \
stackexchange/dnscontrol convertzone signalwerk.ch signalwerk.ch.txt > signalwerk.js
```
