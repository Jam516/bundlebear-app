---
title: 'How much does it cost to use a smart account?'
date: '2023-12-07'
---

**Sponsored by Safe**🟢✨

Ethereum has a native account system in which each account, known as an EOA, is controlled by a single private key. Users must securely store this key and use it to sign every transaction. This approach has several drawbacks. Firstly, users are vulnerable to losing their funds if they misplace or have their keys stolen. Secondly, it is difficult to automate and customize transaction execution without giving up control of the keys or the assets in the account.
 

Smart accounts address these problems by implementing a system where every account is controlled by a smart contract. Smart contracts are highly customizable, allowing smart accounts to incorporate various verification and transaction execution logic that would not be feasible with an EOA. Since 2018, Safe has been at the forefront of the smart account movement, offering an implementation with features such as multisignature signing, transaction batching and gas sponsorship. This year, a new standard called ERC4337 was launched to establish a common framework for smart accounts. 
 

If smart accounts allow for more security and an enhanced user experience, why haven't smart accounts surpassed EOAs in adoption? One major factor has been the cost of creating and using them on Layer 1 (L1). During the peak of the 2021 bull run, it could cost hundreds of dollars to deploy a smart account on L1. This issue killed many early smart account teams, as they struggled to find users willing to pay the steep account creation costs and couldn't afford to pay the costs themselves. However, with the introduction of Layer 2s (L2s) and sidechains, the cost of deploying and using smart accounts in the Ethereum ecosystem has become more affordable. 
 

