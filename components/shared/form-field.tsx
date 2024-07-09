"use client";

import React, { ReactNode } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { Label } from "../ui";
import { cn } from "@/lib/utils";

type renderArgs = {
  error?: boolean;
  field?: ControllerRenderProps<FieldValues, string>;
};

type FormFieldProps = {
  name: string;
  label?: string;
  required?: boolean;
  render: (args: renderArgs) => ReactNode;
};

export const FormField = (props: FormFieldProps) => {
  const { name, render, label, required } = props;

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error, invalid } }) => (
        <div className="grid gap-2">
          {label && (
            <Label
              htmlFor={field.name}
              className={cn(invalid && "text-red-500")}
            >
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
          )}
          {render({ error: invalid, field })}
          {error && (
            <p className="text-sm font-semibold text-red-400">
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};
