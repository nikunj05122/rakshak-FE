import * as React from "react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleX } from "lucide-react";

// Zod schema for form validation
const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  designation: z.string().min(1, "Designation is required"),
  type: z.enum(["Super Admin", "Admin", "User", "Officer"], {
    errorMap: () => ({ message: "Type is required" }),
  }),
});

// Define the errors type
type Errors = {
  firstName?: string[];
  lastName?: string[];
  email?: string[];
  mobileNumber?: string[];
  designation?: string[];
  type?: string[];
};

export default function CardWithForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    designation: "",
    type: "",
  });

  const [errors, setErrors] = useState<Errors>({}); // Use the Errors type

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Clear error for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.id]: undefined,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      type: value,
    });

    // Clear error for the 'type' field when a new type is selected
    setErrors((prevErrors) => ({
      ...prevErrors,
      type: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data using zod schema
    const result = userSchema.safeParse(formData);

    if (!result.success) {
      // Extract and display validation errors
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors(errorMessages as Errors); // Ensure errorMessages matches the Errors type
    } else {
      // If validation passes, handle the form submission (e.g., send data to server)
      console.log("Form Submitted", formData);
      setErrors({});
      onClose(); // Close modal on successful submission
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <Card className="w-full max-w-[500px] max-h-[80vh] overflow-y-auto">
          <CardHeader>
            <div>
              <CardTitle>Create User</CardTitle>
              <CardDescription>
                Create your new user in one-click.
              </CardDescription>
            </div>
            {/* <div>
              <CircleX className="h-6 w-6 cursor-pointer" onClick={onClose} />
            </div> */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* First Name */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors?.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName[0]}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors?.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName[0]}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-sm">{errors.email[0]}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="mobileNumber">Mobile Number*</Label>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    pattern="[0-9]*"
                    maxLength={10}
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                  {errors?.mobileNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.mobileNumber[0]}
                    </p>
                  )}
                </div>

                {/* Designation */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="designation">Designation*</Label>
                  <Input
                    id="designation"
                    placeholder="Enter designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                  />
                  {errors?.designation && (
                    <p className="text-red-500 text-sm">
                      {errors.designation[0]}
                    </p>
                  )}
                </div>

                {/* Type (Select) */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Type*</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Super Admin">Super Admin</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                      <SelectItem value="Officer">Officer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors?.type && (
                    <p className="text-red-500 text-sm">{errors.type[0]}</p>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
