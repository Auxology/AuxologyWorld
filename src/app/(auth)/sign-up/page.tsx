"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import Link from "next/link"
import { Eye, EyeClosed } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import formSchema from "@/lib/client/formValidation"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <main className="bg-background min-h-screen flex items-center justify-center">
      <div className="bg-formBackground/10 p-8 rounded-2xl shadow-lg shadow-background min-h-[700px] w-[500px] flex flex-col items-center justify-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-headline">Sign Up</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-paragraph">Create an account to start your journey.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-8 flex flex-col space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-paragraph">Username</FormLabel>
                  <FormControl>
                    <Input className="border-none bg-input text-paragraph" placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-paragraph">Email</FormLabel>
                  <FormControl>
                    <Input className="border-none bg-input text-paragraph" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-paragraph">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        className="border-none bg-input pr-10 text-paragraph" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Create password" 
                        {...field} 
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-paragraph hover:text-paragraph/80"
                      >
                        {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-paragraph">Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        className="border-none bg-input pr-10 text-paragraph" 
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="Confirm password" 
                        {...field} 
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-paragraph hover:text-paragraph/80"
                      >
                        {showConfirmPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-button w-full py-3 rounded-lg text-buttonText hover:bg-button/80">
              Sign Up
            </Button>

            <div className="flex justify-center w-fit mx-auto">
              <Link href="/sign-in" className="text-paragraph hover:text-paragraph/10">
                Already have an account?
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </main>
  )
}