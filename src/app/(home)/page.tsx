import { HomeView } from "@/modules/home/ui/views/home-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"; //! prefetch is used

interface PageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>;
}

const Page = async({searchParams}: PageProps) => {
  
  const {categoryId} =  await searchParams
  
  void trpc.categories.getMany.prefetch(); // vercel builds as statci application use dynamic
  return (
    <HydrateClient>
      <HomeView categoryId = {categoryId} />
    </HydrateClient>
  );
};

export default Page;
