function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe("Main flow", function () {
  let accounts;

  before(async function () {
    this.timeout(10000);
    bob = await web3.eth.personal.newAccount("Bob")
    alice = await web3.eth.personal.newAccount("Alice")
    accounts = await web3.eth.getAccounts()
  });

  describe("Setup", function () {
    it("Should deploy with the right setup", async function () {
      this.timeout(10000);
    
      assert.equal(await web3.eth.getBalance(bob), 0)
      assert.equal(await web3.eth.getBalance(alice), 0)
      
      /*
      await web3.miner.setEtherbase(bob)
      assert.equal(web3.eth.blockNumber, 0)
      started = await web3.miner.start(1)
      await sleep(4000)
      setTimeout(web3.miner.stop, 4000)
      */
    });
  });
});
