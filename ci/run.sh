#!/bin/bash

echo "ℹ️  DNSControl check"
echo "ℹ️  ref: $GITHUB_REF"

docker run --rm \
-e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
-e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
dnscontrol check


if [[ $GITHUB_REF == "refs/heads/main" ]]; then
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
