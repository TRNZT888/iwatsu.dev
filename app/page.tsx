import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>メインタイトル</h1>
      <h2>最上位の見出し</h2>
      <h3>小見出し</h3>
      <h4>孫見出し</h4>

      <p>変更を加える</p>
      <p>My cat is <strong>very</strong> grumpy.</p>

      {/* 画像はこれを使う。imgタグを使わない */}
      <Image src="/hoshino.png" width={1200 / 4} height={675 / 4} alt="Hoshino" />

      {/* リンクはこれを使う。aタグを使わない */}
      <Link href="https://zenless.hoyoverse.com/en-us/" target="_blank">Zenless Zone</Link>

      <p>At Mozilla, we are a global community of</p>

      <ul>
        <li>technologists</li>
        <li>thinkers</li>
        <li>builders</li>
      </ul>

      <p>working together…</p>


    </div>
  );
}
