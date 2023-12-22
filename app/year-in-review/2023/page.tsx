import { Metadata } from "next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import {
    Users
} from "lucide-react"
import { LChart } from "@/components/line-entity";
import { Apps, appcolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import MSBarChart from "@/components/marketshare-contracts"
import { MSChart } from "@/components/marketshare-bar-overview";

export const metadata: Metadata = {
    title: "BundleBear Year In Review",
    description: "Annual review of the patterns and trends that shaped the ERC-4337 ecosystem",
};

export default async function YIRPage() {

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex flex-col items-left space-y-2">
                        <p>logo with name</p>
                        <h2 className="text-3xl font-bold tracking-tight">2023 Year in Review</h2>
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                        <Card >
                            <CardHeader>
                                <CardTitle>User Insights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li>- <a href="#section11">User Operations</a></li>
                                    <li>- <a href="#section12">Accounts</a></li>
                                    <li>- <a href="#section13">Top Apps</a></li>
                                    <li>- <a href="#section14">Usage Trends</a></li>
                                    <li>- <a href="#section15">Chains</a></li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Bundler Performance</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Paymasters</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Factories</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Users />
                        <h2 className="text-3xl font-bold tracking-tight">User Insights</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Card id="section11">
                            <CardHeader>
                                <CardTitle className="text-xl">7.5M+ User Operations were made in 2023</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>When you use an ERC-4337 account, you submit User Operations (UserOps) instead of transactions.
                                        These UserOps get grouped into bundle transactions that are executed onchain by Bundlers.</p>
                                    <p>The number of monthly UserOps reached a peak of 2.7M in October, then steadily declined to 720k in December.</p>
                                    <div className="flex justify-center">
                                        <p>Monthly UserOps</p>
                                    </div>
                                    <LChart data={monthly_ops} xaxis={"DATE"} yaxis={"USEROPS"} usd={false} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card id="section12">
                            <CardHeader>
                                <CardTitle className="text-xl">1.7M accounts made a UserOp in 2023</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>The highest number of monthly active smart accounts occurred in November, when 450k accounts made at least one UserOp.</p>
                                    <div className="flex justify-center">
                                        <p>Monthly Active Accounts</p>
                                    </div>
                                    <LChart data={monthly_active_accounts} xaxis={"DATE"} yaxis={"ACTIVES"} usd={false} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card id="section13">
                            <CardHeader>
                                <CardTitle className="text-xl">Top 10 most used protocols</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>Here are the protocols that ERC-4337 accounts used the most this year:</p>
                                    <DataTable columns={appcolumns} data={top_five_apps} entity={false} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card id="section14">
                            <CardHeader>
                                <CardTitle className="text-xl">Top Usage Trends</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>In the first few months of ERC-4337 activity, apps like CapX (a quest protocol), Dexwin (an onchain casino) and Fantazy (a fantasy sports app) attracted a smanll number of early adopters, but there wasn&apos;t a breakout hit.</p>
                                    <p>This changed in July when CyberConnect, an onchain social network, started creating ERC-4337 smart accounts for all of its users.
                                        This led to a massive increase in the usage of smart accounts.
                                        The peak of this growth occurred in August during their CYBER token airdrop.
                                        Following the airdrop, smart account usage declined as many farmers shifted their focus from Cyberconnect to new targets. </p>
                                    <p>In the following months, token farming activity on Grindery (a crypto telegram bot) and FanTV (a streaming service that rewards users with tokens) took over as the most popular user behaviours, replacing airdrop farming on CyberConnect.</p>
                                    <div className="flex justify-center">
                                        <p>Projects Share of Monthly UserOps</p>
                                    </div>
                                    <MSBarChart data={monthly_app_share} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card id="section15">
                            <CardHeader>
                                <CardTitle className="text-xl">85% of all UserOps were made on Polygon this year.</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>Polygon had the highest number of active ERC-4337 accounts this year for two reasons:</p>
                                    <li>The three most popular apps for 4337 users, CyberConnect, Grindery, and FanTV, were all deployed on Polygon.</li>
                                    <li>It is much cheaper to deploy and use 4337 accounts on Polygon compared to other chains and L2s. For more insights on smart account costs, check out our cost analysis research report</li>
                                    <p>The only break in Polygon&apos;s market dominance was in August, when CyberConnect dropped the CYBER token on Optimism and 200,000 ZTX NFTs were minted using smart accounts on Arbitrum.</p>
                                    <div className="flex justify-center">
                                        <p>Chains Share of Monthly UserOps</p>
                                    </div>
                                    <MSChart data={month_chain_ops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"CHAIN"} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">add icon - Bundler Performance</h2>
                    <div className="flex flex-col gap-4">
                        <Card id="section21">
                            <CardHeader>
                                <CardTitle className="text-xl">5.2M bundle transactions were made in 2023</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>The role of a Bundler is to package UserOps into bundle transactions.
                                        The number of monthly bundle transactions consistently increased month-over-month throughout the year.</p>
                                    <div className="flex justify-center">
                                        <p>Monthly Bundle Transactions</p>
                                    </div>
                                    {/* <MSBarChart data={month_chain_ops} /> */}
                                </div>
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
{ 'DATE': '2023-12-01', 'USEROPS': 720754 }]

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
    { 'DATE': '2023-12-01', 'ACTIVES': 322917 }]

