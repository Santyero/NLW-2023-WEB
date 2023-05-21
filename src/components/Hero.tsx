import Image from 'next/image'
import nlwLogo from '../assets/nlw-space-logo.svg'

export function Hero() {
  return (
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
  )
}
