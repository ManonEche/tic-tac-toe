import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6 py-4">
      <Image src="/logo.webp" width={500} height={500} alt="Logo"/>
    </header>
  )
}