"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "checking" | "unconfigured">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("checking");
    window.setTimeout(() => setStatus("unconfigured"), 350);
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Votre site</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className="form-grid">
        <Field label="Nom *" name="lastName" required /><Field label="Prénom" name="firstName" />
        <Field label="Entreprise" name="company" /><Field label="Téléphone *" name="phone" type="tel" required />
        <Field label="Email *" name="email" type="email" required /><Field label="Code postal *" name="postalCode" inputMode="numeric" pattern="[0-9]{5}" required />
        <Field label="Ville *" name="city" required />
        <label>Type de prestation *<select name="service" required defaultValue=""><option value="" disabled>Sélectionnez</option><option>Je ne sais pas / conseillez-moi</option><option>Décapage laser</option><option>Aérogommage</option></select></label>
        <label>Type de support *<select name="support" required defaultValue=""><option value="" disabled>Sélectionnez</option>{["Métal", "Bois", "Pierre", "Brique", "Béton", "Autre"].map((value) => <option key={value}>{value}</option>)}</select></label>
        <Field label="Surface approximative" name="surface" />
        <label className="form-full">Description du projet *<textarea name="description" rows={6} required minLength={20} placeholder="Que souhaitez-vous décaper ? Que faut-il retirer ? Quelles sont les dimensions ?" /></label>
        <label className="form-full file-field">Photos du projet<input name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple /><small>JPG, PNG ou WebP. L’envoi sera activé avec le service de messagerie.</small></label>
      </div>
      <label className="consent"><input type="checkbox" name="consent" required /><span>J’accepte que les informations transmises soient utilisées pour répondre à ma demande. <Link href="/politique-confidentialite">Politique de confidentialité</Link>.</span></label>
      {status === "unconfigured" && <p className="form-notice" role="status">Le formulaire est validé, mais l’envoi n’est pas encore configuré. Renseignez le service d’email avant la mise en ligne.</p>}
      <button className="primary-button" type="submit" disabled={status === "checking"}>{status === "checking" ? "Vérification…" : "Parler de mon projet →"}</button>
    </form>
  );
}

function Field({ label, name, type = "text", required, ...props }: { label: string; name: string; type?: string; required?: boolean; inputMode?: "numeric"; pattern?: string }) {
  return <label>{label}<input name={name} type={type} required={required} {...props} /></label>;
}
