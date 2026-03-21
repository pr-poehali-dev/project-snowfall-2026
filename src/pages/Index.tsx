import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import Stamp from "@/components/Stamp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <section className="px-6 py-16 max-w-2xl mx-auto relative">
        <div className="absolute -top-8 left-2 flex gap-2">
          <Stamp
            src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/a370af8d-2d8f-4b00-9d69-14743e13253d.jpg"
            label="LOVE"
            year="2025"
            size="sm"
            rotate={-8}
          />
          <Stamp
            src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/35d3a6cc-66cf-4e7f-9df4-151ac1f0889d.jpg"
            label="POSTES"
            year="2025"
            size="sm"
            rotate={4}
          />
        </div>
        <p className="text-base leading-snug text-foreground mt-16" style={{ whiteSpace: "pre-line" }}>{`За все это время, ты стал слишком значим для меня, и оказал сильное влияние на мою жизнь, за что я тебе очень сильно благодарен.
Я люблю тебя, Тимур, и ты стал для меня неотъемлемой частью жизни, частью, которую я люблю больше всего.
Я могу очень долго говорить о том, насколько сильны мои чувства к тебе, и никогда не устану показывать это.
Ты очень важен мне, и я надеюсь что эти пол года, были лишь малой частью от того, что нас с тобой ждёт в будущем. Лисёнок, я надеюсь, что ты не чувствуешь вину за то, что не даёшь чего-то подобного в ответ, ты не должен, и я этого не требую от тебя, я просто хочу показать тебе твою значимость для меня, пускай и такими методами.
Не вини себя, просто прими этот подарок со всем теплом, которое я вложил в него. Я люблю тебя, Тимур`}</p>
        <div className="flex justify-end mt-8">
          <Stamp
            src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/a370af8d-2d8f-4b00-9d69-14743e13253d.jpg"
            label="AIR MAIL"
            year="2025"
            size="md"
            rotate={5}
          />
        </div>
      </section>

      <section className="flex justify-center py-12 px-6">
        <img
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/files/a19c1314-03bd-4af6-bf87-ec598e32598b.jpg"
          alt="Поцелуй"
          className="max-w-md w-full rounded-2xl shadow-lg"
        />
      </section>

      <Footer />
    </main>
  );
};

export default Index;