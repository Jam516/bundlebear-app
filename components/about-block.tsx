export function AboutBlock() {
    return (
        <div className="flex flex-col items-left space-y-2 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">About BundleBear</h2>
            <p>BundleBear was created to track the adoption of ERC-4337.</p>
            <p>ERC-4337 is a standard for smart contract wallets, also known as smart accounts. The key features of the system are:</p>
            <ul>
                <li>- Users make pseudo-transactions called <b>UserOperations (UserOps)</b></li>
                <li>- <b>Bundlers</b> bundle batches of UserOps into onchain transactions</li>
                <li>- Apps can use <b>Paymasters</b> to pay for gas on behalf of their users</li>
            </ul>
            <p className="text-green-500 font-bold">
                LAST UPDATED: {new Date().toISOString().split('T')[0]} 00:00 UTC
            </p>
        </div>
    )
}