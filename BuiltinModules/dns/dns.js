const dns = require("node:dns");
const { Resolver } = require("node:dns");
const resolver = new Resolver();
resolver.setServers(["4.4.4.4"]);
console.log(resolver.getServers());
console.log(dns.getServers());
dns.lookup("www.google.com", { all: true }, (err, address, family) => {
  console.log("address: %j", address);
});
dns.lookupService("127.0.0.1", 21, (err, hostname, service) => {
  console.log(hostname, service);
});

dns.resolve4("www.google.com", (err, addresses) => {
  if (err) throw err;
  console.log(`addressesIPV4: ${JSON.stringify(addresses)}`);
  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
dns.resolveMx("google.com", (err, addresses) => {
  if (err) throw err;
  console.log(`addressesMX: ${JSON.stringify(addresses)}`);
});
dns.resolveTxt("google.com", (err, addresses) => {
  if (err) throw err;
  console.log(`addressesTXT: ${JSON.stringify(addresses)}`);
});
dns.resolveSrv("_xmpp-server._tcp.gmail.com", (err, addresses) => {
  if (err) throw err;
  console.log(`addressesSRV: ${JSON.stringify(addresses)}`);
});
dns.resolveNs("google.com", (err, addresses) => {
  if (err) throw err;
  console.log(`addressesNS: ${JSON.stringify(addresses)}`);
});
