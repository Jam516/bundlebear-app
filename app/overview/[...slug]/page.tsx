import { getOverviewData } from "@/app/actions/getOverviewData"
import { Metadata } from "next";
import { TabContent } from "@/components/overview-tab-content"
// import { Alert, AlertDescription, AlertTitle } from "@/components/alert"
// import { Terminal, Waves } from "lucide-react"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/accordion"

// export function AlertDemo() {
//   return (
//     <Alert>
//       <Terminal className="h-4 w-4" />
//       <AlertTitle>What is ERC4337?</AlertTitle>
//       <AlertDescription>
//         ERC-4337 is a standard for smart contract wallets, also known as smart accounts. The key features of the system are:
//         <ol>
//           <li>- Users make pseudo-transactions called UserOperations (UserOps)</li>
//           <li>- Bundlers bundle batches of UserOps into single on-chain transactions</li>
//           <li>- Apps can use Paymaster contracts to pay for gas on behalf of users</li>
//         </ol>
//       </AlertDescription>
//     </Alert>
//   )
// }

// function FAQBlock() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>What is BundleBear?</AccordionTrigger>
//         <AccordionContent>
//           BundleBear was created to provide transparent and verifiable insights into the adoption of ERC4337.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>What is ERC4337?</AccordionTrigger>
//         <AccordionContent>
//           ERC-4337 is a standard for smart contract wallets, also known as smart accounts. The key features of the system are:
//           <ol>
//             <li>- Users make pseudo-transactions called UserOperations (UserOps)</li>
//             <li>- Bundlers bundle batches of UserOps into single on-chain transactions</li>
//             <li>- Apps can use Paymaster contracts to pay for gas on behalf of users</li>
//           </ol>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }

function AboutBlock() {
  return (
    <div className="flex flex-col items-left space-y-2 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">About BundleBear</h2>
      <p>BundleBear was created to provide transparent and verifiable insights into the adoption of ERC4337.</p>
      <p>ERC4337 is a standard for smart contract wallets, also known as smart accounts. The key features of the system are:</p>
      <ul>
        <li>- Users make pseudo-transactions called <b>UserOperations (UserOps)</b></li>
        <li>- <b>Bundlers</b> bundle batches of UserOps into onchain transactions</li>
        <li>- Apps can use <b>Paymasters</b> to pay for gas on behalf of their users</li>
      </ul>
    </div>
  )
}


export const metadata: Metadata = {
  title: "BundleBear",
  description: "A dashboard tracking the adoption of ERC-4337 smart accounts.",
};

export default async function OverviewPage({ params }: { params: { slug: string[] } }) {

  const chain = params.slug[0];
  let timeframe = params.slug[1];
  if (timeframe === undefined) {
    timeframe = "week"
  };
  // console.log(timeframe);
  const data = await getOverviewData({ chain, timeframe });

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
          </div>
          <TabContent data={data} chain={chain} timeframe={timeframe} />
          <AboutBlock />
        </div>
      </div>
    </>
  );
};
