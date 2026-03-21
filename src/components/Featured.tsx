export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white relative">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/41b43e63-d46b-4942-84ed-77aa81291b9d.png"
          alt="Наше сообщение"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Уже пол года прошло с того сообщения, а я понял, что если и дальше мы будем вместе — нас ждёт только хорошее.
          <br /><br />
          Я до сих пор помню то твоё сообщение, до сих пор помню какое искренне счастье я тогда чувствовал, от прочитанного, и периодически возвращаюсь к нему, и перечитываю.
          <br /><br />
          Я очень сильно люблю тебя, Тимур, я люблю каждую секунду, что мы провели с тобой вместе, каждый день, что мы с тобой знакомы, и очень благодарен судьбе, что всё случилось так, как случилось.
        </p>
      </div>
    </div>
  );
}