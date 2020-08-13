import React, { useState } from "react"

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSumbit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSumbit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="email" onChange={handleChange} />
      <textarea name="message" onChange={handleChange}></textarea>
      <input type="button" value="Send" />
    </form>
  )
}

export default ContactUs
