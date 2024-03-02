import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/header/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
