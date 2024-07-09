"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@/components/icons";
import { FormField } from "@/components/shared";
import { Button, Input } from "@/components/ui";
import { LoginDto, LoginSchema } from "@/dto";
import { useLoginMutation } from "@/service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

export function LoginPage() {
  const { replace } = useRouter();
  const { mutate, isPending } = useLoginMutation();

  const methods = useForm<LoginDto>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (credentials: LoginDto) =>
    mutate(credentials, { onSuccess: () => replace("/project") });

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Se Connecter</h1>
          <p className="text-balance text-muted-foreground">
            Entrez votre adresse e-mail ci-dessous pour vous connecter à votre
            compte.
          </p>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)} className="grid gap-4">
            <FormField
              required
              name="email"
              label="Email"
              render={({ field, ...rest }) => (
                <Input {...field} {...rest} placeholder="m@example.com" />
              )}
            />
            <FormField
              required
              name="password"
              label="Mot de passe"
              render={({ field, ...rest }) => (
                <Input {...field} {...rest} type="password" />
              )}
            />
            <Button disabled={!methods.formState.isValid || isPending}>
              {isPending && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Se Connecter
            </Button>
            <Button type="button" variant="outline" className="w-full">
              Se Connecter avec Google
            </Button>
          </form>
        </FormProvider>
        <div className="mt-4 items-center text-sm flex flex-col">
          <Link href="/forgot-password" className="underline">
            Forgot your password?
          </Link>
          <p>
            Vous n&apos;avais pas de compte?{" "}
            <Link href="/sign-up" className="underline">
              S&apos;inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
