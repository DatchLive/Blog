import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
