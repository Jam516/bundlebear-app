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
} from "lucide-react"
import { LChart } from "@/components/line-entity";
import { BChart } from "@/components/multiop-bar-chart";
import { Apps, appcolumns, bundlercolumns, paymastermincolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import MSBarChart from "@/components/marketshare-contracts"
import { MSChart } from "@/components/marketshare-bar-overview";
import { LUPChart } from "@/components/line-underpriced";
// import PieChartComponent from "@/components/pie";
import { MSDChart } from "@/components/retro/marketshare-bar-deployer";
import { MSWChart } from "@/components/retro/marketshare-bar-wallet";

export const metadata: Metadata = {
    title: "BundleBear Year In Review",
    description: "Annual review of the patterns and trends that shaped the ERC-4337 ecosystem",
};

export default async function YIRPage() {

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6 md:w-3/5 md:mx-auto ">
                    <div className="flex flex-col items-center text-center space-y-2 pb-6">
                        <h2 className="text-5xl font-bold tracking-tight">2023 Year in Review</h2>
                        <p>This year, ERC-4337 massively accelerated the pace of innovation in the account abstraction field.
                            The BundleBear 2023 Year in Review aims to provide a data-driven perspective on the major patterns and trends within the ERC-4337 smart accounts category.
                            All insights are based on ERC-4337 activity on Polygon, Optimism, Arbitrum, Base and Ethereum.</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <Users />
                        <h2 className="text-3xl font-bold tracking-tight">User Insights</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section11" className="text-xl font-bold tracking-tight pt-6">7.9M+ User Operations were made in 2023</h2>
                        <p>When you use an ERC-4337 account, you submit User Operations (UserOps) instead of transactions.
                            These UserOps get grouped into bundle transactions that are executed onchain by Bundlers.</p>
                        <p>The number of monthly UserOps reached a peak of 2.7M in October, then steadily declined to 880k in December.</p>
                        <Card className="border-4 border-black ">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly UserOps</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LChart data={monthly_ops} xaxis={"DATE"} yaxis={"USEROPS"} usd={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section12" className="text-xl font-bold tracking-tight pt-6">1.7M accounts made a UserOp in 2023</h2>
                        <p>The highest number of monthly active smart accounts occurred in November, when 450k accounts made at least one UserOp.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Active Accounts</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LChart data={monthly_active_accounts} xaxis={"DATE"} yaxis={"ACTIVES"} usd={false} />
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
                        <h2 id="section14" className="text-xl font-bold tracking-tight pt-6">Top Usage Trends</h2>
                        <p>In the first few months of ERC-4337 activity, apps like CapX (a quest protocol), Dexwin (an onchain casino) and Fantazy (a fantasy sports app) attracted a smanll number of early adopters, but there wasn&apos;t a breakout hit.</p>
                        <p>This changed in July when CyberConnect, an onchain social network, started creating ERC-4337 smart accounts for all of its users.
                            This led to a massive increase in the usage of smart accounts.
                            The peak of this growth occurred in August during their CYBER token airdrop.
                            Following the airdrop, smart account usage declined as many farmers shifted their focus from Cyberconnect to new targets. </p>
                        <p>In the following months, token farming activity on Grindery (a crypto telegram bot) and FanTV (a streaming service that rewards users with tokens) took over as the most popular user behaviours, replacing airdrop farming on CyberConnect.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Projects Share of Monthly UserOps</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <MSBarChart data={monthly_app_share} />
                            </CardContent>
                        </Card>
                        <h2 id="section15" className="text-xl font-bold tracking-tight pt-6">85% of all UserOps were made on Polygon this year</h2>
                        <p>Polygon had the highest number of active ERC-4337 accounts this year for two reasons:</p>
                        <li>The three most popular apps for 4337 users, CyberConnect, Grindery, and FanTV, were all deployed on Polygon.</li>
                        <li>It is much cheaper to deploy and use 4337 accounts on Polygon compared to other chains and L2s. For more insights on smart account costs, check out our cost analysis research report</li>
                        <p>The only break in Polygon&apos;s market dominance was in August, when CyberConnect dropped the CYBER token on Optimism and 200,000 ZTX NFTs were minted using smart accounts on Arbitrum.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Chains Share of Monthly UserOps</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <MSChart data={month_chain_ops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"CHAIN"} />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-row gap-2 items-center pt-7">
                        <Layers />
                        <h2 className="text-3xl font-bold tracking-tight">Bundler Performance</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section21" className="text-xl font-bold tracking-tight pt-6">5.4M bundle transactions were made in 2023</h2>
                        <p>The role of a Bundler is to package UserOps into bundle transactions.
                            The number of monthly bundle transactions consistently increased month-over-month throughout the year.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Bundle Transactions</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LChart data={monthly_txns} xaxis={"DATE"} yaxis={"NUM_TRANSACTIONS"} usd={false} />
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
                        <h2 id="section23" className="text-xl font-bold tracking-tight pt-6">86% of the bundles made in 2023 only contained 1 UserOp</h2>
                        <p>When bundles contain multiple UserOps, smart account users save money because the cost of the bundle transaction is shared between all the UserOps.
                            Bundlers also benefit because they spend less by making fewer transactions while charging the same gas premium on every UserOp.</p>
                        <p>Unfortunately, the number of bundles that contain only one UserOp still greatly exceeds the number of multi-UserOp bundles.
                            This is due to a combination of factors:</p>
                        <li>Building larger bundles increases the chances of getting front-ran and having your bundle reverted.
                            To prevent this, Bundlers can either use flashbot-protect (or a similar mechanism) to privately submit bundles to builders or have a direct integration with a builder.
                            However, flashbots-protect is not available on Polygon, the most popular chain for ERC-4337 usage.</li>
                        <li>There hasn&apos;t always been enough UserOp volume to fill bundles with multiple UserOps.</li>
                        <li>Bundler teams needed time to find multi-UserOp bundling algorithms that they were satisfied with.</li>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly % of Multi-UserOp Bundles</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <BChart data={multi_op_txns} xaxis={"DATE"} yaxis={"PCT_MULTI_USEROP"} />
                            </CardContent>
                        </Card>
                        <h2 id="section24" className="text-xl font-bold tracking-tight pt-6">9.7% of all bundle transactions were unprofitable</h2>
                        <p>Accurately pricing UserOps has been a challenge for ERC-4337 apps and bundlers. The line chart below tracks the monthly percentage of unprofitable bundle transactions.
                            Here, ‘unprofitable’ refers to cases where the UserOps in the bundle collectively paid less in fees than the bundler spent on the transaction.</p>
                        <p>At the start of the year, top Bundlers frequently created bundles that did not generate enough revenue from their UserOps to cover gas costs.
                            However, as the year progressed, the percentage of unprofitable bundles decreased, and by December, all Bundlers fell within the less than 30% unprofitable range.
                        </p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly % of Unprofitable Bundles</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LUPChart data={pct_underpriced} xaxis={"DATE"} yaxis={"PCT_UNDERPRICED"} segment={"BUNDLER_NAME"} pct={true} />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-row gap-2 items-center pt-7">
                        <Coins />
                        <h2 className="text-3xl font-bold tracking-tight">Paymaster Activity</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section31" className="text-xl font-bold tracking-tight pt-6">Users and Apps have spent more than $1,000,000 on UserOp fees through Paymasters</h2>
                        <p>Paymaster contracts allow applications to set up custom gas fee policies for their users.</p>
                        <p>Apps can let users pay for gas using ERC-20 tokens or they can cover the gas fees on behalf of their users.
                            Paymasters have processed nearly a million dollars in total spending, with monthly volume consistently increasing over the past four months.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Monthly Paymaster Volume</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <LChart data={monthly_paymaster} xaxis={"DATE"} yaxis={"GAS_SPENT"} usd={true} />
                            </CardContent>
                        </Card>
                        <h2 id="section32" className="text-xl font-bold tracking-tight pt-6">Top 5 Paymasters</h2>
                        <p>Here are the Paymasters who had the most volume this year:</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                            </CardHeader>
                            <CardContent >
                                <DataTable columns={paymastermincolumns} data={top_paymasters} entity={false} />
                            </CardContent>
                        </Card>
                        <h2 id="section33" className="text-xl font-bold tracking-tight pt-6">96.4% of all UserOps were paid for using a Paymaster</h2>
                        <p>Most of the UserOps made in 2023 were paid for using a paymaster.
                            This means that either the user paid their fees using an ERC20 token or the app/wallet they were using subsidized the fees.</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center pt-7">
                        <Wallet />
                        <h2 className="text-3xl font-bold tracking-tight">Factories and Wallets</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 id="section41" className="text-xl font-bold tracking-tight pt-6">84% of ERC-4337 accounts were deployed using the Zerodev and Biconomy factory contracts</h2>
                        <p>Most accounts are created using a factory contract.
                            A factory is a smart contract that generates other smart contracts.
                            55% of all accounts were deployed using the Kernel factory created by Zerodev, and 29% were deployed using the Biconomy Account factory created by Biconomy.</p>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Factory Share of Monthly Accounts Deployed</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <MSDChart data={monthly_factory_share} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"DEPLOYER_NAME"} />
                            </CardContent>
                        </Card>
                        <h2 id="section42" className="text-xl font-bold tracking-tight pt-6">Patch and CyberConnect Wallet were the most popular ERC-4337 wallets of 2023</h2>
                        <Card className="border-4 border-black">
                            <CardHeader>
                                <CardTitle className="mx-auto">Wallets Share of Monthly UserOps</CardTitle>
                                <p>In December, 18% of active accounts used Patch wallet.
                                    Patch is used by the Grindery telegram bot, and Grindery has been the primary driver of its growth.
                                    Additionally, in December, 25% of active accounts used CyberConnect&apos;s built-in wallet.</p>
                            </CardHeader>
                            <CardContent >
                                <MSWChart data={monthly_wallet} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"WALLET_NAME"} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

const monthly_ops = [{ 'DATE': '2023-03-01', 'USEROPS': 603 },
{ 'DATE': '2023-04-01', 'USEROPS': 7123 },
{ 'DATE': '2023-05-01', 'USEROPS': 12388 },
{ 'DATE': '2023-06-01', 'USEROPS': 55971 },
{ 'DATE': '2023-07-01', 'USEROPS': 458103 },
{ 'DATE': '2023-08-01', 'USEROPS': 786657 },
{ 'DATE': '2023-09-01', 'USEROPS': 884590 },
{ 'DATE': '2023-10-01', 'USEROPS': 2677380 },
{ 'DATE': '2023-11-01', 'USEROPS': 1758815 },
{ 'DATE': '2023-12-01', 'USEROPS': 882371 }]

const monthly_active_accounts = [
    { 'DATE': '2023-03-01', 'ACTIVES': 108 },
    { 'DATE': '2023-04-01', 'ACTIVES': 4680 },
    { 'DATE': '2023-05-01', 'ACTIVES': 3461 },
    { 'DATE': '2023-06-01', 'ACTIVES': 21765 },
    { 'DATE': '2023-07-01', 'ACTIVES': 293390 },
    { 'DATE': '2023-08-01', 'ACTIVES': 439396 },
    { 'DATE': '2023-09-01', 'ACTIVES': 144369 },
    { 'DATE': '2023-10-01', 'ACTIVES': 191611 },
    { 'DATE': '2023-11-01', 'ACTIVES': 450294 },
    { 'DATE': '2023-12-01', 'ACTIVES': 388617 }]

const top_five_apps = [{ 'PROJECT': 'CyberConnect', 'NUM_UNIQUE_SENDERS': 534968, 'NUM_OPS': 986149 },
{ 'PROJECT': 'xFANTV token', 'NUM_UNIQUE_SENDERS': 446375, 'NUM_OPS': 991284 },
{ 'PROJECT': 'G1 token', 'NUM_UNIQUE_SENDERS': 246107, 'NUM_OPS': 3377415 },
{ 'PROJECT': 'ZTX Hoodie NFT', 'NUM_UNIQUE_SENDERS': 211519, 'NUM_OPS': 216467 },
{ 'PROJECT': 'CYBER token', 'NUM_UNIQUE_SENDERS': 126448, 'NUM_OPS': 138777 },
{ 'PROJECT': 'Minishard NFT', 'NUM_UNIQUE_SENDERS': 64650, 'NUM_OPS': 79770 },
{ 'PROJECT': 'CapX', 'NUM_UNIQUE_SENDERS': 45847, 'NUM_OPS': 584220 },
{ 'PROJECT': 'CyberID NFT', 'NUM_UNIQUE_SENDERS': 25462, 'NUM_OPS': 26798 },
{ 'PROJECT': 'USDC', 'NUM_UNIQUE_SENDERS': 9738, 'NUM_OPS': 27030 },
{ 'PROJECT': 'CapX ID NFT', 'NUM_UNIQUE_SENDERS': 9454, 'NUM_OPS': 9522 }]

const monthly_app_share = [{ 'DATE': '2023-03-01', 'PROJECT': 'Other', 'NUM_OPS': 215 },
{ 'DATE': '2023-03-01', 'PROJECT': 'direct_transfer', 'NUM_OPS': 188 },
{
    'DATE': '2023-03-01',
    'PROJECT': '0xec52efd4aa90636dda83bd7345730d4570e21164',
    'NUM_OPS': 117
},
{ 'DATE': '2023-03-01', 'PROJECT': 'USDC', 'NUM_OPS': 46 },
{ 'DATE': '2023-03-01', 'PROJECT': 'empty_call', 'NUM_OPS': 24 },
{
    'DATE': '2023-03-01',
    'PROJECT': '0x0000000000000000000000000000000000000000',
    'NUM_OPS': 13
},
{ 'DATE': '2023-04-01', 'PROJECT': 'The Noise NFT', 'NUM_OPS': 4180 },
{ 'DATE': '2023-04-01', 'PROJECT': 'Other', 'NUM_OPS': 1959 },
{
    'DATE': '2023-04-01',
    'PROJECT': '0xba53996be4100e2daeafcd00c2f569561bf34d5b',
    'NUM_OPS': 369
},
{ 'DATE': '2023-04-01', 'PROJECT': 'USDC', 'NUM_OPS': 291 },
{ 'DATE': '2023-04-01', 'PROJECT': 'direct_transfer', 'NUM_OPS': 229 },
{
    'DATE': '2023-04-01',
    'PROJECT': '0x80161ed14216830e0dc6863c298ab2c57fc14400',
    'NUM_OPS': 93
},
{ 'DATE': '2023-05-01', 'PROJECT': 'CapX', 'NUM_OPS': 5432 },
{ 'DATE': '2023-05-01', 'PROJECT': 'Other', 'NUM_OPS': 3337 },
{ 'DATE': '2023-05-01', 'PROJECT': 'Fantazy', 'NUM_OPS': 1345 },
{ 'DATE': '2023-05-01', 'PROJECT': 'USDC', 'NUM_OPS': 914 },
{ 'DATE': '2023-05-01', 'PROJECT': 'Dexwin', 'NUM_OPS': 779 },
{ 'DATE': '2023-05-01', 'PROJECT': 'direct_transfer', 'NUM_OPS': 581 },
{ 'DATE': '2023-06-01', 'PROJECT': 'CapX', 'NUM_OPS': 40683 },
{ 'DATE': '2023-06-01', 'PROJECT': 'Other', 'NUM_OPS': 6210 },
{ 'DATE': '2023-06-01', 'PROJECT': 'Fantazy', 'NUM_OPS': 4267 },
{ 'DATE': '2023-06-01', 'PROJECT': 'direct_transfer', 'NUM_OPS': 1873 },
{ 'DATE': '2023-06-01', 'PROJECT': 'USDC', 'NUM_OPS': 1539 },
{ 'DATE': '2023-06-01', 'PROJECT': 'Dexwin', 'NUM_OPS': 1399 },
{ 'DATE': '2023-07-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 356080 },
{ 'DATE': '2023-07-01', 'PROJECT': 'Minishard NFT', 'NUM_OPS': 76106 },
{ 'DATE': '2023-07-01', 'PROJECT': 'Other', 'NUM_OPS': 17993 },
{ 'DATE': '2023-07-01', 'PROJECT': 'ECO', 'NUM_OPS': 3528 },
{ 'DATE': '2023-07-01', 'PROJECT': 'USDC', 'NUM_OPS': 3141 },
{ 'DATE': '2023-07-01', 'PROJECT': 'direct_transfer', 'NUM_OPS': 1253 },
{ 'DATE': '2023-08-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 344753 },
{ 'DATE': '2023-08-01', 'PROJECT': 'ZTX Hoodie', 'NUM_OPS': 216467 },
{ 'DATE': '2023-08-01', 'PROJECT': 'CYBER', 'NUM_OPS': 127945 },
{ 'DATE': '2023-08-01', 'PROJECT': 'Other', 'NUM_OPS': 85256 },
{ 'DATE': '2023-08-01', 'PROJECT': 'Gong', 'NUM_OPS': 8100 },
{
    'DATE': '2023-08-01',
    'PROJECT': '0x6549349c5b5269009748bdad9f3cd63b57509411',
    'NUM_OPS': 4136
},
{ 'DATE': '2023-09-01', 'PROJECT': 'Other', 'NUM_OPS': 262608 },
{ 'DATE': '2023-09-01', 'PROJECT': 'xFANTV', 'NUM_OPS': 248688 },
{ 'DATE': '2023-09-01', 'PROJECT': 'CapX', 'NUM_OPS': 194575 },
{ 'DATE': '2023-09-01', 'PROJECT': 'G1', 'NUM_OPS': 123947 },
{ 'DATE': '2023-09-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 47660 },
{ 'DATE': '2023-09-01', 'PROJECT': 'CYBER', 'NUM_OPS': 7110 },
{ 'DATE': '2023-10-01', 'PROJECT': 'G1', 'NUM_OPS': 2011137 },
{ 'DATE': '2023-10-01', 'PROJECT': 'xFANTV', 'NUM_OPS': 219338 },
{ 'DATE': '2023-10-01', 'PROJECT': 'Other', 'NUM_OPS': 215398 },
{ 'DATE': '2023-10-01', 'PROJECT': 'CapX', 'NUM_OPS': 201723 },
{ 'DATE': '2023-10-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 17826 },
{ 'DATE': '2023-10-01', 'PROJECT': 'CyberID', 'NUM_OPS': 11958 },
{ 'DATE': '2023-11-01', 'PROJECT': 'G1', 'NUM_OPS': 913065 },
{ 'DATE': '2023-11-01', 'PROJECT': 'xFANTV', 'NUM_OPS': 341366 },
{ 'DATE': '2023-11-01', 'PROJECT': 'Other', 'NUM_OPS': 255247 },
{ 'DATE': '2023-11-01', 'PROJECT': 'CapX', 'NUM_OPS': 119647 },
{ 'DATE': '2023-11-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 117578 },
{ 'DATE': '2023-11-01', 'PROJECT': 'CyberID', 'NUM_OPS': 11912 },
{ 'DATE': '2023-12-01', 'PROJECT': 'G1', 'NUM_OPS': 329525 },
{ 'DATE': '2023-12-01', 'PROJECT': 'Other', 'NUM_OPS': 219556 },
{ 'DATE': '2023-12-01', 'PROJECT': 'xFANTV', 'NUM_OPS': 166413 },
{ 'DATE': '2023-12-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 104219 },
{
    'DATE': '2023-12-01',
    'PROJECT': '0xa0b9ebd2cc138e0748c69baf66df2e01c57521ec',
    'NUM_OPS': 40514
},
{ 'DATE': '2023-12-01', 'PROJECT': 'CapX ID', 'NUM_OPS': 22144 }]

const monthly_txns = [
    { 'DATE': '2023-03-01', 'NUM_TRANSACTIONS': 659 },
    { 'DATE': '2023-04-01', 'NUM_TRANSACTIONS': 7307 },
    { 'DATE': '2023-05-01', 'NUM_TRANSACTIONS': 12551 },
    { 'DATE': '2023-06-01', 'NUM_TRANSACTIONS': 56146 },
    { 'DATE': '2023-07-01', 'NUM_TRANSACTIONS': 459677 },
    { 'DATE': '2023-08-01', 'NUM_TRANSACTIONS': 668858 },
    { 'DATE': '2023-09-01', 'NUM_TRANSACTIONS': 690029 },
    { 'DATE': '2023-10-01', 'NUM_TRANSACTIONS': 1338144 },
    { 'DATE': '2023-11-01', 'NUM_TRANSACTIONS': 1365482 },
    { 'DATE': '2023-12-01', 'NUM_TRANSACTIONS': 783875 }]

const top_bundlers = [{
    'BUNDLER_NAME': 'pimlico',
    'NUM_USEROPS': 4514902,
    'NUM_TXNS': 2788440,
    'REVENUE': 42269.210241379
},
{
    'BUNDLER_NAME': 'biconomy',
    'NUM_USEROPS': 1717173,
    'NUM_TXNS': 1729676,
    'REVENUE': 1621.092145579
},
{
    'BUNDLER_NAME': 'alchemy',
    'NUM_USEROPS': 807769,
    'NUM_TXNS': 478636,
    'REVENUE': 57333.149686141
},
{
    'BUNDLER_NAME': 'stackup',
    'NUM_USEROPS': 318952,
    'NUM_TXNS': 294002,
    'REVENUE': 16574.366268818
},
{
    'BUNDLER_NAME': 'particle',
    'NUM_USEROPS': 8255,
    'NUM_TXNS': 8564,
    'REVENUE': -74.697049699
}]

const month_chain_ops = [{ 'DATE': '2023-01-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 3 },
{ 'DATE': '2023-01-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 28 },
{ 'DATE': '2023-02-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 21 },
{ 'DATE': '2023-02-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 236 },
{ 'DATE': '2023-03-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 100 },
{ 'DATE': '2023-03-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 21 },
{ 'DATE': '2023-03-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 402 },
{ 'DATE': '2023-03-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 80 },
{ 'DATE': '2023-04-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 456 },
{ 'DATE': '2023-04-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 108 },
{ 'DATE': '2023-04-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 38 },
{ 'DATE': '2023-04-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 6521 },
{ 'DATE': '2023-05-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 11279 },
{ 'DATE': '2023-05-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 943 },
{ 'DATE': '2023-05-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 70 },
{ 'DATE': '2023-05-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 96 },
{ 'DATE': '2023-06-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 2194 },
{ 'DATE': '2023-06-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 469 },
{ 'DATE': '2023-06-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 53209 },
{ 'DATE': '2023-06-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 99 },
{ 'DATE': '2023-07-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 5459 },
{ 'DATE': '2023-07-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 1542 },
{ 'DATE': '2023-07-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 8306 },
{ 'DATE': '2023-07-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 442795 },
{ 'DATE': '2023-07-01', 'CHAIN': 'base', 'NUM_USEROPS': 1 },
{ 'DATE': '2023-08-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 240335 },
{ 'DATE': '2023-08-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 1111 },
{ 'DATE': '2023-08-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 422884 },
{ 'DATE': '2023-08-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 91773 },
{ 'DATE': '2023-08-01', 'CHAIN': 'base', 'NUM_USEROPS': 30554 },
{ 'DATE': '2023-09-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 33394 },
{ 'DATE': '2023-09-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 33457 },
{ 'DATE': '2023-09-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 613 },
{ 'DATE': '2023-09-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 812305 },
{ 'DATE': '2023-09-01', 'CHAIN': 'base', 'NUM_USEROPS': 4821 },
{ 'DATE': '2023-10-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 29619 },
{ 'DATE': '2023-10-01', 'CHAIN': 'base', 'NUM_USEROPS': 3376 },
{ 'DATE': '2023-10-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 28174 },
{ 'DATE': '2023-10-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 709 },
{ 'DATE': '2023-10-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 2615502 },
{ 'DATE': '2023-11-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 37285 },
{ 'DATE': '2023-11-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 75179 },
{ 'DATE': '2023-11-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 1638941 },
{ 'DATE': '2023-11-01', 'CHAIN': 'base', 'NUM_USEROPS': 5356 },
{ 'DATE': '2023-11-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 2054 },
{ 'DATE': '2023-12-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 104266 },
{ 'DATE': '2023-12-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 4942 },
{ 'DATE': '2023-12-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 40842 },
{ 'DATE': '2023-12-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 720154 },
{ 'DATE': '2023-12-01', 'CHAIN': 'base', 'NUM_USEROPS': 12167 }]

const multi_op_txns = [
    { 'DATE': '2023-03-01', 'PCT_MULTI_USEROP': '0.000000' },
    { 'DATE': '2023-04-01', 'PCT_MULTI_USEROP': '0.068400' },
    { 'DATE': '2023-05-01', 'PCT_MULTI_USEROP': '0.350600' },
    { 'DATE': '2023-06-01', 'PCT_MULTI_USEROP': '0.616300' },
    { 'DATE': '2023-07-01', 'PCT_MULTI_USEROP': '0.063500' },
    { 'DATE': '2023-08-01', 'PCT_MULTI_USEROP': '6.919400' },
    { 'DATE': '2023-09-01', 'PCT_MULTI_USEROP': '1.017900' },
    { 'DATE': '2023-10-01', 'PCT_MULTI_USEROP': '32.292600' },
    { 'DATE': '2023-11-01', 'PCT_MULTI_USEROP': '15.939300' },
    { 'DATE': '2023-12-01', 'PCT_MULTI_USEROP': '9.135500' }]

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

const monthly_paymaster = [{ 'DATE': '2023-03-01', 'GAS_SPENT': 617.586294343 },
{ 'DATE': '2023-04-01', 'GAS_SPENT': 2907.271563852 },
{ 'DATE': '2023-05-01', 'GAS_SPENT': 3425.448827273 },
{ 'DATE': '2023-06-01', 'GAS_SPENT': 5121.325085311 },
{ 'DATE': '2023-07-01', 'GAS_SPENT': 49268.018927242 },
{ 'DATE': '2023-08-01', 'GAS_SPENT': 358457.569955462 },
{ 'DATE': '2023-09-01', 'GAS_SPENT': 41634.331369026 },
{ 'DATE': '2023-10-01', 'GAS_SPENT': 62725.9372769 },
{ 'DATE': '2023-11-01', 'GAS_SPENT': 151617.718719426 },
{ 'DATE': '2023-12-01', 'GAS_SPENT': 327385.125687275 }]

const top_paymasters = [{ 'PAYMASTER_NAME': 'pimlico', 'GAS_SPENT': 294075.318541413 },
{ 'PAYMASTER_NAME': 'stackup', 'GAS_SPENT': 290258.169283822 },
{ 'PAYMASTER_NAME': 'alchemy', 'GAS_SPENT': 262198.056162324 },
{ 'PAYMASTER_NAME': 'biconomy', 'GAS_SPENT': 53397.787427149 },
{ 'PAYMASTER_NAME': 'blocto', 'GAS_SPENT': 1018.167345478 }]

const monthly_factory_share = [{ 'DATE': '2023-03-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 1 },
{ 'DATE': '2023-03-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 83 },
{ 'DATE': '2023-04-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 4255 },
{ 'DATE': '2023-04-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 10 },
{ 'DATE': '2023-04-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 340 },
{ 'DATE': '2023-04-01', 'DEPLOYER_NAME': 'zerodev_kernel', 'NUM_ACCOUNTS': 16 },
{ 'DATE': '2023-05-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 2740 },
{ 'DATE': '2023-05-01', 'DEPLOYER_NAME': 'zerodev_kernel', 'NUM_ACCOUNTS': 66 },
{ 'DATE': '2023-05-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 18 },
{ 'DATE': '2023-05-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 439 },
{ 'DATE': '2023-05-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 3 },
{ 'DATE': '2023-06-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 8 },
{ 'DATE': '2023-06-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 20 },
{
    'DATE': '2023-06-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 213
},
{ 'DATE': '2023-06-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 1499 },
{ 'DATE': '2023-06-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 19480 },
{ 'DATE': '2023-06-01', 'DEPLOYER_NAME': 'banana', 'NUM_ACCOUNTS': 2 },
{ 'DATE': '2023-07-01', 'DEPLOYER_NAME': 'banana', 'NUM_ACCOUNTS': 8 },
{ 'DATE': '2023-07-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 294 },
{ 'DATE': '2023-07-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 4761 },
{ 'DATE': '2023-07-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 5 },
{ 'DATE': '2023-07-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 8 },
{
    'DATE': '2023-07-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 287406
},
{ 'DATE': '2023-08-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 11 },
{ 'DATE': '2023-08-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 4019 },
{
    'DATE': '2023-08-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 200930
},
{ 'DATE': '2023-08-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 151 },
{ 'DATE': '2023-08-01', 'DEPLOYER_NAME': 'fun.xyz', 'NUM_ACCOUNTS': 16 },
{ 'DATE': '2023-08-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 216819 },
{ 'DATE': '2023-08-01', 'DEPLOYER_NAME': 'banana', 'NUM_ACCOUNTS': 18 },
{ 'DATE': '2023-09-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 66714 },
{ 'DATE': '2023-09-01', 'DEPLOYER_NAME': 'banana', 'NUM_ACCOUNTS': 13 },
{
    'DATE': '2023-09-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 41008
},
{ 'DATE': '2023-09-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 25 },
{ 'DATE': '2023-09-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 341 },
{ 'DATE': '2023-09-01', 'DEPLOYER_NAME': 'etherspot', 'NUM_ACCOUNTS': 35 },
{ 'DATE': '2023-09-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 10686 },
{
    'DATE': '2023-10-01',
    'DEPLOYER_NAME': 'alchemy_lightaccount',
    'NUM_ACCOUNTS': 6
},
{ 'DATE': '2023-10-01', 'DEPLOYER_NAME': 'etherspot', 'NUM_ACCOUNTS': 13 },
{ 'DATE': '2023-10-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 81868 },
{ 'DATE': '2023-10-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 5370 },
{
    'DATE': '2023-10-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 63093
},
{ 'DATE': '2023-10-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 266 },
{ 'DATE': '2023-10-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 12 },
{
    'DATE': '2023-11-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 211487
},
{ 'DATE': '2023-11-01', 'DEPLOYER_NAME': 'etherspot', 'NUM_ACCOUNTS': 20 },
{ 'DATE': '2023-11-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 3 },
{ 'DATE': '2023-11-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 187552 },
{ 'DATE': '2023-11-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 10508 },
{ 'DATE': '2023-11-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 207 },
{
    'DATE': '2023-11-01',
    'DEPLOYER_NAME': 'alchemy_lightaccount',
    'NUM_ACCOUNTS': 65
},
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 29369 },
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 173477 },
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 1 },
{
    'DATE': '2023-12-01',
    'DEPLOYER_NAME': 'alchemy_lightaccount',
    'NUM_ACCOUNTS': 75
},
{
    'DATE': '2023-12-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 160486
},
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 179 },
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'etherspot', 'NUM_ACCOUNTS': 3 }]

const paymasterUsed = [{ PAYMASTER: 0.947, NO_PAYMASTER: 0.053 }]

const monthly_wallet = [{ 'DATE': '2023-03-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 84 },
{ 'DATE': '2023-04-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 4621 },
{ 'DATE': '2023-05-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 3266 },
{ 'DATE': '2023-06-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 21222 },
{ 'DATE': '2023-07-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 5426 },
{ 'DATE': '2023-07-01', 'WALLET_NAME': 'cyberconnect', 'NUM_ACCOUNTS': 287056 },
{ 'DATE': '2023-08-01', 'WALLET_NAME': 'patch', 'NUM_ACCOUNTS': 17 },
{ 'DATE': '2023-08-01', 'WALLET_NAME': 'cyberconnect', 'NUM_ACCOUNTS': 194161 },
{ 'DATE': '2023-08-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 227786 },
{ 'DATE': '2023-09-01', 'WALLET_NAME': 'cyberconnect', 'NUM_ACCOUNTS': 25958 },
{ 'DATE': '2023-09-01', 'WALLET_NAME': 'patch', 'NUM_ACCOUNTS': 13644 },
{ 'DATE': '2023-09-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 79220 },
{ 'DATE': '2023-10-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 90332 },
{ 'DATE': '2023-10-01', 'WALLET_NAME': 'cyberconnect', 'NUM_ACCOUNTS': 5047 },
{ 'DATE': '2023-10-01', 'WALLET_NAME': 'patch', 'NUM_ACCOUNTS': 55249 },
{ 'DATE': '2023-11-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 201145 },
{ 'DATE': '2023-11-01', 'WALLET_NAME': 'cyberconnect', 'NUM_ACCOUNTS': 97988 },
{ 'DATE': '2023-11-01', 'WALLET_NAME': 'patch', 'NUM_ACCOUNTS': 110709 },
{ 'DATE': '2023-12-01', 'WALLET_NAME': 'cyberconnect', 'NUM_ACCOUNTS': 91101 },
{ 'DATE': '2023-12-01', 'WALLET_NAME': 'other', 'NUM_ACCOUNTS': 205711 },
{ 'DATE': '2023-12-01', 'WALLET_NAME': 'patch', 'NUM_ACCOUNTS': 66778 }]