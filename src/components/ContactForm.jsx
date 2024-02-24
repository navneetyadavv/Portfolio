import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";
import { IoClose } from "react-icons/io5";

export default function ContactForm({ isVisible, onClose, isFormVisible }) {
  console.log("isVisible:", isVisible);
  //   console.log("close:", onclose);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    //storing form data

    // Clear the form after submission
    setValue("query", "");
    setValue("otherField", "");
  };

  return (
    <div
      className={`${styles.formContainer} ${
        isFormVisible ? styles.visible : styles.formContainer
      }`}
    >
      <div className={styles.headerOfForm}>
        <div className={styles.headerCross} onClick={onClose}>
          <IoClose></IoClose>
        </div>
      </div>
      <div className={styles.innerFormContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>Your Good Name:</label>
          <input {...register("name")} />
          <label className={styles.label}>Email:</label>
          <input {...register("email")} />
          <label className={styles.label}>Your Message:</label>
          <textarea {...register("message")} />
          <button className={styles.submitBtn}>Send</button>
        </form>
      </div>
    </div>
  );
}
