"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/img/logo.png";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: e.target.username.value,
        password: e.target.password.value,
        callbackUrl: "/admin",
      });
      if (!res?.error) {
        push("/admin");
        setLoading(false);
      } else {
        setLoading(false);
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 h-[100vh]">
        <div className="flex h-full flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="mb-5 flex gap-2 items-center ">
            <div className={`transition-all duration-20 delay-100 w-8`}>
              <Image src={logo} alt="Logo Desa Matako" />
            </div>
            <div
              className={`w-[1px] bg-gray-500 transition-all duration-20 delay-100 h-8`}
            ></div>
            <div className="-mt-1">
              <h1
                className={`font-bold text-gray-700 transition-all duration-20 delay-100 text-lg`}
              >
                Desa Matako
              </h1>
              <p
                className={`text-gray-600 font-semibold transition-all duration-20 delay-100 text-xs`}
              >
                Kec.Tojo Barat, Kab. Tojo Una-Una
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl dark:text-white">
                Login Admin
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => handleLogin(e)}
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? (
                    <div className="flex gap-2 items-center justify-center">
                      <div className="animate-spin h-5 w-5 bg-transparent border-[4px] rounded-full border-slate-400 border-l-slate-100"></div>
                      <div>Loading...</div>
                    </div>
                  ) : (
                    <div>Login admin</div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
