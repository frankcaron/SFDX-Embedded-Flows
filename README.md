![Status](https://img.shields.io/badge/status-Beta-yellowgreen)

<h1 align="center">External Embedded Flows With Variable Pass-Through</h1>
<p align="center"><strong>Lightning Out-ta This World</strong></p>

This repo contains a practical example of a working Salesforce Customer 360 Platform Embedded Service Deployment external flow, which can be integrated into any non-Salesforce external website and allow visitors of a website or app to interact with Salesforce without logging into it or otherwise accessing it.

This particular feature has a number of super useful applications, and it's a lesser-known aspect of the digital engagement and Service Cloud side of our Customer 360 Platform.

We've also taken the implementation one step further by allowing the user to pass in an arbitrary value to the flow from the external app using a simple URL query parameter.

## Use Case

In this example, a customer wants to embed a form on their existing website that collects data and creates records inside of Salesforce based on the user input. The user is already logged in to the customer's existing website, so ideally we'd be able to prefill information in the embedded flow to streamline the process.

## Implementation

To accomplish this use case, we're using a few different features:

- We've enabled Embedded Flows using the Embedded Service Deployment feature
- We've passed information from the authentication context in the custom website to the Flow using a query param `varName`
- We use the passed-in values to modify the flow using a Lightning Component as a Local Action in the flow
- We pre-fill the form appropriately with thos evalues and allow the flow to complete

The fancy footwork is mostly accomplished by the Lightning Component.

## Setup Instructions

If you're familiar with SFDX, you'll have everything you need herein to provision a scratch org with the feature enabled. The HTML file included in this repo is an example of a simple website that embeds the JavaScript.

1. Clone the repo
2. Authorize your Dev Hub from VSCode
3. Create a new Scratch Org from the definition herein
4. Log into the Scratch Org and retrieve the JavaScript embed code from the Embedded Service section of Setup.
5. Update the JS code in the repo to use the unique one for your scratch org.
6. Deploy the HTML page somewhere (e.g., jsfiddle.net)
7. Update your `CORS` settings in the Scratch Org to whitelist the web page URL you've deployed
8. Visit the deployed HTML page and add `?varName=ABC` to the URL to see it work.

## Test Version
I've got a developer org that I use to demo this. The username is `fcaron+embedtest@salesforce.com`. While the Scratch Org is alive, you can test [here](https://jsfiddle.net/wp7g413h/7/).

## Documentation

This is a demonstration of the "Embedded Service" feature of Salesforce, and we're using a few neat tricks that Flows supports on the platform to make the magic. Check the following docs for more info.

* [Working with Embedded Flows](https://help.salesforce.com/articleView?id=embedded_flows_setup.htm)
* [Creating An Embedded Service Deployment](https://help.salesforce.com/articleView?id=snapins_create_deployment.htm&type=5)
* [Passing Variables Into A Flow Via Its URL](https://help.salesforce.com/articleView?id=flow_distribute_internal_url_variable.htm&r=https%3A%2F%2Fwww.google.com%2F&type=5)
* [Customizing the Embedded Flow UI Visually](https://help.salesforce.com/articleView?id=snapins_chat_customize_code.htm&type=5)

# Questions?

Made with love by Frank Caron. Big shout out to [Henry Hai](https://github.com/hhai) for forcing me to be not lazy and calling out the Local Action workaround of sorts.
