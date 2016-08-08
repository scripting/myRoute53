### myRoute53

A simple utility that creates a JSON file with a map of your <a href="https://en.wikipedia.org/wiki/Amazon_Route_53">Amazon Route53</a> names. Runs in Node.js.

#### How to

You must have <a href="https://nodejs.org/en/download/">Node.js</a> installed.

Download the <a href="https://github.com/scripting/myRoute53/archive/master.zip">folder</a>, open the folder in your terminal app, and run:

<code>npm install</code>

Be sure two environment variables are set: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, with the values of your AWS access key and secret.

Then run:

<code>node names.js</code>

As it runs it shows you the names of each zone and the CNAMEs defined for that zone. 

When it's done, two files are created: names.json and zones.json.

#### Why?

Route53 is the most expensive AWS service for me. I wanted to understand why and what I could do to fix it.

I also want to move a server that has a lot of A records mapped to it. I wanted to know what they all were. 

#### Thanks

Thanks to <a href="https://github.com/leorossi">Leo Rossi</a>, the author of <a href="https://github.com/chilts/nice-route53">nice-route53</a>, which <i>is</i> nice. It made this utility possible. Amazon's JavaScript API for Route53 is particularly difficult to comprehend. With nice-route53 I was able to get started immediately because it does what everyone who wants to program Route53 wants to do. 

I wrote a <a href="http://scripting.com/2016/08/08/makingAmazonsDnsApiSimple.html">blog post</a> about this utility. 

<a href="http://davewiner.com/">Dave Winer</a>, August 2016 

