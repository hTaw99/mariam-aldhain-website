"use client";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

export default function Form({ isHome }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  useFormPersist("complainForm", { watch, setValue });
  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className=" flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 mb-4">
        <motion.div layout="position" className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            الإسم
          </label>
          <input
            {...register("name", { required: "من فضلك ادخل الإسم" })}
            id="name"
            className={`${
              isHome
                ? "bg-gold-450 border-gold-350 "
                : "bg-gray-50  border-gray-200"
            }  outline-0 rounded-md p-1 border `}
            type="text"
          />
          {errors?.name?.message && (
            <motion.span
              layout="position"
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors?.name?.message}
            </motion.span>
          )}
        </motion.div>
        <motion.div layout="position" className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            رقم الجوال
          </label>
          <input
            {...register("phoneNumber", {
              required: "من فضلك ادخل رقم الجوال",
            })}
            id="name"
            className={`${
              isHome
                ? "bg-gold-450 border-gold-350 "
                : "bg-gray-50  border-gray-200"
            }  outline-0 rounded-md p-1 border `}
            type="phone"
          />
          {errors?.phoneNumber?.message && (
            <motion.span
              layout="position"
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors?.phoneNumber?.message}
            </motion.span>
          )}
        </motion.div>
        <motion.div layout="position" className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            البريد الإلكتروني
          </label>
          <input
            {...register("email", {
              required: "من فضلك أدخل البريد الألكتروني",
            })}
            id="name"
            className={`${
              isHome
                ? "bg-gold-450 border-gold-350 "
                : "bg-gray-50  border-gray-200"
            }  outline-0 rounded-md p-1 border `}
            type="text"
          />
          {errors?.email?.message && (
            <motion.span
              layout="position"
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors?.email?.message}
            </motion.span>
          )}
        </motion.div>
        <motion.div layout="position" className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            عنوان المقترح
          </label>
          <input
            {...register("title", {
              required: "من فضلك أدخل عنوان للمقترح",
            })}
            id="name"
            className={`${
              isHome
                ? "bg-gold-450 border-gold-350 "
                : "bg-gray-50  border-gray-200"
            }  outline-0 rounded-md p-1 border `}
            type="text"
          />
          {errors?.title?.message && (
            <motion.span
              layout="position"
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors?.title?.message}
            </motion.span>
          )}
        </motion.div>
        <motion.div
          layout="position"
          className="flex col-span-2 flex-col gap-2"
        >
          <label className="font-semibold" htmlFor="name">
            الشكوى أو المقترح
          </label>
          <textarea
            rows="8"
            {...register("complain", {
              required: "من فضلك أدخل المقترح",
            })}
            id="name"
            className={`${
              isHome
                ? "bg-gold-450 border-gold-350 "
                : "bg-gray-50  border-gray-200"
            }  outline-0 rounded-md p-1 border `}
          />
          {errors?.complain?.message && (
            <motion.span
              layout="position"
              initial={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors?.complain?.message}
            </motion.span>
          )}
        </motion.div>
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
