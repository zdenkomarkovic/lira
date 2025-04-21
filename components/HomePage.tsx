import Link from "next/link";

const HomePage = () => {
  return (
    <main className="bg-white text-gray-800 p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          Stručnost. Iskustvo. Bezbednost.
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Vaš pouzdan partner za bezbednost na radu, zaštitu životne sredine i
          vanredne situacije.
        </p>
        <Link href="/o-nama">
          <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-orange-700 transition">
            Saznajte više
          </button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Bezbednost i zdravlje na radu
          </h2>
          <p>
            Procena rizika, obuka zaposlenih, zakonska dokumentacija i još mnogo
            toga.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Zaštita životne sredine
          </h2>
          <p>Izrada planova i izveštaja, zahtevi za integrisane dozvole.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Zaštita od požara</h2>
          <p>Planovi, pravilnici i obuka zaposlenih u skladu sa zakonom.</p>
        </div>
      </section>

      <section className="text-center py-10">
        <h3 className="text-2xl font-bold mb-4">Delujemo širom Srbije</h3>
        <p className="max-w-xl mx-auto">
          INSTITUT LIRA DOO posluje od 2014. godine, sa sedištem u Nišu i
          ograncima u Beogradu i Novom Sadu. Naš tim stručnjaka pruža usluge na
          celoj teritoriji Republike Srbije.
        </p>
      </section>
    </main>
  );
};
export default HomePage;
