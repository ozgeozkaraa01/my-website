import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "@next/font/google";
import Content from "../components/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}

      <Content />

      {/* Footer */}

      <Footer />
    </div>
  );
}
