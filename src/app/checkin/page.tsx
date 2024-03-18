"use client";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

export default function CheckIn({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-12 mt-4 rounded-lg">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl font-medium text-black">Check In</h3>
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-900 block mb-2 "
            >
              Name:
            </label>
            <input
              type="name"
              {...register("name", { required: true })}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder="Frame"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Check In
          </button>
        </form>
      </div>
    </div>
  );
}
