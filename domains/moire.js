D(
  "moire.pub",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", "87.230.27.223", TTL(1)),
  CNAME("*", "moire.pub.", TTL(1)),
  CNAME("www", "moire.pub.", TTL(1))
);

D(
  "m0ire.com",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", "87.230.27.223", TTL(1)),
  CNAME("*", "m0ire.com.", TTL(1)),
  CNAME("www", "m0ire.com.", TTL(1))
);
