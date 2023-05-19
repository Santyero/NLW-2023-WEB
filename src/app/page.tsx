import { User } from 'lucide-react'
import nlwLogo from '../assets/nlw-space-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)]">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* SingIn */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"></User>
          </div>
          <p className="text-sn max-w-[140px] leading-snug">
            <u>Crie sua conta</u> e salve suas memórias!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW logo" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-4xl font-bold text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="mt-1 text-lg leading-relaxed">
              Colecione momentos de sua jornada e compartilhe com o{' '}
              <b className="text-3xl font-black uppercase text-purple-600">
                mundo!
              </b>
            </p>

            <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">
              {' '}
              Cadastrar Lembrança
            </a>
          </div>
        </div>
        {/* CopyPaste */}
        <div>
          Feito com ainda mais 💜 por{' '}
          <a
            href="https://github.com/Santyero"
            target="_blank"
            className="font-gray-50 text-ml font-bold uppercase underline hover:text-gray-100"
            rel="noreferrer"
          >
            {' '}
            santyero
          </a>
        </div>
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
