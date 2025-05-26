import Sidebar from "@/components/Shared/Sidebar";
import RightBar from "@/components/Shared/RightBar";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-xl mx-auto flex">
      {/* Sidebar - fixed width */}
      <div className="px-2 xsm:px-4 xxl:px-8">
        <Sidebar />
      </div>
      {/* Main content and RightBar split 70/30 */}
      <div className="flex flex-1">
        {/* Children - 70% */}
        <div className="w-[80%] border-x border-borderGray">
          {children}
          {modal}
        </div>

        {/* RightBar - 30% */}
        <div className="w-[30%] pl-4">
          <RightBar />
        </div>
      </div>
    </div>
  );
}
