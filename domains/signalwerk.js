D(
  "signalwerk.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  A("@", HOSTEUROPE_SRV03_IP, TTL(1)),

  // cname to SRV03
  CNAME("www", "@", TTL(1)),
  CNAME("ftp", "@", TTL(1)),
  CNAME("digital", "@", TTL(1)),
  CNAME("media", "@", TTL(1)),
  CNAME("paramatters", "@", TTL(1)),
  CNAME("podcast", "@", TTL(1)),
  CNAME("sh", "@", TTL(1)),
  CNAME("signage", "@", TTL(1)),

  // github-pages
  CNAME("webtypo", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("typesetting", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("cv", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("font-filler", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  CNAME("avatar", GITHUB_SIGNALWERK_CNAME, TTL(1)),
  
  // dyn ssh
  A("ssh-dns", "167.71.107.60", TTL(1)),
  CNAME("ci", "ssh-dns", TTL(1)),
  CNAME("foo", "ssh-dns", TTL(1)),

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
