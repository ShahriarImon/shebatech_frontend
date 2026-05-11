import { FunctionComponent, useState } from "react";
import styles from "./UserForm.module.css";
import { CONFIG } from "../../config/api";

export type UserFormType = {
  className?: string;
  title?: string;
  subtitlePart1?: string;
  subtitlePart2?: string;
  isHrms?: boolean;
};

const UserForm: FunctionComponent<UserFormType> = ({
  className = "",
  title = "Get the HRMS Solution",
  subtitlePart1 = "Streamline your HR operations with our all-in-one HRMS.",
  subtitlePart2 = "Fill out the form below and our team will contact you shortly.",
  isHrms = false,
}) => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    companySize: "1-20",
    message: "",
  });
  console.log("form", form);
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("name", `${form.fullName}`);
    if (isHrms) {
      formData.append("companyName", `${form.companyName}`);
      formData.append("companySize", `${form.companySize}`);
    }
    formData.append("phoneNumber", `${form.phoneNumber}`);

    try {
      const res = await fetch(`${CONFIG.BASE_URL}/send-email-hrms`, {
        method: "POST",
        body: formData, // ❗ no JSON, no headers
      });

      const data = await res.json();

      if (data.success) {
        alert("Email sent successfully ✅");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className={[styles.userForm, className].join(" ")}>
      <div className={styles.detailForms}>
        <section className={styles.contentArea}>
          <div className={styles.reviewContainer}>
            <img
              className={styles.reviewBackground}
              loading="lazy"
              alt=""
              src="/Background@2x.png"
            />
            <div className={styles.reviewOverlay} />
            <div className={styles.reviewContent}>
              <blockquote className={styles.reviewText}>
                "I’ve really enjoyed my time at STL. The team is welcoming, the
                environment is positive, and there’s always someone willing to
                help. I feel valued, heard, and supported in my role. There’s
                also plenty of room to learn new skills and grow professionally.
                Overall, it’s a great workplace with great people."
              </blockquote>
              <div className={styles.reviewerInfo}>
                <div className={styles.reviewerName}>Shayla Ahmed</div>
                <div className={styles.reviewerRole}>Software Developer</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactForm}>
          <div className={styles.formHeader}>
            <h1 className={styles.header}>{title}</h1>
            <p className={styles.header2}>
              {subtitlePart1}
              <br />
              {subtitlePart2}
            </p>
          </div>
          <form className={styles.formFields} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputRow}>
              <div className={styles.fieldGroup}>
                <div className={styles.fieldItem}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    className={styles.input}
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldItem}>
                  <label htmlFor="companyName" className={styles.label}>
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    className={styles.input}
                    type="text"
                    placeholder="Company Name"
                    value={form.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.fieldItem}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.fieldItem}>
                  <label htmlFor="phoneNumber" className={styles.label}>
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    className={styles.input}
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                {isHrms && (
                  <div className={styles.fieldItem}>
                    <label htmlFor="companySize" className={styles.label}>
                      Company Size
                    </label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="companySize"
                        name="companySize"
                        className={styles.select}
                        value={form.companySize}
                        onChange={handleChange}
                      >
                        <option value="1-20">1–20 Employees</option>
                        <option value="21-50">21–50 Employees</option>
                        <option value="51-200">51–200 Employees</option>
                        <option value="201+">201+ Employees</option>
                      </select>
                      <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/angle-small-right-2@2x.png"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.fieldItem}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default UserForm;
