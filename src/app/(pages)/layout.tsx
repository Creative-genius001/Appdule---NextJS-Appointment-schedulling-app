import Navbar from "../_components/navbar"

export default function NavLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <Navbar />
        {children}
    </section>
  )
}