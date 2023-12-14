import Header from "@/components/Header";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div>
      <Header />
      <section className=" h-[85vh]">
        <HomePage />
      </section>
    </div>
  );
}
