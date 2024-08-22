/* eslint-disable react-hooks/rules-of-hooks */
"use client";
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
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loginAsync, getAuthSelector } from "@/redux/slice/auth";

const EmailFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    pin: z.string().length(6, { message: "Must be exactly 6 characters long" }),
});

const NumberFormSchema = z.object({
    number: z
        .string()
        .length(10, { message: "Must be exactly 10 characters long" }),
    pin: z.string().length(6, { message: "Must be exactly 6 characters long" }),
});

export default function login() {
    const router = useRouter();
    const { toast } = useToast();
    const auth = useSelector(getAuthSelector);
    const dispatch = useDispatch<AppDispatch>();

    const emailForm = useForm<z.infer<typeof EmailFormSchema>>({
        resolver: zodResolver(EmailFormSchema),
        defaultValues: {
            email: "",
            pin: "",
        },
    });

    function onEmailSubmit(data: z.infer<typeof EmailFormSchema>) {
        dispatch(loginAsync(data))
            .unwrap()
            .then((response) => {
                toast({
                    description: "You are loged in.",
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

    const numberForm = useForm<z.infer<typeof NumberFormSchema>>({
        resolver: zodResolver(NumberFormSchema),
        defaultValues: {
            number: "",
            pin: "",
        },
    });

    function onNumberSubmit(data: z.infer<typeof NumberFormSchema>) {
        dispatch(
            loginAsync({
                number: `+91${data.number}`,
                pin: data.pin,
            })
        )
            .unwrap()
            .then((response) => {
                toast({
                    description: "You are loged in.",
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
            <div className="flex flex-col justify-center h-screen px-10">
                <h1 className="text-5xl font-bold text-center">
                    Welcome back!
                </h1>
                <div className="text-lg text-center pt-2 opacity-50">
                    Please enter your credentials to access you account
                </div>
                <Tabs
                    defaultValue="email"
                    className="flex flex-col items-center pt-6"
                >
                    <TabsList className="w-fit">
                        <TabsTrigger value="email">Using Email</TabsTrigger>
                        <TabsTrigger value="number">Using Number</TabsTrigger>
                    </TabsList>
                    <TabsContent value="email">
                        <div className="p-2">
                            <Form {...emailForm}>
                                <form
                                    onSubmit={emailForm.handleSubmit(
                                        onEmailSubmit
                                    )} //
                                    className=""
                                >
                                    <FormField
                                        control={emailForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="pt-4">
                                                <FormLabel>Email*</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="emailOrNumber"
                                                        placeholder="Email"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={emailForm.control}
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
                    </TabsContent>
                    <TabsContent value="number">
                        <div className="p-2">
                            <Form {...numberForm}>
                                <form
                                    onSubmit={numberForm.handleSubmit(
                                        onNumberSubmit
                                    )} //
                                    className=""
                                >
                                    <FormField
                                        control={numberForm.control}
                                        name="number"
                                        render={({ field }) => (
                                            <FormItem className="pt-4">
                                                <FormLabel>Number*</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="emailOrNumber"
                                                        placeholder="Number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={numberForm.control}
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
                    </TabsContent>
                </Tabs>
                <div className="flex justify-center">
                    <div className="opacity-50 mr-2">
                        Already have an account?
                    </div>
                    <a
                        href="/signUp"
                        className="font-semibold hover:underline hover:cursor-pointer"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
            <div className="hidden md:block h-screen ">
                <Image
                    src="/img/signUp-cover.jpeg"
                    className="h-screen w-full object-cover p-4 rounded-3xl"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
}
