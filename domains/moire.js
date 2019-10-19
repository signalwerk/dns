D(
  "moire.pub",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("*", "moire.pub.", TTL(1)),
  CNAME("www", "moire.pub.", TTL(1))
);

D(
  "m0ire.com",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("*", "m0ire.com.", TTL(1)),
  CNAME("www", "m0ire.com.", TTL(1))
);
