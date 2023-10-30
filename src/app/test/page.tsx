import Image from 'next/image'
import clsx from 'clsx';
export default function Page() {
    return <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image
            src="/next.svg"
            width={100}
            height={50}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
    </div>
}