import { z } from "zod";

const formSchema = z.object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string()
      .min(1, { message: "Email is required" })
      .max(255, { message: "Email must not exceed 255 characters" })
      .email({ message: "Invalid email address" })
      .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, {
        message: "Email must not contain leading or trailing spaces",
      })
      .refine((email) => {
        const [local, domain] = email.split('@');
        return local.length >= 1 && domain.includes('.');
      }, {
        message: "Invalid email format",
      }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }).max(256, {
      message: "Password must not exceed 256 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }).max(256, {
      message: "Password must not exceed 256 characters.",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export default formSchema;  