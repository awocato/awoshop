'use client';

import Basket from "@/components/Basket";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
  

function BasketInterception() {
    const router = useRouter()

    function onDismiss() {
        router.back();
    }
  return (
    <main>
<Credenza open
   onOpenChange={(isOpen) => {
    if (!isOpen) {
        onDismiss();
    }
   }}
>
  <CredenzaContent className="h-4/5 w-full max-w-3xl">
    <CredenzaHeader>
      <CredenzaTitle>Basket</CredenzaTitle>
      <CredenzaDescription>
        Contents of your basket
      </CredenzaDescription>
    </CredenzaHeader>
    <ScrollArea className="h-auto overflow-y-auto">
    <Basket/>
    </ScrollArea>
  </CredenzaContent>
</Credenza>
</main>
  )
}

export default BasketInterception