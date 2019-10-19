D(
  "signalwerk.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  A("digital", "87.230.27.223", TTL(1)),
  A("media", "87.230.27.223", TTL(1)),
  A("paramatters", "87.230.27.223", TTL(1)),
  A("podcast", "87.230.27.223", TTL(1)),
  A("sh", "87.230.27.223", TTL(1)),
  A("signage", "87.230.27.223", TTL(1)),
  A("@", "87.230.27.223", TTL(1)),

  CNAME("ftp", "signalwerk.ch.", TTL(1)),

  CNAME("www", "signalwerk.ch.", TTL(1)),


  // github-pages
  CNAME("webtypo", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("typesetting", GITHUB_SIGNALWERK_CNAME, TTL(1)),

  // dyn ssh
  A("ssh-dns", "167.71.107.60", TTL(1)),
  CNAME("ci", "ssh-dns.signalwerk.ch.", TTL(1)),
  CNAME("foo", "ssh-dns.signalwerk.ch.", TTL(1)),

  // keybase pad
  CNAME("pad", "kbp.keybaseapi.com.", TTL(1)),
  TXT(
    "_keybase_pages.pad",
    "kbp=/keybase/private/signalwerk,kbpbot/pad",
    TTL(1)
  ),

  // MAIL
  A("mx0", "176.28.14.63", TTL(1)),
  MX("@", 50, "mx0.signalwerk.ch.", TTL(1)),
  CNAME("mail", "mx0.signalwerk.ch.", TTL(1)),

  TXT("@", "v=spf1 a mx ip4:176.28.14.63 ~all", TTL(1))
);
