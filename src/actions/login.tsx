"use server";
//detter er kode fra uge 6 med repeat jeg genbruger
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function Login(prevState: any, formData: FormData) {
    const identifier = formData.get("identifier") as string | null;
    const password = formData.get("password") as string | null;

    if (!identifier || !password) {
        return {
            formData: { identifier, password },
            error: "Begge felter skal udfyldes",
        };
    }

    const schema = z.object({
        identifier: z.string().min(1, { message: "Du skal udfylde en email" }).email({ message: "Ugyldig email" }),
        password: z.string().min(1, { message: "Du skal udfylde din adgangskode" }),
    });

    const validate = schema.safeParse({ identifier, password });

    if (!validate.success) {
        return {
            formData: { identifier, password },
            errors: validate.error.format(),
        };
    }

    try {
        const response = await fetch("http://localhost:4000/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier, password }),
        });

        if (!response.ok) {
            return {
                formData: { identifier, password },
                error: "Forkert email eller adgangskode",
            };
        }

        const data = await response.json();

        const cookieStore = await cookies();
        cookieStore.set("repe_token", data.jwt, { maxAge: 60 * 60 * 24 });
        cookieStore.set("repe_uid", data.user.id, { maxAge: 60 * 60 * 24 });

    } catch (err) {
        
    }

    redirect("/");
}
