import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>メインタイトル</h1>

      <table>
        <tr>
          <td>&nbsp;</td>
          <td>Knocky</td>
          <td>Flor</td>
          <td>Ella</td>
          <td>Juan</td>
        </tr>
        <tr>
          <td>Breed</td>
          <td>Jack Russell</td>
          <td>Poodle</td>
          <td>Streetdog</td>
          <td>Cocker Spaniel</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>16</td>
          <td>9</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>Mother-in-law</td>
          <td>Me</td>
          <td>Me</td>
          <td>Sister-in-law</td>
        </tr>
        <tr>
          <td>Eating Habits</td>
          <td>Eats everyone's leftovers</td>
          <td>Nibbles at food</td>
          <td>Hearty eater</td>
          <td>Will eat till he explodes</td>
        </tr>
      </table>

      <table id="table1">
        <tr>
          <th>title1</th>
          <th>title2</th>
          <th>title3</th>
        </tr>
        <tr>
          <td id="nested">
            <table id="table2">
              <tr>
                <td>cell1</td>
                <td>cell2</td>
                <td>cell3</td>
              </tr>
            </table>
          </td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
        <tr>
          <td>cell4</td>
          <td>cell5</td>
          <td>cell6</td>
        </tr>
      </table>




      <h2>最上位の見出し</h2>
      <dl>
        <dt>独り言 (soliloquy)</dt>
        <dd>
          ドラマで、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を（他の登場人物ではなく）観客に対して表現するものです。
        </dd>
        <dt>独白 (monologue)</dt>
        <dd>
          ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋るものです。
        </dd>
        <dt>傍白 (aside)</dt>
        <dd>
          ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
        </dd>
      </dl>

      <address>Chris Mills, Manchester, The Grim North, UK</address>

      <h3>小見出し</h3>
      <ol>
        <li>Drive to the end of the road</li>
        <li>Turn right</li>
        <li>Go straight across the first <em>two</em> roundabouts</li>
        <li>Turn left at the third roundabout</li>
        <li>The school is on your right, 300 meters up the road</li>
      </ol>
      <p>I am <em>glad</em> you weren't <strong><em>late</em></strong>.</p>

      <p>
        Ron was backed into a corner by the marauding netherbeasts. Scared, but
        determined to protect his friends, he raised his wand and prepared to do
        battle, hoping that his distress call had made it through.
      </p>
      <hr />
      <p>
        Meanwhile, Harry was sitting at home, staring at his royalty statement and
        pondering when the next spin off series would come out, when an enchanted
        distress letter flew through his window and landed in his lap. He read it
        hazily and sighed; "better get back to work then", he mused.
      </p>

      <h4>孫見出し</h4>

      <p>変更を加える</p>
      <p>My cat is <strong>very</strong> grumpy.</p>
      <p>HTML では、&lt;p&gt; 要素で段落を定義します。</p>

      {/* 画像はこれを使う。imgタグを使わない */}
      <Image src="/hoshino.png" width={1200 / 3} height={675 / 3} alt="Hoshino" />

      {/* リンクはこれを使う。aタグを使わない */}
      <Link href="https://zenless.hoyoverse.com/en-us/" target="_blank">Zenless Zone</Link>

      <p>At Mozilla, we are a global community of</p>
      <p>At Mozilla, Hello World</p>


      <ul>
        <li>technologists</li>
        <li>thinkers</li>
        <li>builders</li>
      </ul>

      <p>working together…</p>


    </div>
  );
}
