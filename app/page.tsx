import { CartProvider } from "@/components/CartProvider";
import { ProductDetailProvider } from "@/components/ProductDetailProvider";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import ProductDetailModal from "@/components/ProductDetailModal";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Transparency from "@/components/Transparency";
import Story from "@/components/Story";
import Promise from "@/components/Promise";
import CustomOrder from "@/components/CustomOrder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <ProductDetailProvider>
        <Header />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <Transparency />
          <Menu />
          <Story />
          <Promise />
          <CustomOrder />
        </main>
        <Footer />
        <CartDrawer />
        <ProductDetailModal />
      </ProductDetailProvider>
    </CartProvider>
  );
}
