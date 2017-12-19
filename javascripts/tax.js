const calcTax = (shippingContact, callback) => {
  const item = opts["items"][0]
  const tax = (shippingContact["state"] === "NY") ? (0.05 * item["price"] * item["quantity"]) : 0
  return callback(null, tax)
}
