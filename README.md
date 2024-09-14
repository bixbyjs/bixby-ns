# bixby-ns

Name service components for Bixby.js.

`bixby-ns` is a set of components for obtaining naming information in a
service-oriented application.

This package takes inspiration - for both its name and its functionality - from
[Name Service Switch](https://en.wikipedia.org/wiki/Name_Service_Switch) (NSS),
a source of common configuration and name resolution mechanisms on Linux and
other UNIX-like operating systems.

Unlike NSS, `bixby-ns` provides information about static, well-known details,
such as [service names](https://www.iana.org/assignments/service-names-port-numbers).
Dynamic information is provided specialized packages that better suit the
requirements of modern, service-oriented architectures including:

- [`bixby-sd`](https://github.com/bixbyjs/bixby-sd): Service discovery and
  hostname-to-address translation.
- [`@authnomicon/*`](https://github.com/authnomicon): Directory services for
  user, group, and credential information.

<div align="right">
  <sup>Developed by <a href="#authors">Jared Hanson</a>.</sub>
</div>

## Authors

- [Jared Hanson](https://www.jaredhanson.me/) { [![WWW](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/globe-12x12.svg)](https://www.jaredhanson.me/) [![Facebook](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/facebook-12x12.svg)](https://www.facebook.com/jaredhanson) [![LinkedIn](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/linkedin-12x12.svg)](https://www.linkedin.com/in/jaredhanson) [![Twitter](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/twitter-12x12.svg)](https://twitter.com/jaredhanson) [![GitHub](https://raw.githubusercontent.com/jaredhanson/jaredhanson/master/images/github-12x12.svg)](https://github.com/jaredhanson) }

## License

[The MIT License](https://opensource.org/licenses/MIT)

Copyright (c) Jared Hanson
