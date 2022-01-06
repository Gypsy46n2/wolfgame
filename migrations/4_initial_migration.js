const Woolf = artifacts.require("Woolf");

module.exports = function (deployer) {
  deployer.deploy(Woolf, "0x36cc537BA031DabC9a625af72EB7a64519Fe8d8F", "0xa5Fb9a4B908B1Fd4dd587f4A9C660928EDEcA4e1", "50000");
};

