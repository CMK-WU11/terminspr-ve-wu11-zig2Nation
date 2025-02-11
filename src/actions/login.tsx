"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Login(prevState: any, formData: FormData) {
    const identifier = formData.get("identifier") as string | null;
    const password = formData.get("password") as string | null;
    console.log(identifier, password);
    
    if (!identifier || !password) {
        return {
            formData: { identifier, password },
            error: "Begge felter skal udfyldes",
        };
    }
    try {
        const response = await fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: identifier, password }),
        });

        if (!response.ok) {
            return {
                formData: { identifier, password },
                error: "Forkert brugernavn eller adgangskode",
            };
        }

        const data = await response.json();
        console.log(data, "hallo so");
        

        const cookieStore = await cookies();
        cookieStore.set("repe_token", data.token, { maxAge: 60 * 60 * 24 });

    } catch (err) {
        throw new Error(err instanceof Error ? err.message : "Der skete en fejl under login");
    }

    redirect("/kalender");
}
