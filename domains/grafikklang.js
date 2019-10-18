D(
  "grafikklang.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", "87.230.27.223", TTL(1)),
  CNAME("*", "grafikklang.ch.", TTL(1)),
  CNAME("www", "grafikklang.ch.", TTL(1))
);
