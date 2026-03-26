import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />

      <section className="px-6 py-16 max-w-2xl mx-auto">
        <p className="text-base leading-snug text-foreground" style={{ whiteSpace: "pre-line" }}>{`За все это время, ты стал слишком значим для меня, и оказал сильное влияние на мою жизнь, за что я тебе очень сильно благодарен.
Я люблю тебя, Тимур, и ты стал для меня неотъемлемой частью жизни, частью, которую я люблю больше всего.
Я могу очень долго говорить о том, насколько сильны мои чувства к тебе, и никогда не устану показывать это.
Ты очень важен мне, и я надеюсь что эти пол года, были лишь малой частью от того, что нас с тобой ждёт в будущем. Лисёнок, я надеюсь, что ты не чувствуешь вину за то, что не даёшь чего-то подобного в ответ, ты не должен, и я этого не требую от тебя, я просто хочу показать тебе твою значимость для меня, пускай и такими методами.
Не вини себя, просто прими этот подарок со всем теплом, которое я вложил в него. Я люблю тебя, Тимур`}</p>
      </section>

      <section className="flex justify-center pt-2 pb-8 px-6">
        <img
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/af18341a-e889-4d36-a5ff-980130c1776a.jpg"
          alt="Лисы"
          className="max-w-md w-full rounded-2xl shadow-lg"
        />
      </section>

      <Footer />
    </main>
  );
};

export default Index;