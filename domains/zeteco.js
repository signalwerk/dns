D(
  "zeteco.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  // root & www
  GITHUB_A_PROXY,
  CNAME("www", "@", TTL(1), { cloudflare_proxy: "on" }),
  CNAME("wiki", "@", TTL(1), { cloudflare_proxy: "on" }),

  // according to https://md.coredump.ch/protokoll-gettogether-20240830
  A("fahrplan", "77.109.139.213", TTL(1)),
  AAAA("fahrplan", "2001:1620:2047::213", TTL(1))
);
