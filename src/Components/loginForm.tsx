// dette er kode fra uge 6 med repeat 
import Login from "@/actions/login";
import { redirect } from "next/navigation";
import MultiKnap from "@/Components/multiKnap";
import { useActionState, useEffect } from "react";
import Splash from "../../public/splash-image.jpg"
import Image from "next/image";
export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(Login, null);

    useEffect(() => {
        console.log("formState", formState);
    }, [formState]);
    return(
        <>
        <div className="w-full bg-cover bg-center absolute">
            <Image src={Splash} alt="Splash billed" className="h-[100vh] object-cover"/>
        </div>
        <div className="flex items-center justify-center h-full w-full absolute top-0 left-0 overflow-hidden">
            <div className="aspect-[1/2] h-[70em] bg-[#5E2E53] opacity-50 rotate-[62deg]"></div>
        </div>
        <form action={formAction} noValidate className="relative flex items-center justify-center flex-col h-[100vh]">
            <section className="flex items-start justify-center gap-5 flex-col w-[20em]">
            <h1 className="text-[#EAEAEA] text-5xl text-start">Log ind</h1>
            <div className="w-full">
                <label>
                    <input
                        defaultValue={formState?.formData?.identifier ?? ""}
                        placeholder="brugernavn"
                        type="bruger"
                        name="identifier"
                        className="border h-10 p-3 w-full bg-[#EAEAEA]"
                    />
                </label>
                <span className="text-red-500">{formState?.errors?.identifier?._errors[0]}</span>
            </div>

            <div className="w-full">
                <label>
                    <input
                        defaultValue={formState?.formData?.password ?? ""}
                        placeholder="adganskode"
                        type="password"
                        name="password"
                        className="border h-10 p-3 w-full bg-[#EAEAEA]"
                    />
                </label>
                <span className="text-red-500">{formState?.errors?.password?._errors[0]}</span>
            </div>

            <span className="text-red-600">{formState?.error}</span>
                <div className="w-full flex items-center justify-center">

                    <button disabled={isPending} type="submit" className="p-2 bg-blue-600 disabled:bg-gray-600">
                        {isPending ? "Logger ind..." : "Log ind"}
                     </button>

                </div>
            </section>
        </form>
        </>
    )
}