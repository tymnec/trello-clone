import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-screen">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100 h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
