import { Metadata } from "next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import {
    Users,
    Layers,
    Coins,
    Wallet,
    Activity,
} from "lucide-react"
import { SBCChart } from "@/components/retro/stacked-bar-category";
import SBPChart from "@/components/retro/stacked-bar-contracts";
import { SBECChart } from "@/components/retro/stacked-bar-eoa-category";
import { SBCCChart } from "@/components/retro/stacked-bar-chain";
import { appcolumns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import PieChartC from "@/components/retro/pie-chart";


export const metadata: Metadata = {
    title: "BundleBear Half-Year Report 2024",
    description: "Semiannual review of the patterns and trends that shaped the ERC-4337 ecosystem",
};

export default async function YIRPage() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6 md:w-3/5 md:mx-auto ">
                    <div className="flex flex-col items-center  space-y-2 pb-6">
                        <h2 className="text-5xl font-bold tracking-tight">2024 Half-Year Report</h2>
                        <p>
                            Ever since the launch of the ERC-4337 standard in April 2023, more than 8 million accounts have been created and they&apos;ve made 28 million user operations (UserOps).
                            The BundleBear 2024 Half-Year Report aims to push past vanity metrics and offer deeper insight into how many “valuable users” are present in the ERC-4337 ecosystem and what those users are doing. </p>
                        <div>
                            <p>
                                One way to segment accounts by “value” is to look at how often they transact. In this report, I will categorise smart accounts as follows:
                            </p>
                            <li>Light users = 1 UserOp a month</li>
                            <li>Medium users = 2 to 10 UserOps a month</li>
                            <li>Heavy users = More than 10 UserOps a month</li>
                        </div>
                        <p>
                            The BundleBear dataset includes all the ERC-4337 activity on Polygon, Optimism, Arbitrum, Base, Ethereum and Avalanche.
                        </p>
                    </div>

                    <div className="flex flex-col pb-6">
                        <h2 className="text-xl font-bold tracking-tight">Contents</h2>
                        <ol>
                            <li><a href="#section1" className="text-blue-500 underline">Where are the Heavy Users?</a></li>
                            <li><a href="#section2" className="text-blue-500 underline">What are the Heavy Users doing?</a></li>
                            <li><a href="#section3" className="text-blue-500 underline">What’s the economic impact of ERC-4337?</a></li>
                        </ol>
                    </div>

                    <div id="section1" className="flex flex-row gap-2 items-center">
                        <Users />
                        <h2 className="text-3xl font-bold tracking-tight">Where are the Heavy Users?</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section11" className="text-xl font-bold tracking-tight pt-2">3% of monthly active accounts are Heavy users (10+ UserOps/month)</h2>
                        <i>Based on the past 3-month average</i>
                        <p>91% of monthly active accounts are Light Users (1 UserOp/month). 6% are medium users (2-10 UserOps/month)</p>
                        <Card className="border-4 border-black ">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Active Accounts by Category</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBCChart data={monthly_ops_category} xaxis={"MONTH"} yaxis={"NUM_ACCOUNTS"} segment={"CATEGORY"} />
                            </CardContent>
                        </Card>
                        <p>There are fewer heavily-used ERC-4337 accounts than heavily-used EOA wallets. 52% of monthly active EOA wallets make more than one transaction per month.</p>
                        <Card className="border-4 border-black ">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Active EOA Wallets by Category</CardTitle>
                                <CardDescription className="mx-auto">Polygon, Base, Optimism, Arbitrum, Ethereum, Avalanche</CardDescription>
                            </CardHeader>
                            <CardContent >
                                <SBECChart data={eoa_categories} xaxis={"MONTH"} yaxis={"NUM_WALLETS"} segment={"CATEGORY"} />
                            </CardContent>
                        </Card>
                        <h2 id="section12" className="text-xl font-bold tracking-tight pt-6">Base has the most monthly Heavy Users</h2>
                        <i>Based on the past 3-month average</i>
                        <p>In June 2024, Base had 74% of the monthly active Heavy Users (10+ UserOps/month).
                            Polygon was second with 13%, and Arbitrum was third with 9%.
                            This was a massive shift in the rankings because, up until May 2024, Polygon had been the consistent market leader in this category.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Heavy Users by Chain</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBCCChart data={heavy_users_chain} xaxis={"MONTH"} yaxis={"NUM_ACCOUNTS"} segment={"CHAIN"} />
                            </CardContent>
                        </Card>
                        <p>Monthly active Medium Users (2-10 UserOps/month) follow a similar pattern.
                            Base is currently their most used chain with 41% market share followed by Polygon with 28% and Arbitrum with 15%.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Medium Users by Chain</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBCCChart data={medium_users_chain} xaxis={"MONTH"} yaxis={"NUM_ACCOUNTS"} segment={"CHAIN"} />
                            </CardContent>
                        </Card>
                        <p>The Light Users (1 UserOp/month) are most active on Polygon.
                            Polygon currently has 98% of the monthly active Light Users.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Light Users by Chain</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBCCChart data={light_users_chain} xaxis={"MONTH"} yaxis={"NUM_ACCOUNTS"} segment={"CHAIN"} />
                            </CardContent>
                        </Card>
                    </div>

                    <div id="section2" className="flex flex-row gap-2 items-center pt-7">
                        <Activity />
                        <h2 className="text-3xl font-bold tracking-tight">What are the Heavy Users doing?</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section21" className="text-xl font-bold tracking-tight pt-2">Top 5 apps used by Heavy Users (Past 6 months)</h2>
                        <DataTable columns={appcolumns} data={heavy_users_app_table} entity={false} />
                        <p>In Q1 2024, the most popular activity for Heavy User accounts was farming NFTs on <a href="https://anichess.com/" className="text-blue-500 underline" target="_blank">Anichess</a>, a free-to-play chess game.
                            Then in May, <a href="https://www.alfafrens.com/" className="text-blue-500 underline" target="_blank">Alfafrens</a>, a SocialFi app where users are streamed ALFA tokens using Superfluid and pay transaction fees in DEGEN, briefly became the #1 app for power users.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Heavy Users by App</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBPChart data={heavy_users_app_chart} />
                            </CardContent>
                        </Card>
                        <h2 id="section22" className="text-xl font-bold tracking-tight pt-6">Top 5 apps used by Medium Users (Past 6 months)</h2>
                        <DataTable columns={appcolumns} data={medium_users_app_table} entity={false} />
                        <p>In Q4 of 2023, <a href="https://fantv.world/" className="text-blue-500 underline" target="_blank">FanTV</a> (a watch-to-earn India-focused streaming service) and <a href="https://www.capxai.org/" className="text-blue-500 underline" target="_blank">CapX</a> (users complete quests to earn tokens) were the most popular apps amongst Medium Users.
                            In the first half of 2024, Anichess claimed the top spot, similar to what we saw with the Heavy users. FanTV briefly retook the top spot in April 2024 before being surpassed by Anichess again.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Medium Users by App</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBPChart data={medium_users_app_chart} />
                            </CardContent>
                        </Card>
                        <h2 id="section23" className="text-xl font-bold tracking-tight pt-6">Top 5 apps used by Light Users (Past 6 months)</h2>
                        <DataTable columns={appcolumns} data={light_users_app_table} entity={false} />
                        <p>
                            <a href="https://x.com/cyberconnecthq" className="text-blue-500 underline" target="_blank">Cyberconnect</a> (a crypto social app where every profile is a smart account) and FanTV drove most of the Light User activity in Q4 2023. In February 2024, Cyberconnect edged out FanTV and took the top spot by a wide margin.
                            Then, Piggybox NFT rapidly grew to eclipse all other apps used by this demographic.
                            Users receive these NFTs when they sign up for <a href="https://app.earnm.com/en/piggybox" className="text-blue-500 underline" target="_blank">EARN&apos;M</a>, an app where you farm tokens by completing tasks like using different apps and following projects on Twitter.
                        </p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Light Users by App</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBPChart data={light_users_app_chart} />
                            </CardContent>
                        </Card>
                    </div>

                    <div id="section3" className="flex flex-row gap-2 items-center pt-7">
                        <Coins />
                        <h2 className="text-3xl font-bold tracking-tight">Economic Impact</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section31" className="text-xl font-bold tracking-tight pt-2">$9.2M of tokens are held by ERC-4337 accounts</h2>
                        <i>Based on wallet balances for Base, Polygon, Arbitrum, Optimism and Ethereum</i>
                        <p>
                            Ethereum is currently the top chain by ERC-4337 TVL with more than $6M of funds held.
                            Polygon is a distant second with $1.6M, followed by Arbitrum with $1M.
                            Base is fourth with $273k and Optimism is last with $183k.
                            This is interesting because Ethereum has <a href="https://www.bundlebear.com/" className="text-blue-500 underline" target="_blank">less ERC-4337 activity</a> than the other chains in the dataset, but the average account on Ethereum is wealthier than the average account on its L2s.
                        </p>
                        <p className="py-4">
                            <strong> Note:</strong> <a href="https://docs.allium.so/historical-data/prices" className="text-blue-500 underline" target="_blank">Allium’s token price dataset</a> was used to calculate the USD value of wallet balances.
                            This calculation will undercount reality because some tokens may not be present in the price dataset.
                        </p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">TVL by Chain</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <PieChartC data={tvl_chain} yaxis={'TVL'} pct={true} />
                            </CardContent>
                        </Card>
                        <h2 id="section32" className="text-xl font-bold tracking-tight pt-6">35% of ERC-4337 TVL is in rsETH</h2>
                        <p>
                            More than 1,000 accounts on Ethereum hold a total of $3.2M rsETH, making it the #1 token contributing to ERC-4337 TVL.
                            WAVX holds the #2 spot.
                            The catch is that all $1.36M of WAVX is held by a single account on Ethereum (<a href="https://etherscan.io/address/0x6e281d7c6c1eacc87ead6035a9832c563b2d496c" className="text-blue-500 underline" target="_blank">0x6e28..6c</a>).
                            ETH is in third place with $1.16M held by more than 23,000 accounts across Optimism, Ethereum, Base, and Arbitrum.
                            USDT is in fourth place with $848k held by over 11,000 accounts on Arbitrum, Polygon, Ethereum, and Optimism.
                        </p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">TVL by Token</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <PieChartC data={tvl_token} yaxis={'TVL'} pct={true} />
                            </CardContent>
                        </Card>
                        <h2 id="section33" className="text-xl font-bold tracking-tight pt-6">75% of accounts with non-zero balances hold less than $10</h2>
                        <p>
                            Out of the ~55,000 smart accounts with non-zero balances, 2% hold more than $1000.
                            This small group of $1000+ accounts is responsible for 86% of ERC-4337 TVL.
                        </p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Quantity of Accounts with Non-zero Balances</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <PieChartC data={tvl_category} yaxis={'NUM_ACCOUNTS'} pct={true} />
                            </CardContent>
                        </Card>
                        <h2 id="section34" className="text-xl font-bold tracking-tight pt-6">99.4% of the deployed accounts currently don&apos;t hold any funds</h2>
                        <i>(or at least don&apos;t hold tokens for which we have price data)</i>
                        <p>
                            This makes sense when you consider that most ERC-4337 activity is driven by free apps. For example, creating a profile on Cyberconnect or claiming an Anichess NFT with your gas sponsored by the app doesn&apos;t require you to fund your account. Or you might be using an app like FanTV where you claim a token that can only be used for in-app activities and isn&apos;t traded on DEXs.
                        </p>
                        <h2 id="section35" className="text-xl font-bold tracking-tight pt-6">ERC-4337 usage has consumed $3.2M of Gas Fees</h2>
                        <i>Based on the price of ETH/MATIC/AVAX at time of transaction</i>
                        <p>
                            Ethereum is the top chain by ERC-4337 bundler gas spend. Bundlers have spent over $1M bundling UserOps into transactions on Ethereum. Given Ethereum&apos;s higher gas fees compared to the L2s and alt-L1s in the dataset, it&apos;s not surprising it took the #1 spot. Base ranks second for ERC-4337 gas spending with $745K, and Arbitrum is third with $450K.
                        </p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Bundler Gas Spend by Chain</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <PieChartC data={gas_chain} yaxis={'GAS_SPEND'} pct={true} />
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div >
        </>
    )
}

