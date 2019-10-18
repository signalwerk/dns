#!/bin/bash

echo "-- dnscontrol check"

docker run --rm -it \
-e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
-e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
-v $(pwd)/:/dns/ stackexchange/dnscontrol \
dnscontrol check


if [[ $TRAVIS_BRANCH == 'master' ]]
  echo "-- dnscontrol push"

  docker run --rm -it \
  -e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
  -e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
  -v $(pwd)/:/dns/ stackexchange/dnscontrol \
  dnscontrol push
else
  echo "-- dnscontrol preview"

  docker run --rm -it \
  -e CLOUDFLARE_EMAIL="$CLOUDFLARE_EMAIL" \
  -e CLOUDFLARE_API_KEY="$CLOUDFLARE_API_KEY" \
  -v $(pwd)/:/dns/ stackexchange/dnscontrol \
  dnscontrol preview

fi
