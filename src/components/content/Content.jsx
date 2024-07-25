import Image from "next/image";

export default function Header() {
  return (
    <main className="px-6 py-4 flex justify-center items-center">
      <Image src="/beach.webp" width={2000} height={2000} alt="Logo" className="w-2/4" />
    </main>
  )
}