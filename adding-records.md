---
outline: deep
---

# Adding Records

After registering and login with an account, head to the DNS record dashboard on the web panel, which is shown below.

https://rodns.top/home

::: warning
Each subdomain record requires 1 point. 10 points are given for each account. If more is needed, get support from discord.
:::

## Explaining each fields

Click on "New Record" and fill in the informations, explanations can be found below.

### Enter Subdomain

This is the subdomain that you want to register. 

For example, you want to register the subdomain "lighthouse.example.com", you should enter "lighthouse" in this field.

### Subdomain

Here you can find a list of domains after you clicked on the domain name below the field "Enter subdomain"

This is where you can choose your desired domain ending.

For example, you want to register the subdomain "lighthouse.example.com", you should choose the domain "example.com"

### Record Type

::: info
Currently, RoDNS only support two types of records: A and CNAME (For A Record only IPV4 are supported)
:::

Here you can choose the type of record for the subdomain you want to register.

#### A Record

A records map a domain name to IPv4 or IPv6 address(es).

Name of the subdomain must:
    Be 63 characters or less
    Start with a letter and end with a letter or digit
    Only contain letters, digits, or hyphens (underscores allowed but discouraged)

IPv4 address: Your origin server IPV4 address, cannot be a Cloudflare IP (For example, 93.642.747.82)


#### CNAME Record

CNAME records map a domain name to another (canonical) domain name. They can be used to resolve other record types present on the target domain name.

These records include the following fields:
    Name: A subdomain or the zone apex (@), which must:
    Be 63 characters or less
    Start with a letter and end with a letter or digit
    Only contain letters, digits, or hyphens (underscores are allowed but discouraged)

Target: The hostname where traffic should be directed (example.com).

You can use CNAME records to point to other CNAME records (www.example2.com –> www.example1.com –> www.example.com), but the final record must point to a hostname with a valid IP address (and therefore a valid A or AAAA record) if this hostname is meant to proxy traffic.

Cloudflare uses a process called CNAME flattening to deliver better performance. This process supports a few features and can interact with different setups that depend on CNAME records. Refer to the CNAME flattening section to learn more about this.

### Enter Value (Address)

Here you should enter the IPV4 address if A record is choosen, or domain name if CNAME record is choosen.

### Default / CDN

The default option is DNS only which is not proxied, and CDN is using CloudFlare CDN.

The Proxy status of a DNS record affects how Cloudflare treats incoming traffic to that record. Cloudflare recommends enabling proxy for all A and CNAME records.

#### Proxied records

::: info
Note that if you have multiple A/AAAA records on the same name and at least one of them is proxied, Cloudflare will treat all A/AAAA records on this name as being proxied.
:::

When you proxy specific DNS records through Cloudflare - specifically A, AAAA, or CNAME records — DNS queries for these will resolve to Cloudflare Anycast IPs instead of their original DNS target. This means that all requests intended for proxied hostnames will go to Cloudflare first and then be forwarded to your origin server.

This behavior allows Cloudflare to optimize, cache, and protect all requests to your application, as well as protect your origin server from DDoS attacks.

Because requests to proxied hostnames go through Cloudflare before reaching your origin server, all requests will appear to be coming from Cloudflare’s IP addresses (and could potentially be blocked or rate limited). If you use proxied records, you may need to adjust your server configuration to allow Cloudflare IPs.

Cloudflare Anycast IPs used to proxy traffic on your domain are assigned automatically. These IPs might change at any time for operational reasons. If you need to allowlist Cloudflare IPs on your infrastructure or hosting provider, include the full list of Cloudflare Anycast IPs.

As an Enterprise customer, you have the option to get static IPs or bring your own IPs (BYOIP).

#### DNS-only records

When an A, AAAA, or CNAME record is DNS-only — also known as being gray-clouded — DNS queries for these will resolve to the record’s normal IP address.

::: info
Note that if you have multiple A/AAAA records on the same name and at least one of them is proxied, Cloudflare will treat all A/AAAA records on this name as being proxied.
:::

In addition to potentially exposing your origin IP addresses to bad actors and DDoS attacks, leaving your records as DNS-only means that Cloudflare cannot optimize, cache, and protect requests to your application.

## Submit

After entering all the correct detils, click submit, and done!

::: info
Documentation of "Record Type" section are from [CloudFlare Docs](https://developers.cloudflare.com/), for further and more detailed docs, visit the link above.
:::