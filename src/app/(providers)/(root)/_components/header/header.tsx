import Link from "next/link";

function Header() {
  return (
    <header className="bg-green-300 sticky top-0 h-16 border-b flex items-center px-72 z-10 shrink-0">
      <Link className="text-xl font-extrabold text-center" href="/">
        중고마켓
      </Link>

      <nav className="ml-20">
        <ul>
          <li className="text-[15px] font-medium">
            <Link href="/buy">구입하기</Link>
          </li>
        </ul>
      </nav>
      <nav className="ml-5">
        <ul>
          <li className="text-[15px] font-medium">
            <Link href="/sell">판매하기</Link>
          </li>
        </ul>
      </nav>
      <nav className="ml-5">
        <ul>
          <li className="text-[15px] font-medium">
            <Link href="/my">내 판매글/페이지</Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-x-4">
        <button className="text-[15px] text-gray-800 font-semibold">
          로그인
        </button>
        <Link
          href="/sign_up"
          className="text-[15px] text-gray-800 font-semibold"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}

export default Header;
