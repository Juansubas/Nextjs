import Users from "@/components/Users"

export const metadata = {
    title: 'Mi pagina especial Home'
}

export default function HomePage() {
    //Server component
    return <section>
        {/* Client Component */}
        <h1>Hello World</h1>
        <Users/>
    </section>
}