[![Build Status](https://travis-ci.org/signalwerk/dns.svg?branch=master)](https://travis-ci.org/signalwerk/dns)

# DNS Sync
Synchronize all my DNS-Records with [DNSControl](https://github.com/StackExchange/dnscontrol)

## ⚠️ ATTENTION! This Repo is watched by Travis-CI and all pushes to master get synced!
If you push to `develop` you just see the preview of the changes in [Travis CI](https://travis-ci.org/signalwerk/dns)

## Test
```sh
export CLOUDFLARE_EMAIL=sh@signalwerk.ch
export CLOUDFLARE_API_KEY=xxx
dnscontrol preview
```