import Topbar from "@/components/ui/topbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
};

export default MainLayout;
