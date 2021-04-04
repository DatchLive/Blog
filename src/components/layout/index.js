import { Header } from "../header";
import { Footer } from "../footer";

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
