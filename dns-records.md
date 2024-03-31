---
outline: deep
---

# Prohibited DNS records

Hosting or connecting to any sites or services that are or have to do with phishing, scams, viruses, drugs, gambling, pornography, video and audio piracy, illegal information gathering, or violates local (country of that site/service) laws. 

::: danger
If any records of the above are found, account and DNS records will be deleted.
:::


## **DNS Feature List**

|SubDomain|DNS|CDN|DDoS|Under Attack mode|
|-|-|-|-|-|
||||DDoS Protection| *Mitigate layer 7 DDoS attacks*|
|✔️|✔️|✔️|✔️|❌
|✔️|✔️|✔️|✔️|❌

## **DNS Type Supported**

#### IP address resolution

|A|AAAA|CNAME|
|-|-|-|
|✔️|❌|✔️|

### Email authentication

|MX|DKIM|SPF|DMARC|
|-|-|-|-|
|-|-|-|-|

### Specialized records

|TXT|CAA|SRV|SVCB and HTTPS|PTR|SOA|NS|DS and DNSKEY
|-|-|-|-|-|-|-|-|
|-|-|-|-|-|-|-|-|

## Notices

::: info
Under Attack mode is not possible at the moment, as it enables for every subdomain.
:::

::: info
More type of record will be supported in the future.
:::