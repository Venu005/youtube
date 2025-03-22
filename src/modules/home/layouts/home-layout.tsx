import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../ui/components/home-navbar";
import { HomeSideBar } from "../ui/components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div>
        <HomeNavbar />
      </div>
      <div className="flex min-h-screen pt-[4rem]">
         <HomeSideBar/>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};
