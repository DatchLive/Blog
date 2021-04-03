import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-5 bg-pale-yellow">
        <div className="mt-48 m-auto lg:max-w-2xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
