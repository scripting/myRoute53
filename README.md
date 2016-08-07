### myRoute53

A simple utility that creates a JSON file with a map of your Amazon Route53 names. Runs in Node.js.

#### How to

You must have Node.js installed.

Download the folder, open the folder in your terminal app, and run:

<code>npm install</code>

Be sure two environment variables are set: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, with the values of your AWS access key and secret.

Then run:

<code>node names.js</code>

As it runs it shows you the names of each zone and the CNAMEs defined for that zone. 

When it's done, two files are created: names.json and zones.json.

#### Why?

Route53 is the most expensive service for me, I wanted to understand why and what I could do to fix it.

I also want to move a server that has a lot of A records mapped to it. I wanted to know what they all were. 

