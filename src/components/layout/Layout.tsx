import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="mx-auto py-5 container min-h-[calc(100vh-117px)]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
