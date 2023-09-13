"use client";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import CustomInput from "../CustomInput";
import { motion } from "framer-motion";

export default function Form({ isHome }) {
  const inputs = [
    {
      label: "الإسم",
      id: "name",
      type: "text",
    },
    {
      label: "رقم الجوال",
      id: "phoneNumber",
      type: "number",
    },
    {
      label: "البريد الإلكتروني",
      id: "email",
      type: "email",
    },
    {
      label: "عنوان المقترح",
      id: "title",
      type: "text",
    },

    {
      label: "الشكوى او المقترح",
      id: "complain",
      type: "textarea",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  useFormPersist("complainForm", { watch, setValue });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 mb-4">
        {inputs.map((input) => (
          <CustomInput
            isHome={isHome}
            key={input.id}
            register={register}
            errors={errors}
            {...input}
          />
        ))}
      </div>
      <motion.button
        layout="position"
        className="px-6 py-2 bg-red-500 text-white rounded-md"
        type="submit"
      >
        إرسال
      </motion.button>
    </form>
  );
}
