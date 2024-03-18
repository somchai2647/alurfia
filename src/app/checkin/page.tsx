"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "@/utils/api";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import type { Customer } from "@/interfaces/customer.interface";

type CheckInForm = {
  name: string;
};

export default function CheckIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckInForm>();

  const onSubmit: SubmitHandler<CheckInForm> = async (data) => {
    try {
      setIsLoading(true);
      const res: Customer = await api.createCheckIn(data.name.toLowerCase());
      localStorage.setItem("customer", JSON.stringify(res));

      await Swal.fire({
        title: "แจ้งเตือน",
        text: "Check In Success!",
        icon: "success",
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError);

      const errorMessage =
        //@ts-ignore
        axiosError.response?.data?.message ||
        axiosError.message ||
        "An unexpected error occurred";
      await Swal.fire({
        title: "แจ้งเตือน",
        text: errorMessage,
        icon: "warning",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-12 mt-4 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-xl font-medium text-black">Check In</h3>
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              isLoading
                ? "bg-gray-500"
                : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            }`}
          >
            {isLoading ? "Loading..." : "Check In"}
          </button>
        </form>
      </div>
    </div>
  );
}
