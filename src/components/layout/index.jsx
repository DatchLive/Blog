import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div className="mt-48 m-auto lg:max-w-2xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
