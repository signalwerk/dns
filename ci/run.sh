#!/bin/bash

echo "ℹ️  DNSControl check"

docker run --rm \
-e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
-e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
dnscontrol check


if [[ $DRONE_BRANCH = "master" ]]; then
  echo "ℹ️  DNSControl push"

  docker run --rm \
  -e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
  -e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
  -v $(pwd)/:/dns/ stackexchange/dnscontrol \
  dnscontrol push
else
  echo "ℹ️  DNSControl preview"

  docker run --rm \
  -e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
  -e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
  -v $(pwd)/:/dns/ stackexchange/dnscontrol \
  dnscontrol preview

fi
