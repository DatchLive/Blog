import { Header } from "src/components/header";
import { Footer } from "src/components/footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-gray-50">
                <div className="max-w-4xl m-auto py-14 px-9">{children}</div>
            </main>
            <Footer />
        </>
    );
};
