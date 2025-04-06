import MainHeader from "@/components/main/MainHeader";
import Footer from "@/components/main/Footer";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
