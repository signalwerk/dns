D(
  "moire.pub",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("www", "@", TTL(1))
);

D(
  "m0ire.com",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("www", "@", TTL(1))
);
