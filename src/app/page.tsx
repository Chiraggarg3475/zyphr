import {getQueryClient,trpc} from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { text } from "stream/consumers";
import { Client } from "./client";
import { Suspense } from "react";


const Page = async () =>{

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"Chirag PREFETCH"}));
  
  return(
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client/>
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page;