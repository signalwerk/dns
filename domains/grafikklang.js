D(
  "grafikklang.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),
  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),
  CNAME("www", "grafikklang.ch.", TTL(1))
);
