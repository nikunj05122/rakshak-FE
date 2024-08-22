/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { z } from "zod";
import Image from "next/image";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { signUpAsync, getAuthSelector } from "@/redux/slice/auth";
import { useDispatch, useSelector } from "react-redux";

const FormSchema = z.object({
    firstName: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    lastName: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    number: z
        .string()
        .length(10, { message: "Must be exactly 10 characters long" }),
    pin: z.string().length(6, { message: "Must be exactly 6 characters long" }),
    pinConfirm: z
        .string()
        .length(6, { message: "Must be exactly 6 characters long" }),
});

export default function signUp() {
    const router = useRouter();
    const { toast } = useToast();
    const auth = useSelector(getAuthSelector);
    const dispatch = useDispatch<AppDispatch>();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            pin: "",
            pinConfirm: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        dispatch(
            signUpAsync({
                ...data,
                number: `+91${data.number}`,
            })
        )
            .unwrap()
            .then((response) => {
                toast({
                    description: "You are signup in.",
                });
                router.push("/dashboard");
            })
            .catch((error) => {
                toast({
                    variant: "destructive",
                    title: "Unauthorized user.",
                    description: "Please provide right credentials.",
                });
            });
    }
    return (
        <div className="grid md:grid-cols-2 md:divide-x min-h-screen w-full bg-muted/40 primary-color">
            <div className="hidden md:block h-screen ">
                <Image
                    src="/img/signUp-cover.jpeg"
                    className="h-screen w-full object-cover p-4 rounded-3xl"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div className="flex flex-col justify-center h-screen px-10 ">
                <h1 className="text-5xl font-bold text-center">
                    Create Account,
                </h1>
                <div className="text-lg text-center pt-2 opacity-50">
                    Sign up to get started!
                </div>
                <div className="p-2">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)} //
                            className=""
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="pt-4">
                                            <FormLabel>First Name*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="First Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="pt-4">
                                            <FormLabel>Last Name*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Last Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="pt-4">
                                        <FormLabel>Email*</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem className="pt-4">
                                        <FormLabel>Number*</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-wrap justify-around">
                                <FormField
                                    control={form.control}
                                    name="pin"
                                    render={({ field }) => (
                                        <FormItem className="pt-4">
                                            <FormLabel>Pin*</FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    id="pin"
                                                    {...field}
                                                >
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={0}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={1}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={2}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={3}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={4}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={5}
                                                        />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="pinConfirm"
                                    render={({ field }) => (
                                        <FormItem className="pt-4">
                                            <FormLabel>Confirm Pin*</FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    id="pinConfirm"
                                                    {...field}
                                                >
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={0}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={1}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={2}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={3}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={4}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={5}
                                                        />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex justify-center pt-6">
                                <Button
                                    type="submit"
                                    className="outline w-96 rounded-full hover:bg-white hover:outline-slate-950 hover:text-slate-950"
                                    disabled={auth.isLoading}
                                >
                                    {auth.isLoading && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
                <div className="flex justify-center">
                    <div className="opacity-50 mr-2">
                        Already have an account?
                    </div>
                    <a
                        href="/login"
                        className="font-semibold hover:underline hover:cursor-pointer"
                    >
                        Sign in
                    </a>
                </div>
            </div>
        </div>
    );
}
