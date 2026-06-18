import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* TEMPORARY: Header disabled to test where old text is coming from */}
      {/* <SiteHeader /> */}

      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
