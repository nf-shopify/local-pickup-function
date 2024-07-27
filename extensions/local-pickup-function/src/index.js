// @ts-check

// Use JSDoc annotations for type safety.
/**
 * @typedef {import("../generated/api").InputQuery} InputQuery
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 * @typedef {import("../generated/api").Operation} Operation
 */

// The @shopify/shopify_function package will use the default export as your function entrypoint.
export default /**
 * @param {InputQuery} input
 * @returns {FunctionResult}
 */
(input) => {
  const { lines } = input.cart;
  // We may have to update the locations array later hence the LET
  let { locations } = input;

  // Check if any items in cart have a local pickup type set to oversized
  const hasOversizedProduct = lines.some(
    (line) =>
      line?.merchandise?.__typename === "ProductVariant" &&
      line?.merchandise?.localPickupType?.jsonValue === "oversized"
  );
  //console.log(`Does cart has an oversized product : ${hasOversizedProduct}`);

  // If there are oversized product(s) in the cart
  // Update location array to only locations that have an oversized pickup type
  // Update cost and pickup instructions

  let cost;
  let pickupInstruction;

  if (hasOversizedProduct) {
    locations = locations.filter(
      (location) => location?.localPickupType?.jsonValue === "oversized"
    );
    cost = 5.99;
    pickupInstruction =
      "Ready for pickup in 2 business days (Oversized Item in cart).";
  }
  //console.log(JSON.stringify(locations));

  const operations = locations.map((location) => ({
    add: {
      title: location.name,
      cost: cost,
      pickupLocation: {
        locationHandle: location.handle,
        pickupInstruction: pickupInstruction,
      },
    },
  }));

  // Return the operations
  return { operations: operations };
};
