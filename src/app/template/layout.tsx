import Link from 'next/link';

import Button from '@/components/buttons/Button';

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex w-full bg-slate-100 p-4 pl-8 pr-8'>
        <div className='flex gap-4 items-center justify-start w-full'>
          Some logo will go here
        </div>
        <nav className='flex gap-4 items-center justify-end w-full'>
          <Link href='/template/home'>Home</Link>
          <Link href='/template/about'>About</Link>
          <Link href='/template/contact'>Contact</Link>
          <Link href='/template/blog'>Blog</Link>
          <Link href='/template/about-us'>About Us</Link>
          <Button>Free Trial</Button>
        </nav>
      </div>
      {children}
    </>
  );
}