const monthly_ops_category = [
    {
        "MONTH": "2023-10-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 130233
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 42470
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 20717
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 346773
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 8604
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 96468
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 395381
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 5474
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 35434
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 37120
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 57583
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 457792
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 301818
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 571746
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 62702
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 47067
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 48897
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 520770
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 585287
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 46170
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 81030
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 1530864
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 21720
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 78727
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CATEGORY": "More than 10 UserOps",
        "NUM_ACCOUNTS": 14962
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CATEGORY": "02-10 UserOps",
        "NUM_ACCOUNTS": 52659
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CATEGORY": "01 UserOp",
        "NUM_ACCOUNTS": 2499587
    }
]

const eoa_categories = [
    {
        "MONTH": "2024-01-01 00:00:00.000 UTC",
        "CATEGORY": "More than 1 transaction",
        "NUM_WALLETS": 8909631
    },
    {
        "MONTH": "2024-01-01 00:00:00.000 UTC",
        "CATEGORY": "01 transaction",
        "NUM_WALLETS": 8958383
    },
    {
        "MONTH": "2024-02-01 00:00:00.000 UTC",
        "CATEGORY": "More than 1 transaction",
        "NUM_WALLETS": 9417167
    },
    {
        "MONTH": "2024-02-01 00:00:00.000 UTC",
        "CATEGORY": "01 transaction",
        "NUM_WALLETS": 9709277
    },
    {
        "MONTH": "2024-03-01 00:00:00.000 UTC",
        "CATEGORY": "01 transaction",
        "NUM_WALLETS": 12760111
    },
    {
        "MONTH": "2024-03-01 00:00:00.000 UTC",
        "CATEGORY": "More than 1 transaction",
        "NUM_WALLETS": 13719800
    },
    {
        "MONTH": "2024-04-01 00:00:00.000 UTC",
        "CATEGORY": "01 transaction",
        "NUM_WALLETS": 12352608
    },
    {
        "MONTH": "2024-04-01 00:00:00.000 UTC",
        "CATEGORY": "More than 1 transaction",
        "NUM_WALLETS": 15320670
    },
    {
        "MONTH": "2024-05-01 00:00:00.000 UTC",
        "CATEGORY": "More than 1 transaction",
        "NUM_WALLETS": 16263682
    },
    {
        "MONTH": "2024-05-01 00:00:00.000 UTC",
        "CATEGORY": "01 transaction",
        "NUM_WALLETS": 15243874
    },
    {
        "MONTH": "2024-06-01 00:00:00.000 UTC",
        "CATEGORY": "01 transaction",
        "NUM_WALLETS": 18457749
    },
    {
        "MONTH": "2024-06-01 00:00:00.000 UTC",
        "CATEGORY": "More than 1 transaction",
        "NUM_WALLETS": 18314769
    }
]

