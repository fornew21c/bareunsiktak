import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Promise from "@/components/Promise";
import CustomOrder from "@/components/CustomOrder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Menu />
        <Story />
        <Promise />
        <CustomOrder />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
