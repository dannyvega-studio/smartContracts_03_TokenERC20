const Token = artifacts.require('@openzeppelin/contracts/ERC20PresetMinterPauser');

module.exports = function(deployer) {
    deployer.deploy(Token, 'My Token', 'MYT');
};