In this article, we will analyze the cost of using smart accounts on these L2s and sidechains. Specifically, we will focus on Safe accounts and ERC4337 implementations such as [Zerodev Kernel](https://zerodev.app/) and the [Biconomy Account](https://www.biconomy.io/). We will start by analyzing the cost of native token transfers (ETH transfer on Ethereum, Arbitrum, Optimism and MATIC transfers on Polygon). Then, we will break down the cost of performing ERC20 transfers and deploying new accounts. Finally, we discuss the future outlook of smart account economics.
 

# Native Transfers
 

Using historical data, let's examine the cost of performing a native token transfer using a smart account. For ERC4337 accounts, we will analyze the `actualGasCost` of UserOps that execute a native token transfer. For Safe accounts, we will consider the transaction fee for Safe transactions that achieve the same transfer. 
 

This analysis does not aim to compare the gas efficiency of different account implementations. Several factors, such as fluctuating gas prices, the gas premium charged by the bundler of the UserOp and the fee settings chosen by the app/wallet, influence the cost of an operation, apart from gas efficiency. Instead, this analysis aims to measure the costs that users are facing in real life.
 

We have excluded [anomalous UserOps](https://optimistic.etherscan.io/tx/0x9c6d6690b0f16757ec2110d5e7677a92cc885e0d1dc2573d99abaae0936131f3) where the bundler accepted UserOps with fees significantly lower than the required amount to cover the bundle transaction cost and [anomalous transactions](https://polygonscan.com/tx/0x89dfa0aaeaa646b934b64142e6578a55107051f4c2d15dd188b81869e544e068) where gas prices greatly exceeded the norm.
 

### Polygon
 

![newplot - 2023-12-07T061338.818.png](https://i.imgur.com/tInxT8b.png)
 

On Polygon, Safe users are currently spending the least on native transfers with a weekly average cost of $0.01, followed by Zerodev users at $0.025 and Biconomy users at $0.038. The small difference of $0.028 between the highest and lowest cost indicates that the chosen account implementation does not significantly impact the user experience on low-cost networks.
 

This is particularly true because the current costs exhibit an unusually wide range of variation. In 87% of weeks, the difference between the highest and lowest cost is less than $0.015.
 

### Optimism
 

![newplot - 2023-12-07T081100.404.png](https://i.imgur.com/KehLihw.png)
 

On Optimism, it has been more expensive for smart accounts to make native transfers than on Polygon. Biconomy account users have a weekly average cost of $0.77 per native transfer, while Zerodev Kernel users spend $0.79 and Safe users spend $0.30.
 

### Arbitrum
 

![newplot - 2023-12-07T081658.086.png](https://i.imgur.com/jVesq0d.png)
 

ERC4337 accounts have made fewer native transfers on Arbitrum compared to Polygon and Optimism, so we only have enough data to measure spending in the past three months.
 

Arbitrum has been more expensive for native transfers than both Polygon and Optimism. The cost of native transfers currently sits at $0.46 for Safes, $0.76 for Zerodev Kernels, and $1.05 for Bionomy accounts.

### Insight

Here we observe that selecting the most expensive network in the dataset (Arbitrum) instead of the cheapest one (Polygon) increases the average cost of making a native transfer by more than 30X. The impact of choosing one account implementation over another is negligible compared to the choice of network.

That said, Safe account users consistently spent less on native transfers than ERC4337 account users. 

It is also evident that UserOp fees and Safe transaction prices rose sharply in November. This can be attributed to a general increase in on-chain activity, caused by the recent surge in [inscriptions](https://dune.com/hildobby/inscriptions), which is leading to higher gas fees.

![txns.png](https://i.imgur.com/evjabcY.png)

# ERC20 Transfers

Next, we will analyze the cost of making ERC20 transfers using different smart accounts. It's important to note again that this is not a direct comparison of efficiency. The validation process for ERC4337 UserOps is completely different from Safe transaction validation. Additionally, the Safe transactions in this dataset are not bundled, whereas UserOps are.

### Polygon

![newplot - 2023-12-07T114924.908.png](https://i.imgur.com/8pezGcf.png)

The weekly average cost of making an ERC20 transfer on Polygon is currently $0.011 for Safe account users, $0.017 for Zerodev Kernel users and $0.021 for Biconomy account users. 

The difference between the highest and lowest costs is only $0.01. Once again, we're observing that on low-cost chains, there is minimal variation in cost between different account implementations.

### Optimism

![newplot - 2023-12-07T123623.533.png](https://i.imgur.com/DZPvQcG.png)

On Optimism, ERC20 transfers currently cost an average of $0.59 for Safe accounts, $0.96 for Biconomy accounts and $0.99 for Zerodev Kernels.

As a reminder, we are excluding anomalous transactions like [0x5c…b9ae](https://optimistic.etherscan.io/tx/0x5cbdcf4e7ff1eb9d7db2a20640f2cbbb51dd54cadaa7ca136c10816fec6bb9ae) where the fees paid by the ERC4337 UserOps greatly exceed what is needed to cover their fair share of transaction costs. This can occur when the wallet or application being used has mistakenly high fee settings.

### Arbitrum

![newplot - 2023-12-07T130034.619.png](https://i.imgur.com/K7cNZV8.png)

On Arbitrum, the weekly average cost of making an ERC20 transfer is currently $0.66 for Safe accounts, $1.14 for Biconomy accounts and $1.17 for Zerodev Kernels.

### Insight

Once again, the selection of a smart account implementation has had a relatively minor impact on user experience compared to the choice of network. On Polygon, the costs of ERC20 transfers on different smart accounts vary within a narrow range of $0.01. However, on Arbitrum, this range is larger, at $0.51. The differences between account implementations seem to be less pronounced on low-cost chains.

# Account Deployment

Finally, let’s take a look at the average dollar cost of deploying smart accounts. We will study the gas fees of transactions where a Safe or an ERC4337 account was created. It’s important to note that this is not a pure analysis of the cost of creating a single account. Multiple smart accounts can be created in the same transaction and, unlike Safe deployments, ERC4337 account deployments do not usually happen in isolation but rather get bundled with the first operation made by that account. 

### Polygon

![newplot - 2023-12-07T152200.046.png](https://i.imgur.com/0xJsHRC.png)

Safe deployment transactions on Polygon currently cost an average of $0.036. On average, transactions involving a Zerodev Kernel deployment cost $0.048, while transactions involving a Biconomy account deployment cost $0.024.

### Optimism

![newplot - 2023-12-07T152513.486.png](https://i.imgur.com/UaBAHjg.png)

Safe deployment transactions on Optimism have an average weekly cost of $0.0481. On average, transactions involving a Zerodev Kernel deployment cost $0.663, while transactions involving a Biconomy account deployment cost $1.10.

### Arbitrum

![newplot - 2023-12-07T152639.407.png](https://i.imgur.com/t7RHqNh.png)

Safe deployment transactions on Arbitrum have an average weekly cost of $0.44. On average, transactions involving a Zerodev Kernel deployment cost $0.98, while transactions involving a Biconomy account deployment cost $1.12.

# Future Outlook

Smart accounts make it possible to deliver better onchain user experiences and it’s important that they are affordable for users. L2s and sidechains have significantly reduced the cost of using smart accounts. The data indicates that the choice of chain has a greater impact on smart account costs than the choice of account implementation. While gas-based comparisons may indicate big differences between providers, the actual cost differences for users in terms of dollars are minimal if they opt for a low-cost chain/L2.

It's still early days and there is work to be done. Here are some specific areas where progress can be made in reducing the cost of using ERC4337 accounts:

- A significant portion of ERC4337 smart account activity takes place on L2s. [EIP-4844](https://www.eip4844.com/) is an upcoming Ethereum upgrade that will introduce a new type of transaction called a blob. Rollups will utilize blobs to post data to L1. Unlike normal transactions, which are permanently stored on Ethereum, blobs will only be stored for 2 weeks, so they will be priced a lot cheaper. This change should greatly reduce the cost of using Ethereum rollups and smart accounts on those rollups.
- Signature Aggregators can reduce the cost of ERC4337 UserOps by reducing the amount of calldata that is required. Currently, existing ERC4337 wallet apps do not utilize them, but once they become more widely adopted, this will have a significant impact on costs.