import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-slate-600">
            <div className="h-14 flex justify-center shadow-sm">
                <div className="max-w-screen-xl w-full h-full">
                    <div className="px-[20px] py-[10px] h-full w-full flex items-center justify-between">
                        <div className='flex items-center gap-1'>
                            <Link href="/" className='flex items-center gap-1'>
                                <Image src="/logo.svg" alt="Logo" width={28} height={28} className='' />
                                <span>Light Resume</span>
                            </Link>
                        </div>
                        <div className="">Avatar</div>
                    </div>
                </div>
            </div>
        </header>
    );
}