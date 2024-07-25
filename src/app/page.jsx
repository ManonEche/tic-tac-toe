import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Content from "@/components/content/Content";

export default function Home() {
  return (
    <div className="bg-tictactoe">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}