const heavy_users_chain = [
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 210
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 946
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 19320
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 12
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 21
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 208
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 6894
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 593
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 330
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 30
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 700
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 57
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 1143
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 444
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 80
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 2870
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 50
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 887
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 466
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 35450
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 245
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 108
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 130
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 721
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 133
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 170
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 61425
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 159
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 393
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 422
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 108
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 240
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 46433
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 398
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 1117
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 601
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 67
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 2450
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 42435
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 320
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 735
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 163
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 633
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 212
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 68
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 10988
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 9468
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 351
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 11050
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 1967
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 360
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 61
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 1279
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 245
    }
]

const medium_users_chain = [
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 592
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 163
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 38147
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 426
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 105
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 3037
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 651
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 92085
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 547
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 2482
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 471
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 232
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 556
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 12219
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 2155
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 16357
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 741
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 3406
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 1105
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 502
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 1632
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 50798
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 577
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 2969
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 2775
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 749
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 5673
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 416
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 291359
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 846
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 538
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 5783
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 1996
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 35430
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 452
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 2868
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 68764
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 384
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 677
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 6430
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 1342
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 3433
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 1127
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 26032
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 796
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 43436
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 441
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 6895
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 14641
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 323
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 880
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 7964
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 21421
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 7430
    }
]

const light_users_chain = [

    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 110954
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 1969
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 101
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 2541
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 271
    },
    {
        "MONTH": "2023-10-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 14397
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 1321
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 1309
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 35352
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 308213
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 372
    },
    {
        "MONTH": "2023-11-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 206
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 2942
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 385366
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 3696
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 295
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 2589
    },
    {
        "MONTH": "2023-12-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 493
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 488
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 2883
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 449507
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 649
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 994
    },
    {
        "MONTH": "2024-01-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 3271
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 5965
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 2308
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 421
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 557250
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 538
    },
    {
        "MONTH": "2024-02-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 5264
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 16023
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 10015
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 332
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 491547
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 419
    },
    {
        "MONTH": "2024-03-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 2434
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 559092
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 323
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 17503
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 4747
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 527
    },
    {
        "MONTH": "2024-04-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 3095
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 603
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 1491058
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 382
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 1943
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 31625
    },
    {
        "MONTH": "2024-05-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 5253
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "OPTIMISM",
        "NUM_ACCOUNTS": 14718
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "ETHEREUM",
        "NUM_ACCOUNTS": 669
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "BASE",
        "NUM_ACCOUNTS": 19968
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "ARBITRUM",
        "NUM_ACCOUNTS": 18217
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "POLYGON",
        "NUM_ACCOUNTS": 2445770
    },
    {
        "MONTH": "2024-06-01 00:00:00",
        "CHAIN": "AVALANCHE",
        "NUM_ACCOUNTS": 245
    }
]

