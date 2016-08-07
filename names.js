var myProductName = "getRoute53Names", myVerion = "0.40a";

var fs = require ("fs");
var Route53 = require ("nice-route53");

function buildNameJson (callback) {
	var myRoute53Names = new Object ();
	var options = {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
		};
	var r53 = new Route53 (options);
	r53.zones (function (err, domains) {
		function nextDomain (ix) {
			if (ix < domains.length) {
				var domain = domains [ix];
				r53.records (domain.zoneId, function (err, records) {
					console.log ("\n" + (ix + 1) + " of " + domains.length + ": " + domain.name + "\n");
					myRoute53Names [domain.name] = {
						records: records
						};
					if (records !== undefined) {
						for (var i = 0; i < records.length; i++) {
							var record = records [i];
							if (record.type == "CNAME") {
								console.log ("\t" + record.name);
								}
							}
						}
					nextDomain (ix + 1);
					});
				}
			else {
				if (callback !== undefined) {
					callback (domains, myRoute53Names);
					}
				}
			}
		if (!err) {
			if (domains !== undefined) {
				nextDomain (0);
				}
			}
		});
	}

buildNameJson (function (zones, names) {
	fs.writeFile ("zones.json", JSON.stringify (zones, undefined, 4));
	fs.writeFile ("names.json", JSON.stringify (names, undefined, 4));
	});
