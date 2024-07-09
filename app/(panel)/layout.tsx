import { Sidebar } from "@/components/shared";
import { TooltipProvider } from "@/components/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <div className="w-full flex min-h-screen">
        <Sidebar />
        <main className="p-8 bg-primary/[0.025] flex-grow">{children}</main>
      </div>
    </TooltipProvider>
  );
}