const heavy_users_app_table = [
    {
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_UNIQUE_SENDERS": 64654,
        "NUM_OPS": 4594369
    },
    {
        "PROJECT": "Degen",
        "NUM_UNIQUE_SENDERS": 10978,
        "NUM_OPS": 174212
    },
    {
        "PROJECT": "Superfluid",
        "NUM_UNIQUE_SENDERS": 9405,
        "NUM_OPS": 1102769
    },
    {
        "PROJECT": "ALFA",
        "NUM_UNIQUE_SENDERS": 9373,
        "NUM_OPS": 669326
    },
    {
        "PROJECT": "DEGENx",
        "NUM_UNIQUE_SENDERS": 9181,
        "NUM_OPS": 49843
    },
    {
        "PROJECT": "Safe4337Module",
        "NUM_UNIQUE_SENDERS": 2964,
        "NUM_OPS": 125258
    },
    {
        "PROJECT": "USDC",
        "NUM_UNIQUE_SENDERS": 2373,
        "NUM_OPS": 25844
    },
    {
        "PROJECT": "OpenSocial",
        "NUM_UNIQUE_SENDERS": 2129,
        "NUM_OPS": 81782
    },
    {
        "PROJECT": "Blocklords",
        "NUM_UNIQUE_SENDERS": 1414,
        "NUM_OPS": 683973
    },
    {
        "PROJECT": "USDT",
        "NUM_UNIQUE_SENDERS": 1305,
        "NUM_OPS": 14995
    }
]

