"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Login(prevState: any, formData: FormData) {

    const identifier = formData.get("identifier") as string | null;
    const password = formData.get("password") as string | null;
    const rememberMe = formData.get("loggedin") === "on" ? "o" : null

    // til begge felter skal udfyldes
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

        //hvis der er noget fejl
        if (!response.ok) {
            return {
                formData: { identifier, password },
                error: "Forkert brugernavn eller adgangskode",
            };
        }

        const data = await response.json();
        const cookieStore = await cookies();

        const cookieMaxAge = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24
        cookieStore.set("repe_token", data.token, {maxAge: cookieMaxAge})
        cookieStore.set("role", data.role, { maxAge: cookieMaxAge })
        cookieStore.set("id", data.userId, { maxAge: cookieMaxAge });

        


    } catch (err) {
        throw new Error(err instanceof Error ? err.message : "Der skete en fejl under login");
    }

    
    redirect("/kalender");

}
 