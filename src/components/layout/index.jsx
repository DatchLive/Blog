import { Header } from "src/components/header";
import { Footer } from "src/components/footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-4xl m-auto mt-40 sm:mt-48">{children}</div>
      </main>
      <Footer />
    </>
  );
};