const top_five_apps = [{ 'PROJECT': 'CyberConnect', 'NUM_UNIQUE_SENDERS': 515450, 'NUM_OPS': 965481 },
{ 'PROJECT': 'xFANTV token', 'NUM_UNIQUE_SENDERS': 436917, 'NUM_OPS': 980863 },
{ 'PROJECT': 'G1 token', 'NUM_UNIQUE_SENDERS': 245541, 'NUM_OPS': 3375820 },
{ 'PROJECT': 'ZTX Hoodie NFT', 'NUM_UNIQUE_SENDERS': 245541, 'NUM_OPS': 216467 },
{ 'PROJECT': 'CYBER token', 'NUM_UNIQUE_SENDERS': 126399, 'NUM_OPS': 138272 },
{ 'PROJECT': 'Minishard NFT', 'NUM_UNIQUE_SENDERS': 64650, 'NUM_OPS': 79764 },
{ 'PROJECT': 'CapX', 'NUM_UNIQUE_SENDERS': 45767, 'NUM_OPS': 581826 },
{ 'PROJECT': 'CyberID NFT', 'NUM_UNIQUE_SENDERS': 25348, 'NUM_OPS': 26591 },
{ 'PROJECT': 'USDC', 'NUM_UNIQUE_SENDERS': 9569, 'NUM_OPS': 26422 },
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
{ 'DATE': '2023-12-01', 'PROJECT': 'G1', 'NUM_OPS': 328008 },
{ 'DATE': '2023-12-01', 'PROJECT': 'Other', 'NUM_OPS': 197297 },
{ 'DATE': '2023-12-01', 'PROJECT': 'xFANTV', 'NUM_OPS': 148759 },
{ 'DATE': '2023-12-01', 'PROJECT': 'Cyberconnect', 'NUM_OPS': 87258 },
{
    'DATE': '2023-12-01',
    'PROJECT': '0xa0b9ebd2cc138e0748c69baf66df2e01c57521ec',
    'NUM_OPS': 17097
},
{ 'DATE': '2023-12-01', 'PROJECT': 'CapX ID', 'NUM_OPS': 9630 }]

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
    { 'DATE': '2023-12-01', 'NUM_TRANSACTIONS': 691817 }]

