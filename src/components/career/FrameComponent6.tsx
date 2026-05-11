import { FunctionComponent, useState } from "react";
import styles from "./FrameComponent6.module.css";
import { CONFIG } from "../../config/api";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("name", `${form.firstName} ${form.lastName}`);
    formData.append("email", form.email);
    formData.append("message", form.message);

    if (file) {
      formData.append("file", file);
    }

    try {
      const res = await fetch(`${CONFIG.BASE_URL}/send-email-with-file`, {
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
  // const handleSubmit = async () => {
  //   if (!form.firstName || !form.email || !form.message) {
  //     alert("Please fill required fields");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const res = await fetch("http://localhost:5000/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: `${form.firstName} ${form.lastName}`,
  //         email: form.email,
  //         message: form.message,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       alert("Email sent successfully ✅");

  //       // reset form
  //       setForm({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         message: "",
  //       });
  //     } else {
  //       alert("Failed to send email ❌");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <main className={[styles.careerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src="/tasfia.png" />
          <div className={styles.frameItem} />
          <div className={styles.iveReallyEnjoyed}>
            I’ve really enjoyed my time at STL. The team is welcoming, the
            environment is positive, and there’s always someone willing to help.
            I feel valued, heard, and supported in my role. There’s also plenty
            of room to learn new skills and grow professionally. Overall, it’s a
            great workplace with great people.
          </div>
          <div className={styles.shaylaAhmedParent}>
            <div className={styles.shaylaAhmed}>Shayla Ahmed</div>
            <div className={styles.softwareDeveloper}>Software Developer</div>
          </div>
        </div>
        <section className={styles.contactForm}>
          <div className={styles.contactDetails}>
            <h1 className={styles.header}>Didn’t Find Your Ideal Role?</h1>
            <div className={styles.header2}>
              We’d still love to hear from you. Share your details and we’ll
              reach out when a matching opportunity opens.
            </div>
          </div>
          <div className={styles.formContent}>
            <div className={styles.inputDetailsParent}>
              <div className={styles.inputDetails}>
                <div className={styles.firstName}>First Name</div>
                <div className={styles.firstName}>Last Name</div>
              </div>
              <div className={styles.nameInputParent}>
                <input
                  className={styles.nameInput}
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  className={styles.nameInput}
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className={styles.emailParent}>
              <div className={styles.firstName}>Email</div>
              <input
                className={styles.frameInner}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.messageParent}>
              <div className={styles.firstName}>Message</div>
              {/* <div className={styles.rectangleDiv} /> */}
              <textarea
                className={styles.frameInner2}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={3}
              />
            </div>
            <div className={styles.uploadResumeCvParent}>
              <div className={styles.firstName}>Upload Resume / CV</div>
              <div className={styles.parent}>
                <label
                  className={styles.label}
                  htmlFor="file-loco-0106-s2-12937:334"
                >
                  <div className={styles.upload}>Upload</div>
                  <div className={styles.frameChild2} />
                </label>
                <input
                  className={styles.input}
                  type="file"
                  id="file-loco-0106-s2-12937:334"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </div>
              <div className={styles.pdfOrDoc}>PDF or DOC up to 5MB</div>
            </div>
          </div>
          <button
            className={styles.rectangleGroup}
            disabled={loading}
            onClick={() => handleSubmit()}
          >
            <div className={styles.frameChild3} />
            <div className={styles.submit}>Submit</div>
          </button>
          <img className={styles.frameChild} alt="" src="/Rectangle255.png" />
        </section>
      </div>
    </main>
  );
};

export default FrameComponent6;
