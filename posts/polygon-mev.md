---
title: 'ERC-4337 Bundle Frontrunning on Polygon'
date: '2024-09-23'
---

MEV searchers have frontrun more than 850,00 ERC-4337 bundle transactions on Polygon. I crunched the data to find out how much these bots are earning, who they’re frontrunning, and how they’ve affected Polygon’s smart account ecosystem.
 

## Context
 

ERC-4337 wallets make pseudo-transactions called user operations (UserOps). Bundlers then batch these UserOps into transactions that go onchain. These Bundlers profit by pocketing the difference between the fees paid by the UserOps in the bundle and the gas fee of the transaction.
 

## Methodology
 
For this analysis, I used the [BundleBear](https://www.bundlebear.com/overview/all) database. BundleBear is an open-source dashboard I built to track ERC-4337 adoption. The process I used to identify potential MEV frontrunning transactions is as follows:

For this analysis, I used the BundleBear database—an open-source dashboard I built to track ERC-4337 adoption. The process for identifying potential MEV frontrunning activity is as follows:

1. Find all ERC-4337 bundle transactions that failed with [AA25](https://eips.ethereum.org/EIPS/eip-4337#error-codes) (nonce error) or [AA10](https://eips.ethereum.org/EIPS/eip-4337#error-codes) (sender already constructed) errors.

2. Extract the hash of the failed UserOp from the validateUserOp call in the transaction.

3. Check if a UserOp with that hash has been successfully executed in another transaction. If so, check if the bundler for the successful bundle differs from the one who failed (we're not interested in cases where bundlers frontran themselves).

4. Exclude cases where the frontrunner is a known bundler entity, such as Pimlico, Biconomy, or Alchemy.

The main limitation of this method is that a bundler might be incorrectly labelled as an MEV bot if it belongs to a known bundler entity but hasn't been properly tagged in the [BundleBear database](https://github.com/Jam516/BundleBear/blob/development/models/erc4337/labels/erc4337_labels_bundlers.sql).
 

## How many ERC-4337 bundles are made by MEV bots?

In August, 16% of successful ERC-4337 bundles on Polygon were created by alleged MEV bots. Frontrunning activity first surged in Q2 2024, with the percentage of bundles made by frontrunners jumping from less than 1% in April to 9% in May.
 

![monthly bundles](https://oepmwadzuywhrisyygvh.supabase.co/storage/v1/object/public/Blog%20images/Screenshot%202024-09-22%20190113.png)
 
## How much money are MEV bots earning from this strategy?
 

Not much lol. MEV bots have earned a mere $4,200 in revenue from executing bundles (UserOp fees earned minus gas fees paid).

![revenue](https://oepmwadzuywhrisyygvh.supabase.co/storage/v1/object/public/Blog%20images/Screenshot%202024-09-22%20190018.png?t=2024-09-23T07%3A31%3A36.229Z)

Bundler operators (such as Alchemy, Pimlico, and Biconomy) generate most of their revenue through off-chain agreements with customers. They charge apps based on the quantity of UserOps served or take a percentage of paymaster sponsorship volume. 

These operators aren't aiming to maximize their onchain revenue by demanding higher default UserOp fees from apps. This approach leaves a smaller slice of the pie for MEV bots to exploit. However, profit opportunities do arise for MEV bots when apps or users set unnecessarily high [maxFeePerGas](https://docs.pimlico.io/permissionless/reference/pimlico-actions/getPaymasterData#maxfeepergas-optional) on their UserOps in an attempt to get faster execution.

## Who is getting frontrun?

Among known Bundler operators, Alchemy has been hit hardest by the surge in MEV bot activity, with over 420,000 bundle transactions failed due to front-running on Polygon. Pimlico follows with ~272,000 failed transactions, while Biconomy ranks third with ~34,000.

![failed bundles](https://oepmwadzuywhrisyygvh.supabase.co/storage/v1/object/public/Blog%20images/Screenshot%202024-09-22%20192123.png)

Of the UserOps executed by MEV frontrunners, 38% involved USDT transfers, 11% transferred G1 (the token of [Grindery](https://www.grindery.com/) wallet), and 8.6% minted [Piggybox](https://app.earnm.com/en/piggybox) NFTs (rewards for [Earn'm](https://www.earnm.com/) farmers).

## What's next?

These frontrunning bots monitor the mempool—the blockchain's waiting room for pending transactions—to identify valuable transactions before execution and execute them first. Bundlers need to use solutions that hide their transactions from these searchers. On Polygon, [Fastlane auctions](https://polygon.fastlane.xyz/) can be used to send bundles directly to validator nodes, preventing frontrunning.

Currently, efforts are underway to launch Polygon's first ERC-4337 mempool, exclusively serving UserOps. We'll likely witness similar competition in this mempool between MEV bots and known operators vying to serve valuable bundles first. This competition must be considered in design decisions to mitigate potential negative consequences.