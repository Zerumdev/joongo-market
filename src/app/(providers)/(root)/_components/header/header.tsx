"use client";
import Link from "next/link";
import supabase from "../../../../../../supabase/supabase.client";
// import { useAuth } from "../../../../../../contexts/auth.store";

export const handleClickLogOut = async () => {
  const {} = await supabase.auth.signOut();
  alert("로그아웃 되었습니다");
};

function Header() {
  // const { isAuthInitialized, isLoggedIn } = useAuth();
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
            <Link href="/deals/create">판매하기</Link>
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
        {/* {isAuthInitialized &&
          (isLoggedIn ? ( */}
        <Link
          href={"/"}
          onClick={handleClickLogOut}
          className="font-semibold text-[15px]"
        >
          로그아웃
        </Link>
        {/* ) : ( */}
        {/* <div>
          <Link
            href="/auth/log_in"
            className="text-[15px] mr-4 text-gray-800 font-semibold"
          >
            로그인
          </Link>
          <Link
            href="/auth/sign_up"
            className="text-[15px] text-gray-800 font-semibold"
          >
            회원가입
          </Link>
        </div> */}
        {/* ))} */}
      </div>
    </header>
  );
}

export default Header;
