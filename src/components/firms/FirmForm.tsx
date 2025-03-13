"use client";

import React, { useState } from "react";
import Router from "next/router";
import { BackButton } from "@/components/ui/BackButton";
import { FirmType, StatusType } from "@/types";

interface FirmFormProps {
  isEdit?: boolean;
  initialData?: Partial<FirmType>;
}

export const FirmForm = ({
  isEdit = false,
  initialData = {},
}: FirmFormProps) => {
  const emptyForm = {
    name: "",
    industry: "",
    employees: "",
    status: "Pending" as StatusType,
    email: "",
    phone: "",
    address: "",
    description: "",
  };

  const [formData, setFormData] = useState({
    ...emptyForm,
    ...initialData,
  });

  const router = Router;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would submit the data to your API
    console.log(formData);
    router.push("/admin/firms");
  };

  return (
    <div>
      <div className="mb-6">
        <BackButton label="Back to Firms" />
        <h1 className="text-2xl font-bold">
          {isEdit ? "Edit Firm" : "Add New Firm"}
        </h1>
      </div>

      <div
        className="p-6 rounded-lg"
        style={{
          backgroundColor: "var(--background-card)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Firm Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
                placeholder="Enter firm name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
                placeholder="Enter industry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
                placeholder="Enter number of employees"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
              placeholder="Enter address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-background-dark border border-border-color text-text-white focus:border-primary-light transition-colors"
              placeholder="Enter firm description"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.push("/admin/firms")}
              className="px-4 py-2 rounded-md bg-background-card-hover text-text-white transition-colors hover:bg-background-card-hover/80"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md transition-colors"
              style={{
                background: "var(--gradient-purple)",
                boxShadow: "var(--shadow-light)",
              }}
            >
              {isEdit ? "Update Firm" : "Add Firm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
