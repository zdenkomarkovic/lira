"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Mail } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});
export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  return (
    <div className="">
      <div className="container mx-auto pt-28 pb-16 px-4 md:px-8 md:py-32 space-y-12 md:space-y-24">
        <h1 className="text-2xl md:text-5xl pl-2 md:px-32">
          Institut Lira Doo Niš - zaštita na radu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="">
            <div className=" md:space-y-4 text-sm md:text-xl">
              <a
                href="tel:+38162480690"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaPhone className="text-[20px] lg:text-[30px]" />
                  +381 62 480 690
                </button>
              </a>
              <a
                href="tel:+38118525018,"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaFax className="text-[20px] lg:text-[30px]" />
                  018/525-018,
                </button>
              </a>
              <a
                href="viber://chat?number=%2B38162480690"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaViber className="text-[28px] lg:text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                  +381 62 480 690
                </button>
              </a>

              <a
                href="mailto:institutlira@gmail.com"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <Mail className=" w-[28px] h-[28px]" /> institutlira@gmail.com{" "}
                  <span className="text-primary">Sediste Nis</span>
                </button>
              </a>
              <a
                href="mailto:institutlirabeograd@gmail.com"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <Mail className=" min-w-[28px] min-h-[28px]" />{" "}
                  institutlirabeograd@gmail.com{" "}
                  <span className="text-primary">Ogranak Beograd</span>
                </button>
              </a>
              <a
                href="mailto:institutliranovisad@gmail.com"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <Mail className=" min-w-[28px] min-h-[28px]" />{" "}
                  institutliranovisad@gmail.com{" "}
                  <span className="text-primary">Ogranak Novi Sad</span>
                </button>
              </a>
              <a
                href="https://www.instagram.com/institutlira/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-[7px] flex border-b-[1px] border-primary "
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  {" "}
                  <FaInstagram className=" text-[28px] lg:text-[30px]" />
                  institutlira
                </button>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064303204165&locale=sr_RS"
                target="_blank"
                rel="noopener noreferrer"
                className="py-[7px] flex border-b-[1px] border-primary "
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center text-left">
                  {" "}
                  <Facebook className=" w-[50px] h-[40px]" />
                  Privredno drustvo za bezbednost i zdravlje na radu Institut
                  Lira Doo Nis
                </button>
              </a>
            </div>
          </div>
          <div className="mx-2 md:mx-20 ">
            <Form {...form}>
              <form
                className="grid grid-cols-3 items-center p-4 lg:p-10 shadow-xl shadow-primary"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Ime i Prezime:
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Unesite ime i prezime"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Broj telefona:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Unesite vas broj telefona"
                            {...field}
                          />
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
                        <FormLabel className="lg:text-xl">Email:</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl  ">
                          Vasa poruka:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Vasa poruka za nas"
                            className="text-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isLoading}
                    className="bg-primary  hover:bg-gray-600 transition-colors ease-in-out duration-500"
                  >
                    {isLoading ? "Sending....." : "Send"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19527.525177149557!2d21.894500147026278!3d43.318781234345785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0b7878ded13%3A0x824108bdd2e13766!2sTodora%20Milovanovic%CC%81a%209%2C%20Ni%C5%A1%2018000!5e0!3m2!1sen!2srs!4v1745255514453!5m2!1sen!2srs"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
