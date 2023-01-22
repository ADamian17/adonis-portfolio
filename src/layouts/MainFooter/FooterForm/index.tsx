import React, { useState } from 'react'

import styles from "./FooterFrom.module.scss";

const FooterFrom: React.FC = (props) => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formkeep.com/f/8e6292454fc8", {
        method: "POST",
        headers: {
          'Content-Type': "multipart/form-data"
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email
        })
      })

      setEmail("")
      setFirstName("")
      setLastName("")
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      acceptCharset="UTF-8"
      className={styles.footerForm}
    >
      <div className={styles.footerFormRow}>
        <input
          className={styles.footerFormInput}
          type="text"
          name="first_name"
          id="firstName"
          placeholder="First name" />

        <input
          className={styles.footerFormInput}
          type="text"
          name="last_name"
          id="lastName"
          placeholder="Last name" />
      </div>

      <div className={styles.footerFormRow}>
        <input
          className={styles.footerFormInput}
          type="email"
          name="email"
          id="email"
          placeholder="Email" />
      </div>

      <textarea
        className={styles.footerFormTextArea}
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="message"
      >
      </textarea>

      <input
        className={styles.footerFormTextArea}
        type="submit"
        value="let's connect"
      />
    </form>
  )
}

export default FooterFrom