import { auth } from "@/auth"

export default async function dashboard() {
    const session = await auth()
    if (!session) return <div>Not Authenticated, please login from the main page</div>

    return <div>This is the dashboard, Hello {session.user?.email}!</div>
}