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
   {locations , lines} = input.cart;

  // Check if any items in cart have a local pickup type set to oversized
  const hasOversizedProduct = lines.some(
    (line) =>
      line?.merchandise?.__typename === "ProductVariant" &&
      line?.merchandise?.localPickupType?.jsonValue === "oversized"
  );

  console.log(`Cart has an oversized product : ${hasOversizedProduct}`);

  // If there is an oversized product set locations to only locations that have an oversized pickup type
  if (hasOversizedProduct) {
    locations = locations.filter(
      (location) => location?.localPickupType?.jsonValue === "oversized"
    );
  }

  console.log(JSON.stringify(locations))


  let cost;
  let pickupInstruction;

  if (hasOversizedProduct) {
    cost = 5.99;
    pickupInstruction = "Ready for pickup in 2 business days (Oversized Item).";
  } else {
    cost = 0.0;
    pickupInstruction = "Ready for in 2 Hours!";
  }

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
