import Image from 'next/image'
import clsx from 'clsx';
import Link from 'next/link'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
      />
      <Image
        src="/next.svg"
        width={100}
        height={50}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <Link href="/test">
        <button>
          跳转
        </button>
      </Link>
    </main>
  )
}
