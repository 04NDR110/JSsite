import Head from 'next/head';
import Image from 'next/image'; // Теперь будем использовать <Image> вместо <img>
// import '../styles/style.css'; // Раскомментируй, если файл существует

export default function Home() {
  return (
    <>
      <Head>
        <title>Баскетбольне взуття</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <h1>Баскетбольні кросівки 2023</h1>
        <h2>Все, що потрібно знати про найкрутіші кросівки на цій планеті</h2>
      </header>

      <main>
        <section>
          <h3>Погане спортивне взуття - це як їжа низької якості.</h3>
          <h3>Після покупки вас чекає суцільне розчарування i ризик завдати шкоди здоров&apos;ю.</h3>
          <h3>
            Тому, якщо ви збираєтеся купити кросівки, краще трохи почекати i зробити вибір на користь однієї, але
            якісної пари. Сьогодні поговоримо про переваги спортивного взуття кращих брендів, які відомі людству.
          </h3>
        </section>

        <section>
          <h3><a href="https://uk.wikipedia.org/wiki/Nike" target="_blank">Взуття Nike</a></h3>
          <Image src="/images/2.jpg" width={280} height={200} alt="Nike" />
          <p>
            Високі ціни i також висока якість. Підошва працює на системі амортизації повітря, яку не вдалося
            повторити жодному конкуренту. По краях перебувають повітряні подушки — вони i виконують роль
            амортизаторів. Якщо ви вирішите замовити через інтернет спортивне взуття цього бренду, то ніколи не
            пошкодуєте про зроблений вибір.
          </p>
          <video width="540" height="380" controls poster="/images/1.jpg">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </section>

        <section>
          <h3>
            <a href="https://imotion.com.ua/obuv-dlya-igryi-v-basketbol-adidas-vsegda-super-rezultat/" target="_blank">
              Взуття Adidas
            </a>
          </h3>
          <Image src="/images/5.jpg" width={280} height={200} alt="Adidas" />
          <p>
            Найновіші розробки компанії Adidas щодо баскетбольного взуття часто пов&apos;язані з іменами відомих
            баскетболістів. В «іменних» кросівках вони вигравали свої найкращі матчі і щоразу дивували фанатів
            новими перемогами.
          </p>
          <video width="540" height="380" controls poster="/images/3.jpg">
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </section>

        <section>
          <h3>
            <a href="https://basketmania.com.ua/blog/Jordan-Brand-Istoriya-misiya-propozytsiya" target="_blank">
              Взуття Jordan
            </a>
          </h3>
          <Image src="/images/6.jpg" width={280} height={200} alt="Jordan" />
          <p>
            Варто відзначити, що взуття лінійки Jordan створювали застосовуючи найкращі технологічні можливості
            компанії.
          </p>
          <video width="540" height="380" controls poster="/images/4.jpg">
            <source src="/video3.mp4" type="video/mp4" />
          </video>
        </section>

        <section>
          <h3><a href="https://us.puma.com/us/en/lamelo-ball" target="_blank">Взуття Puma</a></h3>
          <Image src="/images/7.jpg" width={280} height={200} alt="Puma" />
          <p>
            За м&apos;якість та чуйність відповідає технологія Nitro Foam. Кругові пунктирні лінії на передній частині
            підмітки та ромбики на задній відмінно чіпляють будь-яке покриття.
          </p>
        </section>

        <footer>
          <p>Copyright 2025</p>
          <ul className="social-icons">
            <li>
              <a className="social-icon-instagram" href="https://www.instagram.com/_dqpqpb_/" target="_blank"></a>
            </li>
            <li>
              <a className="social-icon-tiktok" href="https://www.tiktok.com/@gxxx0lb" target="_blank"></a>
            </li>
            <li>
              <a className="social-icon-telegram" href="https://t.me/dbdqpbdb" target="_blank"></a>
            </li>
            <li>
              <a className="social-icon-youtube" href="https://www.youtube.com/channel/UCd9QWUQneBlbqUVMIkCkltA" target="_blank"></a>
            </li>
          </ul>
        </footer>

        <section id="contact">
          <form action="#contact" method="post">
            <input type="text" name="contact_name" placeholder="Name" required />
            <input type="email" name="contact_email" placeholder="Email" required />
            <textarea name="contact_message" placeholder="Message" rows={6} required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </>
  );
}
