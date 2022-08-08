# Ethereum Sniper

Little toy project to watch TxPool on Ethereum with Geth
and act under certain conditions (e.g. smart contract behaviour).

## Requirements

1. Clone the project.
2. Geth installed.
3. Truffle installed.

## How to run?

Start local geth instance with a test net (normally
I would use Ganache, but it appears it does not have a TxPool):

- In terminal A: `geth --datadir /tmp/geth-test --networkid 15`
- In terminal B: `geth attach /tmp/geth-test/geth.ipc`
- In terminal C: `truffle console`


## Sources & Reading materials

- [txpool Namespace](https://geth.ethereum.org/docs/rpc/ns-txpool)
- [The fastest draw on the Blockchain: Ethereum Backrunning](https://amanusk.medium.com/the-fastest-draw-on-the-blockchain-bzrx-example-6bd19fabdbe1)
- [Ethology: A Safari Tour in Ethereum’s Dark Forest](https://medium.com/zengo/ethology-a-safari-tour-in-ethereums-dark-forest-677566d7c575)
- [Exploring the methods of looking into Ethereum’s transaction pool](https://chainstack.com/exploring-the-methods-of-looking-into-ethereums-transaction-pool/)

