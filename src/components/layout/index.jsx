import { Header } from "src/components/header";
import { Footer } from "src/components/footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-5 bg-pale-yellow">
        <div className="mt-40 sm:mt-48 m-auto max-w-4xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
