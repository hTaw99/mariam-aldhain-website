import { motion } from "framer-motion";

export default function CustomInput({
  id,
  type,
  label,
  register,
  errors,
  isHome,
}) {
  return (
    <motion.div
      layout="position"
      className={`${
        type === "textarea" ? "col-span-2" : "col-auto"
      } flex flex-col gap-2`}
    >
      {/* <label className="font-semibold" htmlFor={id}>
    {label}
  </label> */}
      {type === "textarea" ? (
        <textarea
          {...register(id, {
            required: `من فضلك ادخل ${label}`,
          })}
          rows={6}
          placeholder={label}
          id={id}
          className={`${
            isHome ? "bg-gold-450 border-gold-350 " : ""
          }  outline-0 rounded-md p-4 border bg-transparent placeholder:font-semibold border-gray-300 `}
          type={type}
        />
      ) : (
        <input
          {...register(id, {
            required: `من فضلك ادخل ${label}`,
          })}
          placeholder={label}
          id={id}
          className={`${
            isHome ? " bg-gold-450 border-gold-350 " : ""
          }  outline-0 rounded-md p-4 border bg-transparent placeholder:font-semibold border-gray-300`}
          type={type}
        />
      )}
      {errors?.[id]?.message && (
        <motion.span
          layout="position"
          initial={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500"
        >
          {errors?.[id]?.message}
        </motion.span>
      )}
    </motion.div>
  );
}
