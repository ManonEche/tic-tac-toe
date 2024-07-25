import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6">
      <div className="py-4 flex items-center gap-6">
        <Image src="/logo.webp" width={500} height={500} alt="Logo" className="w-16" />
        <h1 className="text-3xl">Tic Tac Toe</h1>
      </div>
      <div className="w-full p-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
    </header>
  )
}