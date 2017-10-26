var SafeMathMod = artifacts.require("./SafeMathMod.sol");
var eBTC = artifacts.require("./EBTC.sol");
var Test = artifacts.require("./Test.sol");

module.exports = function(deployer, network) {
  deployer.deploy(SafeMathMod);
  deployer.link(SafeMathMod, eBTC);
  deployer.deploy(eBTC);
  if(network !== "live") {
    deployer.deploy(Test);
  }
};
