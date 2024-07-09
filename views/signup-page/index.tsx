"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@web/components/icons";
import { FormField } from "@web/components/shared";
import { Button, Input } from "@web/components/ui";
import { SignUpDto, SignUpSchema } from "@web/dto";
import { useSignUpMutation } from "@web/service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

export function SignUp() {
  const { replace } = useRouter();
  const { mutate, isPending } = useSignUpMutation();

  const methods = useForm<SignUpDto>({
    mode: "onBlur",
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      name: "",
      password: "",
    },
  });

  const submit = (user: SignUpDto) =>
    mutate(user, { onSuccess: () => replace("/") });

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">S&apos;inscrire</h1>
          <p className="text-balance text-muted-foreground">
            Entrez votre information ci-dessous pour vous s&apos;inscrire
          </p>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)} className="grid gap-4">
            <FormField
              required
              name="name"
              label="Nom Complet"
              render={({ field, ...rest }) => (
                <Input {...field} {...rest} placeholder="Jhonny Bouslime" />
              )}
            />
            <FormField
              required
              name="username"
              label="Username"
              render={({ field, ...rest }) => (
                <Input {...field} {...rest} placeholder="Username" />
              )}
            />
            <FormField
              required
              name="email"
              label="Email"
              render={({ field, ...rest }) => (
                <Input
                  {...field}
                  {...rest}
                  placeholder="m@example.com"
                  type="email"
                />
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
              S&apos;inscrire
            </Button>
          </form>
        </FormProvider>
        <div className="mt-4 items-center text-sm flex flex-col">
          <p>
            Vous êtes deja inscris?{" "}
            <Link href="/" className="underline">
              Se Connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
