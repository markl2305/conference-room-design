"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { gtagLeadSubmit } from "@/lib/gtag";
import CTAButton from "../ui/CTAButton";

type Status = "idle" | "submitting" | "success" | "error";

const roleOptions = [
  "Managing Partner",
  "COO/CFO",
  "Office Manager",
  "Senior Advisor",
  "Other",
];

const platformOptions = ["Zoom", "Microsoft Teams", "Both Zoom & Teams", "Other"];

const interestsOptions = [
  { value: "Blueprint", label: "Smart Room Blueprint ($750)" },
  { value: "DesignPM", label: "Smart Room Design + Remote PM ($3,500–$6,500)" },
  { value: "Advice", label: "Not sure yet – I just want advice" },
];

type Errors = Record<string, string>;

export default function SmartRoomConsultForm() {
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [pageUrl, setPageUrl] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    firmName: "",
    role: "",
    email: "",
    phone: "",
    rooms: "",
    platform: "",
    primaryPain: "",
  });

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

  useEffect(() => {
    if (!searchParams) return;
    const interestParam = searchParams.get("interest");
    if (interestParam) {
      const normalized = interestParam
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
      if (normalized.length) {
        setInterests((prev) => Array.from(new Set([...prev, ...normalized])));
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const validate = () => {
    const nextErrors: Errors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.firmName.trim()) nextErrors.firmName = "Firm name is required.";
    if (!form.role.trim()) nextErrors.role = "Role is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (!form.rooms.trim()) nextErrors.rooms = "Select number of rooms.";
    if (!form.platform.trim()) nextErrors.platform = "Select your platform.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
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
          type: "consult",
          ...form,
          interests,
          ...utms,
          pageUrl,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      // Fire lightweight analytics hook if present
      if (typeof window !== "undefined" && "dataLayer" in window) {
        (window as any).dataLayer.push({ event: "smart_room_consult_submit" });
      }

      gtagLeadSubmit("design_callordut_main_form");

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Thanks — we got your request.</h3>
        <p className="text-gray-600">
          We’ll reach out within one business day to confirm your 15-minute Smart Room consult.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} id="smart-room-consult">
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900">Name*</label>
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
          placeholder="Your name"
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900">Firm Name*</label>
        <input
          type="text"
          value={form.firmName}
          onChange={handleChange("firmName")}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
          placeholder="Firm or organization"
        />
        {errors.firmName && <p className="text-sm text-red-600">{errors.firmName}</p>}
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900">Role*</label>
        <select
          value={form.role}
          onChange={handleChange("role")}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
        >
          <option value="">Select your role</option>
          {roleOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.role && <p className="text-sm text-red-600">{errors.role}</p>}
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900">Email*</label>
        <input
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
          placeholder="name@firm.com"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900">Phone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
          placeholder="(optional) Mobile or direct line"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-900">Number of conference rooms*</label>
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
          <label className="text-sm font-semibold text-gray-900">Primary platform*</label>
          <select
            value={form.platform}
            onChange={handleChange("platform")}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
          >
            <option value="">Select</option>
            {platformOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.platform && <p className="text-sm text-red-600">{errors.platform}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900">Interests</p>
        <div className="space-y-2">
          {interestsOptions.map((opt) => (
            <label key={opt.value} className="flex items-start gap-2 text-sm text-gray-800">
              <input
                type="checkbox"
                checked={interests.includes(opt.value)}
                onChange={() => toggleInterest(opt.value)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#279A92] focus:ring-[#279A92]"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-900">
          What’s the most frustrating part of your current conference room?
        </label>
        <textarea
          value={form.primaryPain}
          onChange={handleChange("primaryPain")}
          rows={3}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#279A92]"
          placeholder="Audio issues, camera angles, confusing controls, etc."
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          Something went wrong. Please try again, or email sales@callordut.com.
        </div>
      )}

      <CTAButton
        type="submit"
        className="w-full px-4 py-3 text-base"
        disabled={status === "submitting"}
        data-event="smart_room_consult_submit"
      >
        {status === "submitting" ? "Sending…" : "Book My 15-Minute Consult"}
      </CTAButton>
    </form>
  );
}