const heavy_users_app_chart = [
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "0x13b07f1a9b280d9ff8b1b91321c09b6da3eddf75",
        "NUM_ACCOUNTS": 74
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 7252
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 1454
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 937
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "0xb28a9e2be96df9907fc6ba4536caefaeadc6f144",
        "NUM_ACCOUNTS": 1030
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "JustBet",
        "NUM_ACCOUNTS": 57
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "AccountFactory Thirdweb",
        "NUM_ACCOUNTS": 20
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 174
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 768
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 2873
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 9310
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 3963
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 569
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "0xb28a9e2be96df9907fc6ba4536caefaeadc6f144",
        "NUM_ACCOUNTS": 1000
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 294
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 863
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 2025
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "AccountFactory Thirdweb",
        "NUM_ACCOUNTS": 9
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 1985
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 1370
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 478
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "JustBet",
        "NUM_ACCOUNTS": 86
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "0x4ea1e410e2d3c1322565f503f10ff147f8491304",
        "NUM_ACCOUNTS": 3
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "LyncReinvent Lottery",
        "NUM_ACCOUNTS": 615
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 1008
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "JustBet",
        "NUM_ACCOUNTS": 109
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 309
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 596
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 379
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 14464
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "0xf85ea6791d1f265e12bf8f5be276c28336234edb",
        "NUM_ACCOUNTS": 28
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 399
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 34119
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 412
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "JustBet",
        "NUM_ACCOUNTS": 71
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 7700
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "0x4ea1e410e2d3c1322565f503f10ff147f8491304",
        "NUM_ACCOUNTS": 3
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "0xb890844b1efd59d04d69cfb50a7ea984df94b143",
        "NUM_ACCOUNTS": 33
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 88
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 402
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 323
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "0xae3c48645436fa35d951e5314689cecdc10ef9f3",
        "NUM_ACCOUNTS": 36
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "JustBet",
        "NUM_ACCOUNTS": 64
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 285
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 104
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 345
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
        "NUM_ACCOUNTS": 108
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 5249
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "0xb890844b1efd59d04d69cfb50a7ea984df94b143",
        "NUM_ACCOUNTS": 35
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 69
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 60552
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "0x4ea1e410e2d3c1322565f503f10ff147f8491304",
        "NUM_ACCOUNTS": 3
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 343
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 82
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "0x4ea1e410e2d3c1322565f503f10ff147f8491304",
        "NUM_ACCOUNTS": 3
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "JustBet",
        "NUM_ACCOUNTS": 60
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 320
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "0x963eba05ba67faf7549d2c43a9f9ba38efeea9c1",
        "NUM_ACCOUNTS": 338
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 9661
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 7
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 44933
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 1160
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "0xb890844b1efd59d04d69cfb50a7ea984df94b143",
        "NUM_ACCOUNTS": 33
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 420
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 955
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 8840
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 295
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "ALFA",
        "NUM_ACCOUNTS": 978
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Uncuts",
        "NUM_ACCOUNTS": 546
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 40799
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Superfluid",
        "NUM_ACCOUNTS": 1030
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Degen",
        "NUM_ACCOUNTS": 1717
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 278
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "0x828651c8fd8ee9e07e1c72fc2a142892f6d728bb",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Superfluid",
        "NUM_ACCOUNTS": 9150
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 295
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "DEGENx",
        "NUM_ACCOUNTS": 8743
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 8046
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 7695
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 448
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 11
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "ALFA",
        "NUM_ACCOUNTS": 9085
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Degen",
        "NUM_ACCOUNTS": 9516
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0xb0ccffd05f5a87c4c3ceffaa217900422a249915",
        "NUM_ACCOUNTS": 931
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0x828651c8fd8ee9e07e1c72fc2a142892f6d728bb",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 532
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 29176
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 828
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Superfluid",
        "NUM_ACCOUNTS": 3998
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Blocklords",
        "NUM_ACCOUNTS": 1414
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Nekocoin",
        "NUM_ACCOUNTS": 67
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 934
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Jasper Vault",
        "NUM_ACCOUNTS": 72
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 15
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "ALFA",
        "NUM_ACCOUNTS": 4787
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "OpenSocial",
        "NUM_ACCOUNTS": 2129
    }
]

