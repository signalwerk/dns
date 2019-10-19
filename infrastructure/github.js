var GITHUB_SIGNALWERK_CNAME = "signalwerk.github.io.";
var GITHUB_IP1_A = "185.199.108.153";
var GITHUB_IP2_A = "185.199.109.153";
var GITHUB_IP3_A = "185.199.110.153";
var GITHUB_IP4_A = "185.199.111.153";

var GITHUB_A = [
  A("@", GITHUB_IP1_A, TTL(1)),
  A("@", GITHUB_IP2_A, TTL(1)),
  A("@", GITHUB_IP3_A, TTL(1)),
  A("@", GITHUB_IP4_A, TTL(1))
];
