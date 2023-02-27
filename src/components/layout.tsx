import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-main-gray min-h-screen py-8 px-32">
      <Header />
      <main>{children}</main>
    </div>
  );
}