const top_bundlers = [{
    'BUNDLER_NAME': 'pimlico',
    'NUM_USEROPS': 4473977,
    'NUM_TXNS': 2749611,
    'REVENUE': 25880.617851897
},
{
    'BUNDLER_NAME': 'biconomy',
    'NUM_USEROPS': 1681150,
    'NUM_TXNS': 1693719,
    'REVENUE': 1239.70751768
},
{
    'BUNDLER_NAME': 'alchemy',
    'NUM_USEROPS': 802277,
    'NUM_TXNS': 472953,
    'REVENUE': 57144.411136009
},
{
    'BUNDLER_NAME': 'stackup',
    'NUM_USEROPS': 317916,
    'NUM_TXNS': 292958,
    'REVENUE': 15722.443447643
},
{
    'BUNDLER_NAME': 'particle',
    'NUM_USEROPS': 4770,
    'NUM_TXNS': 5096,
    'REVENUE': -101.266046692
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
{ 'DATE': '2023-12-01', 'CHAIN': 'arbitrum', 'NUM_USEROPS': 74291 },
{ 'DATE': '2023-12-01', 'CHAIN': 'ethereum', 'NUM_USEROPS': 4458 },
{ 'DATE': '2023-12-01', 'CHAIN': 'optimism', 'NUM_USEROPS': 37091 },
{ 'DATE': '2023-12-01', 'CHAIN': 'polygon', 'NUM_USEROPS': 660927 },
{ 'DATE': '2023-12-01', 'CHAIN': 'base', 'NUM_USEROPS': 11282 }]

const multi_op_txns = [{ 'DATE': '2023-01-01', 'PCT_MULTI_USEROP': '0.000000' },
{ 'DATE': '2023-02-01', 'PCT_MULTI_USEROP': '0.000000' },
{ 'DATE': '2023-03-01', 'PCT_MULTI_USEROP': '0.000000' },
{ 'DATE': '2023-04-01', 'PCT_MULTI_USEROP': '0.068400' },
{ 'DATE': '2023-05-01', 'PCT_MULTI_USEROP': '0.350600' },
{ 'DATE': '2023-06-01', 'PCT_MULTI_USEROP': '0.616300' },
{ 'DATE': '2023-07-01', 'PCT_MULTI_USEROP': '0.063500' },
{ 'DATE': '2023-08-01', 'PCT_MULTI_USEROP': '6.919400' },
{ 'DATE': '2023-09-01', 'PCT_MULTI_USEROP': '1.017900' },
{ 'DATE': '2023-10-01', 'PCT_MULTI_USEROP': '32.292600' },
{ 'DATE': '2023-11-01', 'PCT_MULTI_USEROP': '15.939300' },
{ 'DATE': '2023-12-01', 'PCT_MULTI_USEROP': '10.145600' }]

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
    'BUNDLER_NAME': 'etherspot',
    'PCT_UNDERPRICED': '22.222200'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'biconomy',
    'PCT_UNDERPRICED': '2.301700'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'particle',
    'PCT_UNDERPRICED': '5.312300'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'unipass',
    'PCT_UNDERPRICED': '0.000000'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'candide',
    'PCT_UNDERPRICED': '27.160500'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'alchemy',
    'PCT_UNDERPRICED': '2.686600'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'pimlico',
    'PCT_UNDERPRICED': '7.109000'
},
{
    'DATE': '2023-12-01',
    'BUNDLER_NAME': 'stackup',
    'PCT_UNDERPRICED': '27.515000'
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
{ 'DATE': '2023-12-01', 'GAS_SPENT': 277105.523589053 }]

const top_paymasters = [{ 'PAYMASTER_NAME': 'stackup', 'GAS_SPENT': 285427.814710012 },
{ 'PAYMASTER_NAME': 'alchemy', 'GAS_SPENT': 261014.039632064 },
{ 'PAYMASTER_NAME': 'pimlico', 'GAS_SPENT': 257033.505273963 },
{ 'PAYMASTER_NAME': 'biconomy', 'GAS_SPENT': 51175.925686007 },
{ 'PAYMASTER_NAME': 'blocto', 'GAS_SPENT': 1014.382554626 }]

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
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'simpleaccount', 'NUM_ACCOUNTS': 165 },
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'etherspot', 'NUM_ACCOUNTS': 3 },
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'candide', 'NUM_ACCOUNTS': 1 },
{
    'DATE': '2023-12-01',
    'DEPLOYER_NAME': 'zerodev_kernel',
    'NUM_ACCOUNTS': 143575
},
{
    'DATE': '2023-12-01',
    'DEPLOYER_NAME': 'alchemy_lightaccount',
    'NUM_ACCOUNTS': 50
},
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'Unknown', 'NUM_ACCOUNTS': 22177 },
{ 'DATE': '2023-12-01', 'DEPLOYER_NAME': 'biconomy', 'NUM_ACCOUNTS': 145050 }]