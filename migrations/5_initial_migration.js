const Barn = artifacts.require("Barn");

module.exports = function (deployer) {
  deployer.deploy(Barn, "0xF3F0189fa00881715B14d0f0Bd39365a15688824", "0x36cc537BA031DabC9a625af72EB7a64519Fe8d8F");
};

