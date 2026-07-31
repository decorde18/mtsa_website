import * as React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wraps a single form control with a label and consistent error display.
 * Pairs with react-hook-form + zodResolver: pass `error={errors.field?.message}`.
 *
 * Example:
 *   <FormField label="Email" htmlFor="email" error={errors.email?.message}>
 *     <Input id="email" type="email" {...register("email")} error={!!errors.email} />
 *   </FormField>
 */
export function FormField({ label, htmlFor, error, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
