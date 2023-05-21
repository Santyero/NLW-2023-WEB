import { cookies } from 'next/headers'
import { SingIn } from '@/components/SingIn'
import { Hero } from '@/components/Hero'
import { Copyrigth } from '@/components/Copyright'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)]">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {isAuthenticated ? <Profile /> : <SingIn />}
        <Hero />
        <Copyrigth />
      </div>
      {/* rigth */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360] text-center leading-relaxed">
            Você ainda não registrou nenhua lembrança, comece a {''}
            <a href="/new" className="underline hover:text-gray-50">
              criando agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