const medium_users_app_table = [
    {
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_UNIQUE_SENDERS": 327699,
        "NUM_OPS": 1193252
    },
    {
        "PROJECT": "xFANTV",
        "NUM_UNIQUE_SENDERS": 58220,
        "NUM_OPS": 131110
    },
    {
        "PROJECT": "0x4e2f19b4496eeb9c04fd16327fe9fe0610721f9d",
        "NUM_UNIQUE_SENDERS": 25350,
        "NUM_OPS": 88519
    },
    {
        "PROJECT": "Hedgey Finance",
        "NUM_UNIQUE_SENDERS": 24555,
        "NUM_OPS": 49154
    },
    {
        "PROJECT": "Safe4337Module",
        "NUM_UNIQUE_SENDERS": 12467,
        "NUM_OPS": 63542
    },
    {
        "PROJECT": "OpenSocial",
        "NUM_UNIQUE_SENDERS": 8884,
        "NUM_OPS": 26230
    },
    {
        "PROJECT": "USDT",
        "NUM_UNIQUE_SENDERS": 7552,
        "NUM_OPS": 18628
    },
    {
        "PROJECT": "USDC",
        "NUM_UNIQUE_SENDERS": 7388,
        "NUM_OPS": 18823
    },
    {
        "PROJECT": "direct_transfer",
        "NUM_UNIQUE_SENDERS": 6535,
        "NUM_OPS": 11586
    },
    {
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_UNIQUE_SENDERS": 6367,
        "NUM_OPS": 22579
    }
]

const medium_users_app_chart = [
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 19984
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 8232
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 481
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "0x1758f42af7026fbbb559dc60ece0de3ef81f665e",
        "NUM_ACCOUNTS": 104
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 2788
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "CyberID",
        "NUM_ACCOUNTS": 1695
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 556
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 3778
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "0xb28a9e2be96df9907fc6ba4536caefaeadc6f144",
        "NUM_ACCOUNTS": 1018
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 570
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 7546
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 10167
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 888
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 14233
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 556
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 5270
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 64751
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 568
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 586
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "ZerooneGallery",
        "NUM_ACCOUNTS": 368
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 2037
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "0x4ea1e410e2d3c1322565f503f10ff147f8491304",
        "NUM_ACCOUNTS": 1000
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 1875
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 1585
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 2865
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 12824
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "BasePaint",
        "NUM_ACCOUNTS": 1266
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 25585
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 1222
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 2146
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "0x39e3e49c99834c9573c9fc7ff5a4b226cd7b0e63",
        "NUM_ACCOUNTS": 2086
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 3497
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 3218
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 15030
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 1130
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 1566
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 470
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 2183
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 408
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 1283
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "0x1adc8caaa35551730ecd82e0eea683aa90db6cf0",
        "NUM_ACCOUNTS": 424
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Stader",
        "NUM_ACCOUNTS": 823
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 42900
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 2877
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 856
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 1068
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 3990
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 1243
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 2504
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "0x1adc8caaa35551730ecd82e0eea683aa90db6cf0",
        "NUM_ACCOUNTS": 307
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 262065
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Hedgey Finance",
        "NUM_ACCOUNTS": 24555
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "0xa5b6fc42140e91f19b5e9eda26cbb1284ce827dc",
        "NUM_ACCOUNTS": 426
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 11899
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 989
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 1362
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 1567
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "0x963eba05ba67faf7549d2c43a9f9ba38efeea9c1",
        "NUM_ACCOUNTS": 1743
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 1144
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 2444
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 14544
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "0xb28a9e2be96df9907fc6ba4536caefaeadc6f144",
        "NUM_ACCOUNTS": 1000
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "USBG",
        "NUM_ACCOUNTS": 1751
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 4651
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 27656
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "LUA",
        "NUM_ACCOUNTS": 891
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 18966
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 3551
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "0x4379c13143eb91148ff9282cfb2f93536687a45b",
        "NUM_ACCOUNTS": 1251
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 1645
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 1673
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Degen",
        "NUM_ACCOUNTS": 1304
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "LUA",
        "NUM_ACCOUNTS": 1192
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 58175
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 3829
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Reach",
        "NUM_ACCOUNTS": 1279
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 1158
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0x4e2f19b4496eeb9c04fd16327fe9fe0610721f9d",
        "NUM_ACCOUNTS": 22369
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 37188
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Degen",
        "NUM_ACCOUNTS": 3505
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0xb0ccffd05f5a87c4c3ceffaa217900422a249915",
        "NUM_ACCOUNTS": 1634
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 18254
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 628
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 964
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0xe18957e2b5028e09c4851bc24a7f426a2fe0f127",
        "NUM_ACCOUNTS": 1368
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 1211
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 3045
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Superfluid",
        "NUM_ACCOUNTS": 1101
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 3027
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 3749
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 47138
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "OpenSocial",
        "NUM_ACCOUNTS": 8884
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "ALFA",
        "NUM_ACCOUNTS": 2159
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 3806
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "0xb382daf7230b73f71a766c96707cf9ec6316b360",
        "NUM_ACCOUNTS": 4241
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 3217
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "0x4e2f19b4496eeb9c04fd16327fe9fe0610721f9d",
        "NUM_ACCOUNTS": 3140
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_ACCOUNTS": 1519
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 2555
    }
]

