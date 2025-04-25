import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen overflow-hidden">
      {/* Fixed Header - 30% */}
      <aside className="w-full md:w-[40%] bg-navy h-auto md:h-screen shadow-lg">
        <div className="">
          <Header />
        </div>
      </aside>

      {/* Scrollable Content - 70% */}
      <section className="w-full md:w-[60%] flex-1 h-auto md:h-screen overflow-y-auto px-4 sm:px-6 lg:px-8 bg-navy">
        <main className="divide-y divide-navy-light">
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </section>
    </div>
  );
}
