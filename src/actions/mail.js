import { z } from "zod"

function mailValider(formdata) {
    const schema = z.object({
        name: z.string().min(1, {
            message: "Du skal skrive et navn"
        }),
        email: z.string().min(1, {
            message: "Skriv din email"
        }).email({
            message: "Email er ikke gyldig"
        }),
        message: z.string().min(1, {
            message: "Du skal skrive din besked"
        }),
    })

    const validator = schema.safeParse({
        name: formdata.get("name"),
        email: formdata.get("email"),
        message: formdata.get("message"),
    })


    if (!validator.success) {
        return {
            success: validator.success,
            errors: validator.error.flatten().fieldErrors,
        }
    }
    else return { success: validator.success, }
}

export function sendMail(prevState, formdata) {
    mailValider(formdata)

    if (!mailValider(formdata).success) {
        return mailValider(formdata)
    }
    else {
        return { success: "Jaaaaaah" }
    }
}