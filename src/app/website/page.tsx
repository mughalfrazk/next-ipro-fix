import Image from "next/image";
import IproLogo from "@/components/common/IproLogo";
import styles from "./page.module.css";

export default function WebsitePage() {
  return (
    <div className={styles.page}>
      {/* Announcement bar */}
      <div style={{ background: "#14202c", color: "#ffffff", textAlign: "center", padding: "10px 24px", fontSize: 14, fontWeight: 500 }}>
        <span>Free diagnosis on every device — walk-ins welcome, 7 days a week</span>
        <span style={{ color: "#7db9ef", fontWeight: 600, marginLeft: 10 }}>Find us →</span>
      </div>

      {/* Nav */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #eef2f6" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px" }}>
          <IproLogo variant="light" size={34} />
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#how-it-works" className={styles.navLink}>How it works</a>
            <a href="#reviews" className={styles.navLink}>Reviews</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="#contact" className={styles.navPhone}>+971 00 000 0000</a>
            <a href="#quote" className={styles.bookBtn}>Book a Repair</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "88px 32px 76px", textAlign: "center", background: "radial-gradient(ellipse 60% 70% at 50% 0%, #f0f7fe 0%, #ffffff 70%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eaf4fd", color: "#1a6fc0", fontSize: 14, fontWeight: 600, padding: "8px 16px", borderRadius: 999, marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#238be6", display: "inline-block" }}></span>
            <span>Same-day repairs available today</span>
          </div>
          <h1 style={{ fontSize: 62, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08, color: "#14202c", margin: "0 auto 22px", maxWidth: 820 }}>Fast, reliable phone &amp; device repairs</h1>
          <p style={{ fontSize: 20, lineHeight: 1.55, color: "#5a6774", maxWidth: 620, margin: "0 auto 36px" }}>Diagnosed free, quoted upfront, fixed by certified technicians — usually the same day. Genuine parts, warranty on every repair.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 36, flexWrap: "wrap" }}>
            <a href="#quote" className={styles.heroPrimary}>Get a Free Quote</a>
            <a href="#contact" className={styles.heroSecondary}>Book a Repair</a>
            <a href="#contact" className={styles.heroWhatsapp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4 h4 l2 5 -2.5 1.5 a11 11 0 0 0 5 5 L15 13 l5 2 v4 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2"></path></svg>
              <span>WhatsApp us</span>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, fontSize: 15, color: "#6b7885", fontWeight: 500, flexWrap: "wrap" }}>
            <span>Same-day repairs</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c3cdd6", display: "inline-block" }}></span>
            <span>Genuine parts</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c3cdd6", display: "inline-block" }}></span>
            <span>90-day warranty</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c3cdd6", display: "inline-block" }}></span>
            <span>4.9★ from 1,200+ reviews</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "76px 32px 84px", background: "#f7fafc", borderTop: "1px solid #eef2f6" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#238be6", marginBottom: 12 }}>Our services</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em", color: "#14202c", margin: "0 0 14px" }}>Whatever&apos;s broken, we fix it</h2>
            <p style={{ fontSize: 17, color: "#66727e", margin: 0 }}>iPhone, Android, tablets and laptops — hardware and software.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {/* Screen Replacement */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="3" width="10" height="18" rx="2"></rect><line x1="11" y1="18" x2="13" y2="18"></line></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Screen Replacement</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Cracked or dead displays swapped with genuine panels, most in under an hour.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>from AED 149</div>
            </div>
            {/* Battery Replacement */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="16" height="8" rx="2"></rect><line x1="21" y1="10" x2="21" y2="14"></line><line x1="7" y1="11" x2="7" y2="13"></line><line x1="11" y1="11" x2="11" y2="13"></line></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Battery Replacement</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Restore all-day battery life with a certified, health-tested replacement.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>from AED 129</div>
            </div>
            {/* Charging Port */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 L5 13 h6 l-1 9 8 -11 h-6 z"></path></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Charging Port</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Loose, dirty or dead ports cleaned or replaced so charging just works.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>from AED 99</div>
            </div>
            {/* Water Damage */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 C12 3 6.5 9.8 6.5 14 a5.5 5.5 0 0 0 11 0 C17.5 9.8 12 3 12 3 Z"></path></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Water Damage</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Ultrasonic cleaning and corrosion treatment to bring soaked devices back.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>from AED 199</div>
            </div>
            {/* Software & OS */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 8 4 12 8 16"></polyline><polyline points="16 8 20 12 16 16"></polyline><line x1="13.5" y1="6" x2="10.5" y2="18"></line></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Software &amp; OS Issues</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Boot loops, crashes, updates gone wrong — diagnosed and resolved.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>from AED 79</div>
            </div>
            {/* Data Recovery */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"></ellipse><path d="M5 6 v12 c0 1.7 3.1 3 7 3 s7 -1.3 7 -3 V6"></path><path d="M5 12 c0 1.7 3.1 3 7 3 s7 -1.3 7 -3"></path></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Data Recovery</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Photos, contacts and files rescued from damaged or dead devices.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>quoted free</div>
            </div>
            {/* Board-Level Repair */}
            <div className={styles.serviceCard}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="2" x2="9" y2="5"></line><line x1="15" y1="2" x2="15" y2="5"></line><line x1="9" y1="19" x2="9" y2="22"></line><line x1="15" y1="19" x2="15" y2="22"></line><line x1="2" y1="9" x2="5" y2="9"></line><line x1="2" y1="15" x2="5" y2="15"></line><line x1="19" y1="9" x2="22" y2="9"></line><line x1="19" y1="15" x2="22" y2="15"></line></svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 6 }}>Board-Level Repair</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#66727e", marginBottom: 12 }}>Microsoldering and chip-level fixes when others say it can&apos;t be saved.</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a6fc0" }}>quoted free</div>
            </div>
            {/* CTA card */}
            <div style={{ background: "#238be6", borderRadius: 14, padding: "26px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#ffffff", marginBottom: 6 }}>Not sure what&apos;s wrong?</div>
                <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#d4e8fb" }}>Bring it in — diagnosis is always free and takes about 15 minutes.</div>
              </div>
              <a href="#quote" className={styles.diagnosisLink}>
                <span>Free diagnosis</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: "84px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#238be6", marginBottom: 12 }}>How it works</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em", color: "#14202c", margin: 0 }}>From broken to fixed in four steps</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {[
              { n: "1", title: "Diagnose", body: "Drop off your device or message us. We diagnose the fault free of charge, usually within 15 minutes." },
              { n: "2", title: "Quote", body: "You get a fixed price upfront — parts, labour and warranty included. No work starts until you approve." },
              { n: "3", title: "Repair", body: "A certified technician repairs your device with genuine parts. Most jobs are done the same day." },
              { n: "4", title: "Collect", body: "We message you the moment it's ready. Every repair leaves with a 90-day warranty." },
            ].map((step) => (
              <div key={step.n} style={{ textAlign: "center", padding: "0 8px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#eaf4fd", border: "2px solid #b9dcf9", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 20, fontWeight: 800, color: "#1a6fc0" }}>{step.n}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#14202c", marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: "#66727e" }}>{step.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ padding: "84px 32px", background: "#f7fafc", borderTop: "1px solid #eef2f6", borderBottom: "1px solid #eef2f6" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#238be6", marginBottom: 12 }}>Why Ipro Fix</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#14202c", margin: "0 0 32px" }}>Repairs you can actually trust</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {[
                { title: "Certified technicians", body: "Trained, experienced specialists — not a kiosk with a screwdriver." },
                { title: "Genuine parts only", body: "Original or OEM-grade components — never cheap clones that fail in a month." },
                { title: "Transparent pricing", body: "Fixed quote before any work begins. The price we quote is the price you pay." },
                { title: "Fast turnaround", body: "Most screens and batteries done in under an hour, while you wait." },
                { title: "90-day warranty", body: "Every repair is covered. If anything we fixed fails, we make it right — free." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 12.5 10 17.5 19 7"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#14202c", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 15, lineHeight: 1.55, color: "#66727e" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ height: 520, borderRadius: 20, overflow: "hidden", position: "relative" }}>
              <Image
                src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Technician repairing a phone"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ position: "absolute", bottom: 28, left: 28, background: "#ffffff", borderRadius: 14, padding: "18px 22px", boxShadow: "0 10px 30px rgba(20,35,50,0.14)", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#238be6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 l7 3 v5 c0 4.5 -3 8.5 -7 10 c-4 -1.5 -7 -5.5 -7 -10 V6 z"></path><polyline points="9 12 11.5 14.5 15.5 9.5"></polyline></svg>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#14202c" }}>90-day warranty</div>
                <div style={{ fontSize: 13.5, color: "#66727e" }}>included with every repair</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: "60px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#8a97a4", marginBottom: 28 }}>We service all major brands</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
            {["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "OnePlus", "Oppo"].map((brand) => (
              <span key={brand} style={{ fontSize: 22, fontWeight: 700, color: "#aeb9c4" }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" style={{ padding: "76px 32px 84px", background: "#f7fafc", borderTop: "1px solid #eef2f6" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#238be6", marginBottom: 12 }}>Reviews</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em", color: "#14202c", margin: "0 0 14px" }}>Rated 4.9 by 1,200+ customers</h2>
            <div style={{ fontSize: 20, color: "#f5a623", letterSpacing: 3 }}>★★★★★</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { initials: "SM", name: "Sara M.", sub: "iPhone 14 screen", quote: "Shattered my iPhone screen at 10am, picked it up good as new by lunch. Fair price, no upselling, and they showed me the old parts." },
              { initials: "AK", name: "Ahmed K.", sub: "Water damage + data recovery", quote: "Two other shops said my water-damaged Samsung was dead. Ipro Fix recovered everything — the phone AND five years of photos." },
              { initials: "RD", name: "Rania D.", sub: "Business account, 40+ devices", quote: "We send all our company devices here. Quick quotes over WhatsApp, invoiced properly, and the repairs just last. Highly recommended." },
            ].map((r) => (
              <div key={r.name} style={{ background: "#ffffff", border: "1px solid #e7edf3", borderRadius: 14, padding: 28 }}>
                <div style={{ fontSize: 16, color: "#f5a623", letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#3d4854", margin: "0 0 20px" }}>&ldquo;{r.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#eaf4fd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#1a6fc0" }}>{r.initials}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#14202c" }}>{r.name}</div>
                    <div style={{ fontSize: 13, color: "#8a97a4" }}>{r.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" style={{ padding: "84px 32px", background: "#238be6" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#ffffff", margin: "0 0 16px" }}>Get your free quote in minutes</h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "#d4e8fb", margin: "0 0 36px" }}>Tell us the device and the problem — we&apos;ll reply with a fixed price. No obligation, no diagnosis fee.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a href="#contact" className={styles.ctaPrimary}>Request a quote</a>
            <a href="#contact" className={styles.ctaSecondary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4 h4 l2 5 -2.5 1.5 a11 11 0 0 0 5 5 L15 13 l5 2 v4 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 6 a2 2 0 0 1 2 -2"></path></svg>
              <span>WhatsApp a photo</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "84px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#238be6", marginBottom: 12 }}>Visit us</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em", color: "#14202c", margin: 0 }}>Find us or send a message</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 24, alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ background: "#f7fafc", border: "1px solid #e7edf3", borderRadius: 16, padding: 32, flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { label: "Address", content: "[Shop address line 1]\n[Area, City, UAE]" },
                    { label: "Hours", content: "Sat–Thu: 9:00 – 21:00\nFri: 14:00 – 21:00" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a97a4", marginBottom: 6 }}>{item.label}</div>
                      <div style={{ fontSize: 16, lineHeight: 1.55, color: "#14202c", fontWeight: 500 }}>
                        {item.content.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
                      </div>
                    </div>
                  ))}
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a97a4", marginBottom: 6 }}>Phone &amp; WhatsApp</div>
                    <div style={{ fontSize: 16, lineHeight: 1.55, color: "#238be6", fontWeight: 600 }}>+971 00 000 0000</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a97a4", marginBottom: 6 }}>Email</div>
                    <div style={{ fontSize: 16, lineHeight: 1.55, color: "#238be6", fontWeight: 600 }}>hello@iprofix.example</div>
                  </div>
                </div>
              </div>
              <div style={{ height: 200, borderRadius: 16, overflow: "hidden", flexShrink: 0 }}>
                <iframe
                  src="https://maps.google.com/maps?q=The+Dubai+Mall,+Dubai&hl=en&z=15&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ipro Fix location"
                />
              </div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e7edf3", borderRadius: 16, padding: 36, boxShadow: "0 4px 20px rgba(20,35,50,0.05)" }}>
              <div style={{ fontSize: 21, fontWeight: 800, color: "#14202c", marginBottom: 4 }}>Send us a message</div>
              <div style={{ fontSize: 14.5, color: "#6b7885", marginBottom: 24 }}>We usually reply within the hour during opening times.</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <input placeholder="Your name" style={{ border: "1.5px solid #d7dfe7", borderRadius: 11, padding: "13px 16px", fontSize: 15, color: "#14202c", background: "#ffffff", outline: "none", fontFamily: "inherit", colorScheme: "light" }} />
                <input placeholder="Phone number" style={{ border: "1.5px solid #d7dfe7", borderRadius: 11, padding: "13px 16px", fontSize: 15, color: "#14202c", background: "#ffffff", outline: "none", fontFamily: "inherit", colorScheme: "light" }} />
              </div>
              <input placeholder="Device (e.g. iPhone 15 Pro)" style={{ border: "1.5px solid #d7dfe7", borderRadius: 11, padding: "13px 16px", fontSize: 15, color: "#14202c", background: "#ffffff", outline: "none", fontFamily: "inherit", width: "100%", boxSizing: "border-box", marginBottom: 14, display: "block", colorScheme: "light" }} />
              <textarea placeholder="What's the problem?" rows={4} style={{ border: "1.5px solid #d7dfe7", borderRadius: 11, padding: "13px 16px", fontSize: 15, color: "#14202c", background: "#ffffff", outline: "none", fontFamily: "inherit", width: "100%", boxSizing: "border-box", marginBottom: 18, display: "block", resize: "none", colorScheme: "light" }} />
              <button className={styles.sendBtn}>Send message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#14202c", padding: "64px 32px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <IproLogo variant="dark" size={34} style={{ marginBottom: 16 }} />
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#94a3b1", margin: 0, maxWidth: 300 }}>Professional phone &amp; device repair. Genuine parts, certified technicians, 90-day warranty — most repairs done the same day.</p>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>Services</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5 }}>
                <a href="#services" className={styles.footerLink}>Screen replacement</a>
                <a href="#services" className={styles.footerLink}>Battery replacement</a>
                <a href="#services" className={styles.footerLink}>Water damage</a>
                <a href="#services" className={styles.footerLink}>Data recovery</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>Company</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5 }}>
                <a href="#how-it-works" className={styles.footerLink}>How it works</a>
                <a href="#reviews" className={styles.footerLink}>Reviews</a>
                <a href="#quote" className={styles.footerLink}>Get a quote</a>
                <a href="#contact" className={styles.footerLink}>Contact</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>Contact</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5, color: "#94a3b1" }}>
                <span>+971 00 000 0000</span>
                <span>hello@iprofix.example</span>
                <span>[Area, City, UAE]</span>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #26333f", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13.5, color: "#6d7c8a" }}>
            <span>© 2026 Ipro Fix. All rights reserved.</span>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Google Maps</span>
              <a href="/auth" className={styles.employeeLogin}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Employee login
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