const light_users_app_table = [
    {
        "PROJECT": "Piggybox",
        "NUM_UNIQUE_SENDERS": 3215288,
        "NUM_OPS": 3215543
    },
    {
        "PROJECT": "Cyberconnect",
        "NUM_UNIQUE_SENDERS": 1478848,
        "NUM_OPS": 1480664
    },
    {
        "PROJECT": "Burn Address",
        "NUM_UNIQUE_SENDERS": 621151,
        "NUM_OPS": 621179
    },
    {
        "PROJECT": "xFANTV",
        "NUM_UNIQUE_SENDERS": 89688,
        "NUM_OPS": 91436
    },
    {
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_UNIQUE_SENDERS": 71747,
        "NUM_OPS": 80240
    },
    {
        "PROJECT": "G1",
        "NUM_UNIQUE_SENDERS": 32346,
        "NUM_OPS": 32719
    },
    {
        "PROJECT": "Safe4337Module",
        "NUM_UNIQUE_SENDERS": 27341,
        "NUM_OPS": 28975
    },
    {
        "PROJECT": "0x4e2f19b4496eeb9c04fd16327fe9fe0610721f9d",
        "NUM_UNIQUE_SENDERS": 24206,
        "NUM_OPS": 24855
    },
    {
        "PROJECT": "Jasper Vault",
        "NUM_UNIQUE_SENDERS": 13573,
        "NUM_OPS": 13634
    },
    {
        "PROJECT": "PassportRegistry",
        "NUM_UNIQUE_SENDERS": 10972,
        "NUM_OPS": 10972
    }
]

const light_users_app_chart = [
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 60763
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 41976
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 894
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "CyberID",
        "NUM_ACCOUNTS": 10176
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 5126
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 3589
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 759
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "Fan TV",
        "NUM_ACCOUNTS": 2767
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "0x34be7f35132e97915633bc1fc020364ea5134863",
        "NUM_ACCOUNTS": 863
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 932
    },
    {
        "DATE": "2023-10-01 00:00:00",
        "PROJECT": "0xb28a9e2be96df9907fc6ba4536caefaeadc6f144",
        "NUM_ACCOUNTS": 909
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 2449
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 101708
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "0xd9ab5096a832b9ce79914329daee236f8eea0390",
        "NUM_ACCOUNTS": 852
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 115875
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "CyberID",
        "NUM_ACCOUNTS": 11476
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 6833
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "empty_call",
        "NUM_ACCOUNTS": 2319
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Fan TV",
        "NUM_ACCOUNTS": 2206
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 1187
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Realm ID",
        "NUM_ACCOUNTS": 2673
    },
    {
        "DATE": "2023-11-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 99067
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Realm ID",
        "NUM_ACCOUNTS": 1458
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 1607
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 67465
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Telefrens",
        "NUM_ACCOUNTS": 831
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 7790
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "CapX ID",
        "NUM_ACCOUNTS": 36635
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 798
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 116789
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "CapX",
        "NUM_ACCOUNTS": 2053
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "empty_call",
        "NUM_ACCOUNTS": 888
    },
    {
        "DATE": "2023-12-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 158768
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Telefrens",
        "NUM_ACCOUNTS": 1932
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 141440
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 854
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 6202
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 497
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 182177
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Realm ID",
        "NUM_ACCOUNTS": 4005
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 528
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "CapX ID",
        "NUM_ACCOUNTS": 24862
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 54048
    },
    {
        "DATE": "2024-01-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 41084
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 3825
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 481727
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 536
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Realm ID",
        "NUM_ACCOUNTS": 5974
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 614
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 5880
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 66418
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 1236
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 520
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Telefrens",
        "NUM_ACCOUNTS": 1074
    },
    {
        "DATE": "2024-02-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 3810
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "direct_transfer",
        "NUM_ACCOUNTS": 958
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "PassportRegistry",
        "NUM_ACCOUNTS": 973
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "USDC",
        "NUM_ACCOUNTS": 905
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 9050
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 356803
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 109951
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 13560
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Realm ID",
        "NUM_ACCOUNTS": 2321
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 13467
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 10935
    },
    {
        "DATE": "2024-03-01 00:00:00",
        "PROJECT": "CYBER",
        "NUM_ACCOUNTS": 1667
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 1339
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "PassportRegistry",
        "NUM_ACCOUNTS": 9999
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 20043
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 263539
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "0xd658843c3befcfe9d3fad05b4f17e3be13f935b5",
        "NUM_ACCOUNTS": 1744
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Jasper Vault",
        "NUM_ACCOUNTS": 984
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 5534
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 10374
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "xFANTV",
        "NUM_ACCOUNTS": 77969
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 192680
    },
    {
        "DATE": "2024-04-01 00:00:00",
        "PROJECT": "USDT",
        "NUM_ACCOUNTS": 901
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0x4e2f19b4496eeb9c04fd16327fe9fe0610721f9d",
        "NUM_ACCOUNTS": 18344
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Jasper Vault",
        "NUM_ACCOUNTS": 4329
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Safe4337Module",
        "NUM_ACCOUNTS": 3359
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 189091
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_ACCOUNTS": 1545
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 10723
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0x2709f91328b3f3e50cbe750099932887f986d564",
        "NUM_ACCOUNTS": 1768
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 7539
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "0xe18957e2b5028e09c4851bc24a7f426a2fe0f127",
        "NUM_ACCOUNTS": 7484
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 1221479
    },
    {
        "DATE": "2024-05-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 65105
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Jasper Vault",
        "NUM_ACCOUNTS": 7897
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "0xd0cf4de352ac8dcce00bd6b93ee73d3cb272edc3",
        "NUM_ACCOUNTS": 7612
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "0x4e2f19b4496eeb9c04fd16327fe9fe0610721f9d",
        "NUM_ACCOUNTS": 6511
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Other",
        "NUM_ACCOUNTS": 24265
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Piggybox",
        "NUM_ACCOUNTS": 1687623
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Burn Address",
        "NUM_ACCOUNTS": 410033
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Nekocoin",
        "NUM_ACCOUNTS": 4036
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "G1",
        "NUM_ACCOUNTS": 23950
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "0xd02d1a45feca94c0d8dd9ddde13c13491d534cde",
        "NUM_ACCOUNTS": 5593
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "Cyberconnect",
        "NUM_ACCOUNTS": 313326
    },
    {
        "DATE": "2024-06-01 00:00:00",
        "PROJECT": "OpenSocial",
        "NUM_ACCOUNTS": 8562
    }
]

