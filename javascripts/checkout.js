const opts = {
  buttonId: 'bread-checkout-btn',
  actAsLabel: false,
  asLowAs: true,
  customCSS: "#bread-button{color:#f11;font-family:'Montserrat',sans-serif;font-size:1em;text-align:center;vertical-align:middle;cursor:pointer}#bread-button.bread-btn:hover{background:#ffd8d8}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}.bread-btn .bread-as-low-as:before,.bread-label .bread-as-low-as:before,.bread-pot:before,.bread-for:before{content:'As low as '}",
  onCustomerClose: onCloseNotifications,
  calculateTax: calcTax,
  done: notifyCompletedStatus,
  shippingOptions: [
    {
      typeId: 1,
      cost: 2300,
      type: "Overnight"
    },
    {
      typeId: 2,
      cost: 1000,
      type: "2-Day"
    }],
  items: [
  {
    name:'Live Unhatched Dinosaur Egg',
    price:10000,
    sku:'UNHATCHEDDINO',
    detailUrl: "dinoemporium.com",
    quantity: 1
  }]
};
bread.checkout(opts);
