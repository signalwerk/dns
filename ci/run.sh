#!/bin/bash

echo "ℹ️  DNSControl check"
echo "ℹ️  ref: $GITHUB_REF"
echo "ℹ️  test: $TEST_SH"

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
  push

else
  echo "ℹ️  DNSControl preview"

  docker run --rm \
  -e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
  -e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
  -v $(pwd)/:/dns/ stackexchange/dnscontrol \
  preview

fi