const tvl_chain = [
    {
        "NAME": "OPTIMISM",
        "TVL": 129094
    },
    {
        "NAME": "ETHEREUM",
        "TVL": 6140215
    },
    {
        "NAME": "BASE",
        "TVL": 273296
    },
    {
        "NAME": "POLYGON",
        "TVL": 1592939
    },
    {
        "NAME": "ARBITRUM",
        "TVL": 1072775
    }
]

const tvl_token = [
    {
        "NAME": "rsETH",
        "TVL": 3247684.0602612076
    },
    {
        "NAME": "WAVX",
        "TVL": 1358276.1630175235
    },
    {
        "NAME": "ETH",
        "TVL": 1162894.8328497703
    },
    {
        "NAME": "OTHER",
        "TVL": 960746.6063934232
    },
    {
        "NAME": "USDT",
        "TVL": 848297.2511440943
    },
    {
        "NAME": "WBTC",
        "TVL": 706197.3964477566
    },
    {
        "NAME": "WETH",
        "TVL": 340050.27168179234
    },
    {
        "NAME": "USDC",
        "TVL": 203615.67528028824
    },
    {
        "NAME": "stETH",
        "TVL": 153343.22364243685
    },
    {
        "NAME": "pufETH",
        "TVL": 138361.0882872058
    },
    {
        "NAME": "SOL",
        "TVL": 97996.33991390278
    }
]

const tvl_category = [
    {
        "NAME": "Less than $10",
        "NUM_ACCOUNTS": 41510
    },
    {
        "NAME": "$100 to $1000",
        "NUM_ACCOUNTS": 2859
    },
    {
        "NAME": "More than $1000",
        "NUM_ACCOUNTS": 1168
    },
    {
        "NAME": "$10 to $100",
        "NUM_ACCOUNTS": 9817
    }
]

const gas_chain = [
    {
        "NAME": "ARBITRUM",
        "GAS_SPEND": 450228.44929734507
    },
    {
        "NAME": "AVALANCHE",
        "GAS_SPEND": 141072.2138564056
    },
    {
        "NAME": "BASE",
        "GAS_SPEND": 745113.9157931113
    },
    {
        "NAME": "ETHEREUM",
        "GAS_SPEND": 1070706.7424770447
    },
    {
        "NAME": "OPTIMISM",
        "GAS_SPEND": 377195.78786552005
    },
    {
        "NAME": "POLYGON",
        "GAS_SPEND": 412889.56930085446
    }
]