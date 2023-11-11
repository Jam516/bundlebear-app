import { Avatar, AvatarFallback, AvatarImage } from "@/new-york-ui/avatar";

export function Logo() {
  return (
    <Avatar className="h-8">
      <AvatarImage src="/bblogo.png" alt="BundleBear" />
      <AvatarFallback>BundleBear</AvatarFallback>
    </Avatar>
  );
}

// export function Logo() {
//   return <Image src="/bear_mini.png" width={32} height={32} alt="BundleBear" />;
// }
