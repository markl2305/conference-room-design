"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import CTAButton from "../ui/CTAButton";

type Status = "idle" | "submitting" | "success" | "error";

export default function SmartRoomAuditBand() {
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pageUrl, setPageUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    firmName: "",
    email: "",
    rooms: "",
    platform: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const utms = useMemo(
    () =>
      searchParams
        ? {
            utmSource: searchParams.get("utm_source") || undefined,
            utmMedium: searchParams.get("utm_medium") || undefined,
            utmCampaign: searchParams.get("utm_campaign") || undefined,
            utmTerm: searchParams.get("utm_term") || undefined,
            gclid: searchParams.get("gclid") || undefined,
          }
        : {},
    [searchParams]
  );

  const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.firmName.trim()) next.firmName = "Firm name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    if (!form.rooms.trim()) next.rooms = "Select rooms.";
    if (!form.platform.trim()) next.platform = "Select a platform.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/smart-room-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "audit",
          ...form,
          ...utms,
          pageUrl,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Unable to send your request.");
      }
      if (typeof window !== "undefined" && "dataLayer" in window) {
        (window as any).dataLayer.push({ event: "smart_room_audit_submit" });
      }
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" && typeof window !== "undefined") {
      // Trigger audit download once upon success
      window.open("/Smart_Room_Audit_CalLordUT.pdf", "_blank", "noopener,noreferrer");
    }
  }, [status]);

  return (
    <section className="bg-white" id="smart-room-audit">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#279A92] uppercase tracking-wide">
              5-Minute Conference Room Audit
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Not ready to talk yet? Get a fast audit in your inbox.
            </h3>
            <p className="text-gray-700 text-base">
              Tell us about your room and platform. We’ll send a quick checklist and watch-outs you can use immediately—no pressure, no sales pitch.
            </p>
          </div>
          <div>
            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 text-sm space-y-2">
                <p>Your 5-Minute Conference Room Audit is on its way to your inbox.</p>
                <a
                  href="/Smart_Room_Audit_CalLordUT.pdf"
                  className="inline-flex items-center justify-center rounded-lg bg-[#279A92] px-3 py-2 font-semibold text-white hover:bg-[#1f7e77]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the Audit PDF
                </a>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-900">Name*</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
                  />
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-900">Firm*</label>
                  <input
                    type="text"
                    value={form.firmName}
                    onChange={handleChange("firmName")}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
                  />
                  {errors.firmName && <p className="text-sm text-red-600">{errors.firmName}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-900">Email*</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-900">Rooms*</label>
                    <select
                      value={form.rooms}
                      onChange={handleChange("rooms")}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
                    >
                      <option value="">Select</option>
                      {["1", "2", "3", "4+"].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.rooms && <p className="text-sm text-red-600">{errors.rooms}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-900">Platform*</label>
                    <select
                      value={form.platform}
                      onChange={handleChange("platform")}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
                    >
                      <option value="">Select</option>
                      {["Zoom", "Microsoft Teams", "Both", "Other"].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.platform && <p className="text-sm text-red-600">{errors.platform}</p>}
                  </div>
                </div>
                {status === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    Something went wrong. Please retry.
                  </div>
                )}
                <CTAButton
                  type="submit"
                  className="w-full px-4 py-3 text-base"
                  disabled={status === "submitting"}
                  data-event="smart_room_audit_submit"
                >
                  {status === "submitting" ? "Sending…" : "Send My Audit"}
                </CTAButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
