import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google", { callbackUrl: 'https://localhost:3000/dashboard' })
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
    )
} 