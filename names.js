var myProductName = "getRoute53Names", myVerion = "0.40b"; 

var fs = require ("fs");
var Route53 = require ("nice-route53");

function buildNameJson (callback) {
	var myRoute53Names = new Object ();
	var options = {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
		};
	var r53 = new Route53 (options);
	r53.zones (function (err, zones) {
		function listCnames (records) {
			if (records !== undefined) {
				for (var i = 0; i < records.length; i++) {
					var record = records [i];
					if (record.type == "CNAME") {
						console.log ("\t" + record.name);
						}
					}
				}
			}
		function nextZone (ix) {
			if (ix < zones.length) {
				var zone = zones [ix];
				r53.records (zone.zoneId, function (err, records) {
					console.log ("\n" + (ix + 1) + " of " + zones.length + ": " + zone.name + "\n");
					myRoute53Names [zone.name] = {
						records: records
						};
					listCnames (records);
					nextZone (ix + 1);
					});
				}
			else {
				if (callback !== undefined) {
					callback (zones, myRoute53Names);
					}
				}
			}
		if (!err) {
			if (zones !== undefined) {
				nextZone (0);
				}
			}
		});
	}

buildNameJson (function (zones, names) {
	fs.writeFile ("zones.json", JSON.stringify (zones, undefined, 4));
	fs.writeFile ("names.json", JSON.stringify (names, undefined, 4));
	});
