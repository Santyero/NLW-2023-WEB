import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="w10 h10 rounded-full"
      />
      <p className="text-sn max-w-[140px] leading-snug">
        Olá, <u>{name}</u>!
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero Sair!
        </a>
      </p>
    </div>
  )
}
