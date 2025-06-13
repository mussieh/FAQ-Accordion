import FAQCard from "./components/FAQCard";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <main className="h-screen bg-custom-purple-100">
                <section className="relative flex justify-center mx-6">
                    <FAQCard />
                </section>
            </main>
        </>
    );
}

export default App;
