# Shopify Function Template - Local Pickup Delivery Option Generator (app with extensions only)

This is a template for building a Local Pickup Delivery Option Generator function that checks if the cart contains an "oversized" product and if so will only displays pickup locations that allow for "oversized" pickups to the customer at checkout. This app does not include an app home UI.

It contains the basics for building a Shopify app that uses only app extensions. (https://shopify.dev/docs/apps/getting-started)

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Clone the project
```
git clone https://github.com/nf-shopify/local-pickup-function.git
```
You can find function within extensions/local-pickup-function

### Prerequisites

1. Creation of a text metafield on the varirant object to store local pickup type.
![Location Metafield](https://screenshot.click/27-28-k44go-ugsoz.jpg)

2. Creation of a text metafield on the location object to store local pickup type.
![Location Metafield](https://screenshot.click/27-22-6fbft-5v64v.jpg)


### Local Development

[The Shopify CLI](https://shopify.dev/docs/apps/tools/cli) connects to an app in your Partners dashboard. It provides environment variables and runs commands in parallel..

You can develop locally using your preferred package manager. Run one of the following commands from the root of your app.

Using npm:

```shell
npm run dev
```

Open the URL generated in your console. Once you grant permission to the app, you can start to to test the function in your store.


## Developer resources

- [Introduction to Shopify apps](https://shopify.dev/docs/apps/getting-started)
- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-api-js#readme)
