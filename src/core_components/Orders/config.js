export default [
  {
    name: "Orders",
    component: "Orders",
    settings: "",
    settingsWidth: 300,
    img: "core_components/Orders/Orders.png",
    title: "Orders",
    customTitle: "",
    description: "Combined asks and bids",
    author: "#core",
    authorLink: "https://github.com/kupi-network/kupi-terminal",
    source: "",
    stock: undefined,
    pair: undefined,
    channel: "ccxt",
    channels: ["default", "kupi", "ccxt"],
    demo: true,
    type: "both",
    visualMode: "crocodile",
    visualModeMax: "total sum",
    visualModeCrocodileMax: 10000,
    visualModeWallsMax: 1000,
    categories: ["Orders"],
  }
]
