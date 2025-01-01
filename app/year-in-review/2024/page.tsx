import { Metadata } from "next";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import {
    Users,
    Layers,
    Coins,
    Wallet,
} from "lucide-react"
import { LChart } from "@/components/line-entity";
import { BChart } from "@/components/multiop-bar-chart";
import { Apps, appcolumns, bundlercolumns, paymastermincolumns, deployercolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import MSBarChart from "@/components/marketshare-contracts"
import { MSChart } from "@/components/marketshare-bar-overview";
import { LCChart } from "@/components/line-use-category";
// import PieChartComponent from "@/components/pie";
import { MSDChart } from "@/components/retro/marketshare-bar-deployer";
import { SBBChart } from "@/components/retro/stacked-bar-bundler";
import { SBDChart } from "@/components/retro/stacked-bar-deployer";
// import { MSWChart } from "@/components/retro/marketshare-bar-wallet";
import { SBCCChart } from "@/components/retro/stacked-bar-chain2";

export const metadata: Metadata = {
    title: "BundleBear Year In Review 2024",
    description: "Annual review of the patterns and trends that shaped the ERC-4337 ecosystem",
};

export default async function YIRPage() {

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6 md:w-3/5 md:mx-auto ">
                    <div className="flex flex-col items-center text-center space-y-2 pb-6">
                        <h2 className="text-5xl font-bold tracking-tight">2024 Year in Review</h2>
                        <p>ERC-4337 smart accounts empower developers to deliver great onchain user experiences.
                            Using smart accounts, you can build apps where users don&apos;t need to worry about the complexities of gas fees and seed phrase management.
                            In 2024, ERC-4337 adoption grew more than tenfold and impacted a range of categories, from gaming to decentralised social apps. </p>
                        <p>The BundleBear 2024 Year in Review aims to provide a data-driven perspective on the major patterns and trends in the ERC-4337 ecosystem. </p>
                        <i>All insights are based on ERC-4337 activity on Base, Polygon, Optimism, Arbitrum, Linea, Arbitrum Nova, Celo, Avalanche, BSC and Ethereum.</i>
                    </div>

                    <div className="flex flex-col pb-6">
                        <h2 className="text-xl font-bold tracking-tight">Contents</h2>
                        <ol>
                            <li><a href="#section1" className="text-blue-500 underline">User Activity</a></li>
                            <li><a href="#section2" className="text-blue-500 underline">Bundler Performance</a></li>
                            <li><a href="#section3" className="text-blue-500 underline">Paymaster Usage</a></li>
                            <li><a href="#section4" className="text-blue-500 underline">Factory Insights</a></li>
                        </ol>
                    </div>

                    <div id="section1" className="flex flex-row gap-2 items-center">
                        <Users />
                        <h2 className="text-3xl font-bold tracking-tight">User Activity</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section11" className="text-xl font-bold tracking-tight pt-6">103M+ User Operations were made in 2024</h2>
                        <p>When you use an ERC-4337 account, you submit User Operations (UserOps) instead of transactions.
                            These UserOps get grouped into bundle transactions that are executed onchain by Bundlers.</p>
                        <p>In 2024, 103M UserOps were executed. That&apos;s more than 10X the number of UserOps made in 2023 (8.3M).</p>
                        <p>The number of monthly UserOps peaked at 18.4M in August, then steadily declined to 9.8M in December.</p>
                        <Card className="border-4 border-black ">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly UserOps</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LChart data={monthly_ops} xaxis={"DATE"} yaxis={"USEROPS"} usd={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section12" className="text-xl font-bold tracking-tight pt-6">21.8M accounts made a UserOp in 2023. But only 4.3M accounts made more than one UserOp.</h2>
                        <p>The majority of accounts that were active in 2024 only transacted once.
                            People farming sign-up rewards and similar token incentive schemes drove this “single-use” behaviour.
                            Only a few apps inspired “multi-use” behaviour, convincing users to transact more than once.</p>
                        <p>Monthly active multi-use accounts hit a high of 1M in October.
                            Monthly active single-use accounts peaked earlier in the year in July.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Active Accounts</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LCChart data={monthly_active_accounts_cat} xaxis={"DATE"} yaxis={"ACTIVE_ACCOUNTS"} segment={"SENDER_TYPE"} pct={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section13" className="text-xl font-bold tracking-tight pt-6">Top 10 most used protocols</h2>
                        <p>Here are the protocols that ERC-4337 accounts used the most this year:</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="text-xl"> </CardTitle>
                            </CardHeader>
                            <CardContent >
                                <DataTable columns={appcolumns} data={top_five_apps} entity={false} />
                            </CardContent>
                        </Card>
                        <p>Here is what the leaderboard looks like if we exclude the activity of single-use accounts:</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="text-xl"> </CardTitle>
                            </CardHeader>
                            <CardContent >
                                <DataTable columns={appcolumns} data={top_five_apps_multi} entity={false} />
                            </CardContent>
                        </Card>
                        <p>Protocols like <a href="https://app.earnm.com/en/piggybox" className="text-blue-500 underline">Piggybox</a> and <a href="https://x.com/BuildOnCyber" className="text-blue-500 underline">Cyberconnect</a> attracted a lot of single-use account activity in 2024.
                            They sit at the top of the overall leaderboard. But fall when we filter out single-use accounts they fall out the top 5.
                            Piggybox is an NFT you get when you sign up for EARN&apos;M, along with a lottery box that might contain EARNM token.
                            Cyberconnect is a social app that had a heavily farmed airdrop.
                            It&apos;s easy to see why protocols like these, which reward users even if they only transact once, struggle to retain them.</p>
                        <h2 id="section14" className="text-xl font-bold tracking-tight pt-6">Trends in Multi-use Accounts Activity</h2>
                        <p><a href="https://anichess.com/" className="text-blue-500 underline">Anichess</a>, a chess game where you can earn NFTs, was the most popular app amongst multi-use accounts in Q1.</p>
                        <p>In Q2, <a href="https://x.com/alfafrens_" className="text-blue-500 underline">Alfafrens</a>, a social app where users can stake ALFA to earn DEGEN, briefly took the top spot before being overtaken by <a href="https://blocklords.com/" className="text-blue-500 underline">Blocklords</a>, a strategy game with onchain elements.</p>
                        <p>Blocklords usage blew up in Q3 and drove a 5X+ increase in monthly active multi-use accounts.
                            Then, a social app called OpenSocial took most of the market share.
                            By the end of the year, a mobile game called <a href="https://www.superchamps.com/" className="text-blue-500 underline">SuperChamps</a> had flipped OpenSocial for first place.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Project Share of UserOps (Multi-use Accounts)</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <MSBarChart data={monthly_app_share} />
                                <CardFooter><i>* Excluding calls related to factory setup</i></CardFooter>
                            </CardContent>
                        </Card>
                        <h2 id="section15" className="text-xl font-bold tracking-tight pt-6">55% of Multi-use accounts transacted on Base</h2>
                        <p>Base was the second largest chain by smart account usage overall, with 3.7M accounts transacting in 2024. Polygon was first with 16.6M.</p>
                        <p>But Base had the most multi-use accounts. 2.4M accounts made more than one UserOp on Base in 2024.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Chain Share of Monthly Active Multi-use Accounts</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <MSChart data={month_chain_multi_accounts} xaxis={"DATE"} yaxis={"ACTIVE_ACCOUNTS"} segment={"CHAIN"} />
                            </CardContent>
                        </Card>
                    </div>

                    <div id="section2" className="flex flex-row gap-2 items-center pt-7">
                        <Layers />
                        <h2 className="text-3xl font-bold tracking-tight">Bundler Performance</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section21" className="text-xl font-bold tracking-tight pt-6">59M bundle transactions were made in 2024</h2>
                        <p>The role of a Bundler is to package UserOps into bundle transactions.
                            The number of monthly bundle transactions consistently increased month-over-month throughout the year.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Bundle Transactions</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBCCChart data={month_chain_bundles} xaxis={"DATE"} yaxis={"NUM_BUNDLES"} segment={"CHAIN"} usd={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section22" className="text-xl font-bold tracking-tight pt-6">Top 5 Bundlers</h2>
                        <p>Here are the Bundlers who had the most activity in 2023</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="text-xl"> </CardTitle>
                            </CardHeader>
                            <CardContent >
                                <DataTable columns={bundlercolumns} data={top_bundlers} entity={false} />
                            </CardContent>
                        </Card>
                        <i>Note: Onchain revenue is the difference between UserOp fees paid to the Bundler and the gas fees the Bundler pays to make transactions.
                            This is not the main revenue source for most Bundlers; they charge developers offchain subscription fees or theyre subsidized by larger orgs.</i>
                        <h2 id="section23" className="text-xl font-bold tracking-tight pt-6">24% of the bundles made in 2024 contained more than one UserOp</h2>
                        <p>When bundles contain multiple UserOps, smart account users save money because the cost of the bundle transaction is shared between all the UserOps.
                            Bundlers also benefit because they spend less by making fewer transactions while charging the same gas premium on every UserOp.
                            But there isn&apos;t always enough UserOp volume to fill bundles with multiple UserOps.</p>
                        <p>In 2024, the monthly percentage of bundle transactions with multiple UserOps grew from 2.5% in January to a peak of 49% in August, then fell to 23% at the end of the year.
                            This is an improvement from 2023 when most months didn&apos;t exceed 10%.
                        </p>

                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly % of Multi-UserOp Bundles</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <BChart data={multi_op_txns} xaxis={"DATE"} yaxis={"PCT_MULTI_USEROP"} />
                            </CardContent>
                        </Card>
                        <h2 id="section24" className="text-xl font-bold tracking-tight pt-6">Bundler Market Share</h2>
                        <p>From January to May, Biconomy was the top Bundler by UserOps executed.
                            This is because they were the exclusive Bundler for apps like Anichess and Alfafrens, which peaked in usage around that time. </p>
                        <p>Alchemy briefly took the #1 spot in June, thanks to UserOp flow from Piggybox.
                            Then Coinbase’s market share surged in July because Blocklords used their bundler.
                            Alchemy retook the top spot in September and October because of Opensocial. </p>
                        <p>Pimlico jumped to first place for the last two months of the year because they bundled for apps on <a href="https://thirdweb.com/" className="text-blue-500 underline">Thirdweb’s</a> developer SDK.</p>

                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Bundler Share of UserOps</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBBChart data={month_bundler_ops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"BUNDLER_NAME"} />
                            </CardContent>
                        </Card>
                    </div>

                    <div id="section3" className="flex flex-row gap-2 items-center pt-7">
                        <Coins />
                        <h2 className="text-3xl font-bold tracking-tight">Paymaster Usage</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section31" className="text-xl font-bold tracking-tight pt-6">Apps and Users have spent more than $3.4M on UserOp fees through Paymasters</h2>
                        <p>Paymaster contracts allow applications to set up custom gas fee policies for their users.</p>
                        <p>Apps can let users pay for gas using ERC-20 tokens or they can cover the gas fees on behalf of their users.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Paymaster Volume</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBCCChart data={month_chain_paymaster_volume} xaxis={"DATE"} yaxis={"GAS_SPENT"} segment={"CHAIN"} usd={true} />
                            </CardContent>
                        </Card>
                        <h2 id="section32" className="text-xl font-bold tracking-tight pt-6">Top 5 Paymasters</h2>
                        <p>Here are the Paymasters who had the most spending this year:</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                            </CardHeader>
                            <CardContent >
                                <DataTable columns={paymastermincolumns} data={top_paymasters} entity={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section33" className="text-xl font-bold tracking-tight pt-6">87% of all UserOps were paid for using a Paymaster</h2>
                        <p>Most of the UserOps made in 2024 were paid for using a paymaster.
                            This means that either the app/wallet/L2 subsidized the fees or user paid their fees using an ERC20 token.</p>
                    </div>

                    <div id="section4" className="flex flex-row gap-2 items-center pt-7">
                        <Wallet />
                        <h2 className="text-3xl font-bold tracking-tight">Factory Insights</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section41" className="text-xl font-bold tracking-tight pt-6">58% of accounts were deployed using Alchemy&apos;s factory contracts</h2>
                        <p>Most ERC-4337 accounts are created using a factory contract.
                            A factory is a smart contract that generates other smart contracts.
                            In 2024, 58% of all new accounts were deployed using the Alchemy LightAccount factory.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Accounts Deployed</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <SBDChart data={monthly_factory_share} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"DEPLOYER_NAME"} usd={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section42" className="text-xl font-bold tracking-tight pt-6">38% of the accounts that got multiple uses were deployed with the SimpleAccount Factory</h2>
                        <p>SimpleAccount is a factory that was developed by the Ethereum Foundation. Blocklords used this factory to deploy their accounts and that pushed it to the top spot on the multi-use account leaderboard.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <b>Top 5 Factories by Multi-use Accounts Deployed</b>
                            </CardHeader>
                            <CardContent >
                                <DataTable columns={deployercolumns} data={top_deployers} entity={false} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

const top_deployers = [
    {
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 1580855
    },
    {
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 858030
    },
    {
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 566222
    },
    {
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 174005
    },
    {
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 69390
    }
]

const month_chain_paymaster_volume = [
    {
        "DATE": "2024-01-01",
        "CHAIN": "linea",
        "GAS_SPENT": 56132.79788732215
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "celo",
        "GAS_SPENT": 0.11045943501090001
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 4077.4389945034395
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 22015.933561870323
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 14804.544789735533
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 42455.55760517765
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 0.21385921691604
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 192179.15293690306
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "base",
        "GAS_SPENT": 1869.8267054763119
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 854.4527773315602
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 141093.5961863827
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 66681.06832915725
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "linea",
        "GAS_SPENT": 351.67311903994744
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 13382.688746219363
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "celo",
        "GAS_SPENT": 0.91480335761452
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 1005.2535881527524
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "base",
        "GAS_SPENT": 21640.304748762668
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 32443.782508869095
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 12894.685542926773
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 18355.349799402924
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 110607.21533150402
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 16882.069407469568
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 69518.38420763756
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 5.822084678544163
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 41680.36078664088
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "linea",
        "GAS_SPENT": 326.10040259258716
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "celo",
        "GAS_SPENT": 0.15709587684461998
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 5577.493052379014
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "base",
        "GAS_SPENT": 91327.08574812785
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 31626.260717971596
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "linea",
        "GAS_SPENT": 1645.9118394083944
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 9169.265614524124
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 88540.18513555826
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "celo",
        "GAS_SPENT": 0.01708272019108
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 11114.176127795334
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "base",
        "GAS_SPENT": 81592.60447809898
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 6591.767554676666
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 940.9144378121848
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 78.11328863757255
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "base",
        "GAS_SPENT": 617762.2342966687
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "celo",
        "GAS_SPENT": 0.03504362821674
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 20462.64442586201
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 1417.3787576313168
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 9921.349952095296
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 19970.495960761447
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 21366.95109360812
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 6842.293318548118
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 36.81758802476074
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "linea",
        "GAS_SPENT": 2949.6262927674256
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 25134.956225531056
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "linea",
        "GAS_SPENT": 713.3108462625668
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "base",
        "GAS_SPENT": 19035.742264927365
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "celo",
        "GAS_SPENT": 0.037048934865384006
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 14455.21379003628
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 5909.864796936068
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 10338.324468571545
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 31293.002645034147
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 2099.092105682698
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 7434.762417956566
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 30112.164604237027
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 5348.645123970689
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "base",
        "GAS_SPENT": 104168.719324617
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "celo",
        "GAS_SPENT": 135.07136090778462
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 12516.868557183672
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 16546.907394939877
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 16274.99515438913
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "linea",
        "GAS_SPENT": 2767.9880252656476
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 2999.3969448019657
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 2205.383627274851
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 705.8982125922468
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "base",
        "GAS_SPENT": 62923.815811894274
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 30566.062283515887
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 1988.276930844211
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "celo",
        "GAS_SPENT": 436.8794746636719
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 22619.260775786053
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 10189.015069894987
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "linea",
        "GAS_SPENT": 9.907668414215335
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 874.1325301011409
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 5824.083752820281
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 25714.818362597223
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 2286.623322402291
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 22881.578072150234
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "base",
        "GAS_SPENT": 35741.24513012913
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 10429.194350459187
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 1105.3219343710593
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "linea",
        "GAS_SPENT": 62494.10028443075
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 401.93067474077236
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 23734.912899329607
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "celo",
        "GAS_SPENT": 430.5791377218866
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 15810.549446764915
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "celo",
        "GAS_SPENT": 548.0157103663151
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 26723.6650351459
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "base",
        "GAS_SPENT": 62094.81613550165
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 1364.5568106399944
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "linea",
        "GAS_SPENT": 654.4633525828835
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 1019.4551966290517
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 39203.53581115629
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 2327.732336744053
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 37496.266531245084
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 21591.745553515288
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 15449.002295226024
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "celo",
        "GAS_SPENT": 670.3996546782691
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 39197.381899688575
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 3907.475802666632
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "base",
        "GAS_SPENT": 95089.46457893928
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 2438.127008524176
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "linea",
        "GAS_SPENT": 3083.000554782224
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 2516.1085216742463
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 55114.212286838054
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "bsc",
        "GAS_SPENT": 19320.040678993115
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "arbitrum",
        "GAS_SPENT": 141904.47747941595
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "optimism",
        "GAS_SPENT": 19965.344880385273
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "ethereum",
        "GAS_SPENT": 76238.86682420841
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "polygon",
        "GAS_SPENT": 19689.955958987975
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "linea",
        "GAS_SPENT": 2445.8686321032515
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "celo",
        "GAS_SPENT": 607.1556042476101
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "avalanche",
        "GAS_SPENT": 1961.263462997475
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "base",
        "GAS_SPENT": 198805.1445783902
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "arbitrum_nova",
        "GAS_SPENT": 1502.2335332653888
    }
]

const month_bundler_ops = [
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 63516
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 25681
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 1232664
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 51
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 105
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 1631559
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 213280
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 16159
    },
    {
        "DATE": "2024-01-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 2
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 41582
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 369042
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 2230298
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 19
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 18
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 30
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 71767
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 202466
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 13130
    },
    {
        "DATE": "2024-02-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 2
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 71437
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 460953
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 1468048
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 124
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 1349
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 1263
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 30630
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 157700
    },
    {
        "DATE": "2024-03-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 21426
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 118869
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 438813
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 2366034
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 215
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 23978
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 2815
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 25732
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 346575
    },
    {
        "DATE": "2024-04-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 24592
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 733199
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 981477
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 2031450
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 262
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 45937
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 499
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 6472
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 344097
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 33232
    },
    {
        "DATE": "2024-05-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 9
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 1753119
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 1054665
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 336262
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 38
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 713547
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 524
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 25095
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 484167
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 38472
    },
    {
        "DATE": "2024-06-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 2
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 1731162
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 1410468
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 1249746
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 153
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 9295513
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "cometh",
        "NUM_USEROPS": 3396
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 766
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 10476
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 993359
    },
    {
        "DATE": "2024-07-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 134089
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 1835804
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 5939273
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 103624
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 210
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 8828286
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "cometh",
        "NUM_USEROPS": 12
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 247
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 18044
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 1608002
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 17475
    },
    {
        "DATE": "2024-08-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 2
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 1315851
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 6896891
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 383771
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 405
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 4290092
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "cometh",
        "NUM_USEROPS": 3
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 575
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 18052
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 3020113
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 30272
    },
    {
        "DATE": "2024-09-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 1
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 2104738
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 4315963
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 2057587
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 965
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 2122466
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "cometh",
        "NUM_USEROPS": 84
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 298
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 6751
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 3816186
    },
    {
        "DATE": "2024-10-01",
        "BUNDLER_NAME": "stackup",
        "NUM_USEROPS": 6762
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 1402175
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 1876463
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 868573
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 409
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 2334006
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "cometh",
        "NUM_USEROPS": 148
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 570
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 12553
    },
    {
        "DATE": "2024-11-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 3170673
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "Unknown",
        "NUM_USEROPS": 1942184
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 1077201
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 121932
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "candide",
        "NUM_USEROPS": 422
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 2602452
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "cometh",
        "NUM_USEROPS": 116
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "etherspot",
        "NUM_USEROPS": 46
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 108014
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 3966128
    },
    {
        "DATE": "2024-12-01",
        "BUNDLER_NAME": "unipass",
        "NUM_USEROPS": 2
    }
]

const month_chain_bundles = [
    {
        "DATE": "2024-01-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 60580
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 21
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 44986
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 9445
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 7147
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 62
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 10488
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 1457579
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 19627
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 1420793
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 47570
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 38178
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 21871
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 6570
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 455
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 7652
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 19194
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 16720
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 2644417
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 55243
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 279
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 36290
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 79226
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 22409
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 54
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 8209
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 17383
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 26947
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 1863163
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 95739
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 1645
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 29981
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 245150
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 25114
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 14
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 7268
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 55798
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 16029
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 2853498
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 227769
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 1857
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 30817
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 1880119
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 26668
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 6
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 5293
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 79740
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 10634
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 902717
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 225496
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 74574
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 26409
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 1023863
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 30996
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 13
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 5491
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 13790
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 24458
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 1087153
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 439914
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 133145
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 16514
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 4347513
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 65455
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 60368
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 4097
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 4136
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 123399
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 960330
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 607041
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 91255
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 12687
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 2624536
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 43680
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 288076
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 5176
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 3923
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 73750
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 1682213
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 1127648
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 81540
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 17538
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 3465205
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 44212
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 271773
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 10304
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 191874
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 49377
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 2214560
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 1307818
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 211320
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 15344
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 5037681
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 58912
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 217749
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 10192
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 20206
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 29868
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 3118386
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 909340
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 298608
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 11922
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 2915817
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 76888
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 259774
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 11458
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 25900
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 56384
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 2083671
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "arbitrum",
        "NUM_BUNDLES": 1706845
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "arbitrum_nova",
        "NUM_BUNDLES": 205078
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "avalanche",
        "NUM_BUNDLES": 15964
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "base",
        "NUM_BUNDLES": 1535376
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "bsc",
        "NUM_BUNDLES": 76313
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "celo",
        "NUM_BUNDLES": 219237
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "ethereum",
        "NUM_BUNDLES": 16640
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "linea",
        "NUM_BUNDLES": 15848
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "optimism",
        "NUM_BUNDLES": 141957
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "polygon",
        "NUM_BUNDLES": 2252981
    }
]

const monthly_ops = [
    {
        "DATE": "2024-01-01",
        "USEROPS": 3183017
    },
    {
        "DATE": "2024-02-01",
        "USEROPS": 2928354
    },
    {
        "DATE": "2024-03-01",
        "USEROPS": 2212930
    },
    {
        "DATE": "2024-04-01",
        "USEROPS": 3347623
    },
    {
        "DATE": "2024-05-01",
        "USEROPS": 4176634
    },
    {
        "DATE": "2024-06-01",
        "USEROPS": 4405891
    },
    {
        "DATE": "2024-07-01",
        "USEROPS": 14829128
    },
    {
        "DATE": "2024-08-01",
        "USEROPS": 18350979
    },
    {
        "DATE": "2024-09-01",
        "USEROPS": 15956026
    },
    {
        "DATE": "2024-10-01",
        "USEROPS": 14431800
    },
    {
        "DATE": "2024-11-01",
        "USEROPS": 9665570
    },
    {
        "DATE": "2024-12-01",
        "USEROPS": 9818497
    }
]

const monthly_active_accounts_cat = [
    {
        "DATE": "2024-01-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 266506
    },
    {
        "DATE": "2024-01-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 413695
    },
    {
        "DATE": "2024-02-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 521588
    },
    {
        "DATE": "2024-02-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 426735
    },
    {
        "DATE": "2024-03-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 126316
    },
    {
        "DATE": "2024-03-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 499008
    },
    {
        "DATE": "2024-04-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 498935
    },
    {
        "DATE": "2024-04-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 227787
    },
    {
        "DATE": "2024-05-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 1523387
    },
    {
        "DATE": "2024-05-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 124543
    },
    {
        "DATE": "2024-06-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 134619
    },
    {
        "DATE": "2024-06-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 2476022
    },
    {
        "DATE": "2024-07-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 842282
    },
    {
        "DATE": "2024-07-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 2673889
    },
    {
        "DATE": "2024-08-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 755304
    },
    {
        "DATE": "2024-08-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 2220187
    },
    {
        "DATE": "2024-09-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 2254785
    },
    {
        "DATE": "2024-09-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 703736
    },
    {
        "DATE": "2024-10-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 2076957
    },
    {
        "DATE": "2024-10-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 1080348
    },
    {
        "DATE": "2024-11-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 795474
    },
    {
        "DATE": "2024-11-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 1116409
    },
    {
        "DATE": "2024-12-01",
        "SENDER_TYPE": "multi-use",
        "ACTIVE_ACCOUNTS": 664930
    },
    {
        "DATE": "2024-12-01",
        "SENDER_TYPE": "single-use",
        "ACTIVE_ACCOUNTS": 1347172
    }
]

const top_five_apps = [
    {
        "PROJECT": "Piggybox",
        "NUM_UNIQUE_SENDERS": 12606597,
        "NUM_OPS": 12614726
    },
    {
        "PROJECT": "Cyberconnect",
        "NUM_UNIQUE_SENDERS": 1702879,
        "NUM_OPS": 1718831
    },
    {
        "PROJECT": "Blocklords",
        "NUM_UNIQUE_SENDERS": 1455201,
        "NUM_OPS": 25598209
    },
    {
        "PROJECT": "Super Champs",
        "NUM_UNIQUE_SENDERS": 665893,
        "NUM_OPS": 3384916
    },
    {
        "PROJECT": "Yellow Network",
        "NUM_UNIQUE_SENDERS": 648532,
        "NUM_OPS": 3399860
    },
    {
        "PROJECT": "Burn Address",
        "NUM_UNIQUE_SENDERS": 628866,
        "NUM_OPS": 687666
    },
    {
        "PROJECT": "OpenSocial",
        "NUM_UNIQUE_SENDERS": 568656,
        "NUM_OPS": 11375699
    },
    {
        "PROJECT": "ManagedAccountFactory Thirdweb",
        "NUM_UNIQUE_SENDERS": 555098,
        "NUM_OPS": 9702287
    },
    {
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_UNIQUE_SENDERS": 457949,
        "NUM_OPS": 6802711
    },
    {
        "PROJECT": "River",
        "NUM_UNIQUE_SENDERS": 299723,
        "NUM_OPS": 632289
    }
]

const top_five_apps_multi = [
    {
        "PROJECT": "Blocklords",
        "NUM_UNIQUE_SENDERS": 897743,
        "NUM_OPS": 25040394
    },
    {
        "PROJECT": "OpenSocial",
        "NUM_UNIQUE_SENDERS": 545995,
        "NUM_OPS": 11353038
    },
    {
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_UNIQUE_SENDERS": 389405,
        "NUM_OPS": 6734167
    },
    {
        "PROJECT": "Yellow Network",
        "NUM_UNIQUE_SENDERS": 359056,
        "NUM_OPS": 3110384
    },
    {
        "PROJECT": "Super Champs",
        "NUM_UNIQUE_SENDERS": 303554,
        "NUM_OPS": 3022577
    },
    {
        "PROJECT": "River",
        "NUM_UNIQUE_SENDERS": 269280,
        "NUM_OPS": 601846
    },
    {
        "PROJECT": "Somon Badge",
        "NUM_UNIQUE_SENDERS": 172042,
        "NUM_OPS": 658841
    },
    {
        "PROJECT": "KIP",
        "NUM_UNIQUE_SENDERS": 168804,
        "NUM_OPS": 4056836
    },
    {
        "PROJECT": "Ducklings",
        "NUM_UNIQUE_SENDERS": 146098,
        "NUM_OPS": 212259
    },
    {
        "PROJECT": "xFANTV",
        "NUM_UNIQUE_SENDERS": 146003,
        "NUM_OPS": 371268
    }
]

const monthly_app_share = [
    {
        "DATE": "2024-01-01",
        "PROJECT": "CapX",
        "NUM_OPS": 14278
    },
    {
        "DATE": "2024-01-01",
        "PROJECT": "ZerooneGallery",
        "NUM_OPS": 36758
    },
    {
        "DATE": "2024-01-01",
        "PROJECT": "G1",
        "NUM_OPS": 68228
    },
    {
        "DATE": "2024-01-01",
        "PROJECT": "Other",
        "NUM_OPS": 70741
    },
    {
        "DATE": "2024-01-01",
        "PROJECT": "xFANTV",
        "NUM_OPS": 151333
    },
    {
        "DATE": "2024-01-01",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_OPS": 899612
    },
    {
        "DATE": "2024-02-01",
        "PROJECT": "Safe4337Module",
        "NUM_OPS": 8363
    },
    {
        "DATE": "2024-02-01",
        "PROJECT": "Cyberconnect",
        "NUM_OPS": 10148
    },
    {
        "DATE": "2024-02-01",
        "PROJECT": "ZerooneGallery",
        "NUM_OPS": 29889
    },
    {
        "DATE": "2024-02-01",
        "PROJECT": "Hedgey Finance",
        "NUM_OPS": 49716
    },
    {
        "DATE": "2024-02-01",
        "PROJECT": "Other",
        "NUM_OPS": 50008
    },
    {
        "DATE": "2024-02-01",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_OPS": 2137495
    },
    {
        "DATE": "2024-03-01",
        "PROJECT": "Cyberconnect",
        "NUM_OPS": 7402
    },
    {
        "DATE": "2024-03-01",
        "PROJECT": "JustBet",
        "NUM_OPS": 8883
    },
    {
        "DATE": "2024-03-01",
        "PROJECT": "ZerooneGallery",
        "NUM_OPS": 29713
    },
    {
        "DATE": "2024-03-01",
        "PROJECT": "Other",
        "NUM_OPS": 57315
    },
    {
        "DATE": "2024-03-01",
        "PROJECT": "Safe4337Module",
        "NUM_OPS": 62351
    },
    {
        "DATE": "2024-03-01",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_OPS": 1389340
    },
    {
        "DATE": "2024-04-01",
        "PROJECT": "Degen",
        "NUM_OPS": 38368
    },
    {
        "DATE": "2024-04-01",
        "PROJECT": "Safe4337Module",
        "NUM_OPS": 51115
    },
    {
        "DATE": "2024-04-01",
        "PROJECT": "Uncuts",
        "NUM_OPS": 121520
    },
    {
        "DATE": "2024-04-01",
        "PROJECT": "Other",
        "NUM_OPS": 194470
    },
    {
        "DATE": "2024-04-01",
        "PROJECT": "xFANTV",
        "NUM_OPS": 210192
    },
    {
        "DATE": "2024-04-01",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_OPS": 2020681
    },
    {
        "DATE": "2024-05-01",
        "PROJECT": "G1",
        "NUM_OPS": 117622
    },
    {
        "DATE": "2024-05-01",
        "PROJECT": "Degen",
        "NUM_OPS": 139147
    },
    {
        "DATE": "2024-05-01",
        "PROJECT": "Other",
        "NUM_OPS": 225962
    },
    {
        "DATE": "2024-05-01",
        "PROJECT": "Anichess Orb Token Claim",
        "NUM_OPS": 287028
    },
    {
        "DATE": "2024-05-01",
        "PROJECT": "ALFA",
        "NUM_OPS": 493578
    },
    {
        "DATE": "2024-05-01",
        "PROJECT": "Superfluid",
        "NUM_OPS": 970258
    },
    {
        "DATE": "2024-06-01",
        "PROJECT": "G1",
        "NUM_OPS": 84085
    },
    {
        "DATE": "2024-06-01",
        "PROJECT": "Superfluid",
        "NUM_OPS": 103802
    },
    {
        "DATE": "2024-06-01",
        "PROJECT": "OpenSocial",
        "NUM_OPS": 111824
    },
    {
        "DATE": "2024-06-01",
        "PROJECT": "ALFA",
        "NUM_OPS": 156489
    },
    {
        "DATE": "2024-06-01",
        "PROJECT": "Other",
        "NUM_OPS": 276628
    },
    {
        "DATE": "2024-06-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 688905
    },
    {
        "DATE": "2024-07-01",
        "PROJECT": "ALFA",
        "NUM_OPS": 64252
    },
    {
        "DATE": "2024-07-01",
        "PROJECT": "Nekocoin",
        "NUM_OPS": 68642
    },
    {
        "DATE": "2024-07-01",
        "PROJECT": "Other",
        "NUM_OPS": 377537
    },
    {
        "DATE": "2024-07-01",
        "PROJECT": "OpenSocial",
        "NUM_OPS": 557298
    },
    {
        "DATE": "2024-07-01",
        "PROJECT": "KIP",
        "NUM_OPS": 1116340
    },
    {
        "DATE": "2024-07-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 8731394
    },
    {
        "DATE": "2024-08-01",
        "PROJECT": "Wormfare",
        "NUM_OPS": 168534
    },
    {
        "DATE": "2024-08-01",
        "PROJECT": "Polkamarket",
        "NUM_OPS": 299831
    },
    {
        "DATE": "2024-08-01",
        "PROJECT": "USDT",
        "NUM_OPS": 384595
    },
    {
        "DATE": "2024-08-01",
        "PROJECT": "Other",
        "NUM_OPS": 481511
    },
    {
        "DATE": "2024-08-01",
        "PROJECT": "OpenSocial",
        "NUM_OPS": 4197091
    },
    {
        "DATE": "2024-08-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 8533695
    },
    {
        "DATE": "2024-09-01",
        "PROJECT": "KIP",
        "NUM_OPS": 285348
    },
    {
        "DATE": "2024-09-01",
        "PROJECT": "Yellow Network",
        "NUM_OPS": 387600
    },
    {
        "DATE": "2024-09-01",
        "PROJECT": "USDT",
        "NUM_OPS": 468839
    },
    {
        "DATE": "2024-09-01",
        "PROJECT": "Other",
        "NUM_OPS": 886002
    },
    {
        "DATE": "2024-09-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 4151677
    },
    {
        "DATE": "2024-09-01",
        "PROJECT": "OpenSocial",
        "NUM_OPS": 4232670
    },
    {
        "DATE": "2024-10-01",
        "PROJECT": "Super Champs",
        "NUM_OPS": 338520
    },
    {
        "DATE": "2024-10-01",
        "PROJECT": "Yellow Network",
        "NUM_OPS": 1216231
    },
    {
        "DATE": "2024-10-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 1456446
    },
    {
        "DATE": "2024-10-01",
        "PROJECT": "Other",
        "NUM_OPS": 1461158
    },
    {
        "DATE": "2024-10-01",
        "PROJECT": "OpenSocial",
        "NUM_OPS": 1683571
    },
    {
        "DATE": "2024-10-01",
        "PROJECT": "KIP",
        "NUM_OPS": 1911185
    },
    {
        "DATE": "2024-11-01",
        "PROJECT": "OpenSocial",
        "NUM_OPS": 492819
    },
    {
        "DATE": "2024-11-01",
        "PROJECT": "KIP",
        "NUM_OPS": 743961
    },
    {
        "DATE": "2024-11-01",
        "PROJECT": "Yellow Network",
        "NUM_OPS": 766921
    },
    {
        "DATE": "2024-11-01",
        "PROJECT": "Super Champs",
        "NUM_OPS": 816158
    },
    {
        "DATE": "2024-11-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 1131960
    },
    {
        "DATE": "2024-11-01",
        "PROJECT": "Other",
        "NUM_OPS": 1145844
    },
    {
        "DATE": "2024-12-01",
        "PROJECT": "Polkamarket",
        "NUM_OPS": 218123
    },
    {
        "DATE": "2024-12-01",
        "PROJECT": "Nekocoin",
        "NUM_OPS": 261909
    },
    {
        "DATE": "2024-12-01",
        "PROJECT": "Blocklords",
        "NUM_OPS": 346317
    },
    {
        "DATE": "2024-12-01",
        "PROJECT": "Other",
        "NUM_OPS": 638880
    },
    {
        "DATE": "2024-12-01",
        "PROJECT": "Yellow Network",
        "NUM_OPS": 736248
    },
    {
        "DATE": "2024-12-01",
        "PROJECT": "Super Champs",
        "NUM_OPS": 1867899
    }
]

const top_bundlers = [
    {
        "BUNDLER_NAME": "coinbase",
        "NUM_USEROPS": 30257644,
        "NUM_TXNS": 9459333,
        "REVENUE": 153949.60548513182
    },
    {
        "BUNDLER_NAME": "alchemy",
        "NUM_USEROPS": 25664813,
        "NUM_TXNS": 10777277,
        "REVENUE": 80271.24249859866
    },
    {
        "BUNDLER_NAME": "pimlico",
        "NUM_USEROPS": 23171379,
        "NUM_TXNS": 13961586,
        "REVENUE": 97843.6372076204
    },
    {
        "BUNDLER_NAME": "biconomy",
        "NUM_USEROPS": 16599136,
        "NUM_TXNS": 15151435,
        "REVENUE": 130091.57882441349
    },
    {
        "BUNDLER_NAME": "particle",
        "NUM_USEROPS": 1979591,
        "NUM_TXNS": 1867827,
        "REVENUE": 302336.718207327
    }
]

const month_chain_multi_accounts = [
    {
        "DATE": "2024-01-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 4616
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 4
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 1192
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 1041
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 1299
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 5
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 2517
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 120398
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 3366
    },
    {
        "DATE": "2024-01-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 282257
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 6693
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 1030
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 4433
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 1318
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 9
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 1378
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 11364
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 1958
    },
    {
        "DATE": "2024-02-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 400059
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 4713
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 25
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 1039
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 9897
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 3333
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 11
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 956
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 4880
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 6229
    },
    {
        "DATE": "2024-03-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 98077
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 5612
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 162
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 890
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 10517
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 3585
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 3
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 1146
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 9841
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 3701
    },
    {
        "DATE": "2024-04-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 193986
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 28694
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 146
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 1012
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 19503
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 3594
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 5
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 1342
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 11945
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 2555
    },
    {
        "DATE": "2024-05-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 57139
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 12192
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 34172
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 845
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 41035
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 4366
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 7
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 1498
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 1960
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 16748
    },
    {
        "DATE": "2024-06-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 24204
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 11659
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 58864
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 693
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 694000
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 6430
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 10552
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 1206
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 686
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 34063
    },
    {
        "DATE": "2024-07-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 27376
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 20686
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 39160
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 721
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 593056
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 6763
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 25563
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 1851
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 355
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 24241
    },
    {
        "DATE": "2024-08-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 46178
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 30350
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 13380
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 738
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 390654
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 7547
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 23776
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 3325
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 69508
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 20526
    },
    {
        "DATE": "2024-09-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 159355
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 44669
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 33301
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 948
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 692672
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 7895
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 20645
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 3971
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 2010
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 18617
    },
    {
        "DATE": "2024-10-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 264270
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 10079
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 40290
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 1116
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 562700
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 10086
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 26120
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 3900
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 1660
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 25655
    },
    {
        "DATE": "2024-11-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 124310
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "arbitrum",
        "ACTIVE_ACCOUNTS": 25608
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "arbitrum_nova",
        "ACTIVE_ACCOUNTS": 40739
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "avalanche",
        "ACTIVE_ACCOUNTS": 1824
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "base",
        "ACTIVE_ACCOUNTS": 424282
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "bsc",
        "ACTIVE_ACCOUNTS": 14390
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "celo",
        "ACTIVE_ACCOUNTS": 20874
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "ethereum",
        "ACTIVE_ACCOUNTS": 5725
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "linea",
        "ACTIVE_ACCOUNTS": 1892
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "optimism",
        "ACTIVE_ACCOUNTS": 44631
    },
    {
        "DATE": "2024-12-01",
        "CHAIN": "polygon",
        "ACTIVE_ACCOUNTS": 105841
    }
]

const multi_op_txns = [
    {
        "DATE": "2024-01-01",
        "PCT_MULTI_USEROP": 2.502
    },
    {
        "DATE": "2024-02-01",
        "PCT_MULTI_USEROP": 2.7102
    },
    {
        "DATE": "2024-03-01",
        "PCT_MULTI_USEROP": 3.6043
    },
    {
        "DATE": "2024-04-01",
        "PCT_MULTI_USEROP": 3.8511
    },
    {
        "DATE": "2024-05-01",
        "PCT_MULTI_USEROP": 5.4805
    },
    {
        "DATE": "2024-06-01",
        "PCT_MULTI_USEROP": 16.052
    },
    {
        "DATE": "2024-07-01",
        "PCT_MULTI_USEROP": 33.5604
    },
    {
        "DATE": "2024-08-01",
        "PCT_MULTI_USEROP": 49.4173
    },
    {
        "DATE": "2024-09-01",
        "PCT_MULTI_USEROP": 40.0216
    },
    {
        "DATE": "2024-10-01",
        "PCT_MULTI_USEROP": 24.5943
    },
    {
        "DATE": "2024-11-01",
        "PCT_MULTI_USEROP": 20.8916
    },
    {
        "DATE": "2024-12-01",
        "PCT_MULTI_USEROP": 23.2115
    }
]

const pct_underpriced = [{
    'DATE': '2023-03-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '53.177300'
},
{
    'DATE': '2023-03-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '100.000000'
},
{
    'DATE': '2023-03-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '86.666700'
},
{
    'DATE': '2023-04-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '82.352900'
},
{
    'DATE': '2023-04-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '91.228100'
},
{
    'DATE': '2023-04-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '46.609100'
},
{
    'DATE': '2023-04-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '99.396000'
},
{
    'DATE': '2023-05-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '100.000000'
},
{
    'DATE': '2023-05-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '76.666700'
},
{
    'DATE': '2023-05-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '40.625000'
},
{
    'DATE': '2023-05-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '31.166600'
},
{
    'DATE': '2023-05-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '98.156300'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '96.363600'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '0.000000'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '28.626100'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '92.099900'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '13.592200'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '79.411800'
},
{
    'DATE': '2023-06-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '24.324300'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '80.000000'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '8.189200'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '48.506400'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '11.882100'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '56.250000'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '31.972500'
},
{
    'DATE': '2023-07-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '94.736800'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '21.873300'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'particle',
    'PCT_UNDERPRICED': '51.948100'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '39.040300'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '62.443400'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '91.666700'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '11.582000'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '2.192700'
},
{
    'DATE': '2023-08-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '78.225800'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '11.246500'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '11.518000'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '17.647100'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'particle',
    'PCT_UNDERPRICED': '15.789500'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '36.263700'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '20.883000'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '15.572500'
},
{
    'DATE': '2023-09-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '55.555600'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '59.154900'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'particle',
    'PCT_UNDERPRICED': '46.208100'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '5.393500'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '4.762200'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '1.300700'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '0.000000'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '8.215200'
},
{
    'DATE': '2023-10-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '0.000000'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '50.331100'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '14.383600'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '38.888900'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '21.200100'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'particle',
    'PCT_UNDERPRICED': '30.991000'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '5.622900'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '8.291200'
},
{
    'DATE': '2023-11-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '2.440200'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '26.190500'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '22.222200'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '3.012300'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '2.088100'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'particle',
    'PCT_UNDERPRICED': '3.371100'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '0.000000'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '7.733600'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '26.171600'
}]


const top_paymasters = [
    {
        "PAYMASTER_NAME": "biconomy",
        "NUM_USEROPS": 14519423,
        "GAS_SPENT": 1012818.0203796434
    },
    {
        "PAYMASTER_NAME": "pimlico",
        "NUM_USEROPS": 18561350,
        "GAS_SPENT": 761489.1177126747
    },
    {
        "PAYMASTER_NAME": "stackup",
        "NUM_USEROPS": 215854,
        "GAS_SPENT": 514090.4917064192
    },
    {
        "PAYMASTER_NAME": "coinbase",
        "NUM_USEROPS": 21578423,
        "GAS_SPENT": 358269.4636142759
    },
    {
        "PAYMASTER_NAME": "alchemy",
        "NUM_USEROPS": 19402438,
        "GAS_SPENT": 253356.4144379597
    }
]

const monthly_factory_share = [
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 6526
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 64
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 417273
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 17
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 80
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 944
    },
    {
        "DATE": "2024-01-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 175576
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 9698
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 4928
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 4
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 335344
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 36
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 12
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 8
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 776
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 384
    },
    {
        "DATE": "2024-02-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 487058
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 32943
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 110831
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 185
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 15753
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 3
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 1442
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 27
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 1416
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 120
    },
    {
        "DATE": "2024-03-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 361421
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 19137
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 208029
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 191
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 7080
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 28
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 63
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 13005
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 1136
    },
    {
        "DATE": "2024-04-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 282402
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 18249
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 1153470
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 276
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 62179
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 13
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 169
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 20
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 3519
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 173
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 685
    },
    {
        "DATE": "2024-05-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 85641
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 55225
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 1551258
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 308
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 14113
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 112
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 5779
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 23
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 6383
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 14
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 6486
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 260
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 38428
    },
    {
        "DATE": "2024-06-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 345006
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 161697
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 2075070
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 579
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 79775
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 18
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 11982
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 58
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 1031699
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 22
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 994425
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 201
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 67782
    },
    {
        "DATE": "2024-07-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 53262
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 168879
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 2090251
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 11665
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 13178
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 8
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 19353
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 2278
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 17
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 339012
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 299
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 44389
    },
    {
        "DATE": "2024-08-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 24395
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 124541
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 1882004
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 24094
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 38740
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 3
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 6875
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 5
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 4826
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 15
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 194501
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 167
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 16451
    },
    {
        "DATE": "2024-09-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 443996
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 252389
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 1669235
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 28760
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 115566
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "candide",
        "NUM_ACCOUNTS": 1
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 13283
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 16
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 10469
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 164
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 350658
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 3047
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 18676
    },
    {
        "DATE": "2024-10-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 314865
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 121571
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 800926
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 8235
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 47439
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "circle",
        "NUM_ACCOUNTS": 2
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 13906
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 15
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 2329
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 68
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 387012
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 5220
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 1176
    },
    {
        "DATE": "2024-11-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 75059
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "Unknown",
        "NUM_ACCOUNTS": 127551
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "alchemy_lightaccount",
        "NUM_ACCOUNTS": 924179
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "alchemy_modularaccount",
        "NUM_ACCOUNTS": 2941
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "biconomy",
        "NUM_ACCOUNTS": 9594
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "coinbase_smart_wallet",
        "NUM_ACCOUNTS": 30784
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "etherspot",
        "NUM_ACCOUNTS": 7
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "lumx",
        "NUM_ACCOUNTS": 999
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "nani",
        "NUM_ACCOUNTS": 767
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "simpleaccount",
        "NUM_ACCOUNTS": 353726
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "thirdweb_default",
        "NUM_ACCOUNTS": 7571
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "thirdweb_managedaccount",
        "NUM_ACCOUNTS": 1000
    },
    {
        "DATE": "2024-12-01",
        "DEPLOYER_NAME": "zerodev_kernel",
        "NUM_ACCOUNTS": 103630
    }
]

